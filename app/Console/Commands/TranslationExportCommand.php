<?php

namespace App\Console\Commands;

use DirectoryIterator;
use Exception;
use Illuminate\Console\Command;

class TranslationExportCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'translation:export {pathFrom?} {pathTo?} {name?} {locales?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Export a translation file to json format';

    protected $locales = [];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $rootLang = base_path() . '/resources/lang/';
        $rootJs = base_path() . '/resources/assets/js/lang/';

        $from = $this->argument('pathFrom');
        $to = $this->argument('pathTo');
        $fileName = $this->argument('name');
        $this->locales = $this->getSupportedLangages($rootLang);
        try {
            $data = $this->generateFromPath($from);

        } catch (Exception $e) {
            dd($e->getMessage(), $e->getLine());
        }
        if (!file_exists($rootJs . $to)) {
            mkdir($rootJs . $to, 0777, true);
        }
        $fileName = $fileName != '' ? $fileName : 'index';
        $jsFile = $rootJs . $to . '/' . $fileName . '.js';
        file_put_contents($jsFile, $data);
    }

    private function getSupportedLangages($rootLang)
    {
        if (!is_dir($rootLang)) {
            throw new Exception('Directory not found: ' . $rootLang);
        }
        $locales = [];
        $dir = new DirectoryIterator($rootLang);
        foreach ($dir as $fileinfo) {
            if (!$fileinfo->isDot()
                && $fileinfo->isDir()
                && !in_array($fileinfo->getFilename(), ['vendor'])
            ) {
                array_push($locales, $fileinfo->getFilename());
            }
        }

        return $locales;
    }

    private function generateFromPath($path)
    {
        $rootLang = base_path() . '/resources/lang/';
        $locales = [];

        foreach ($this->locales as $locale) {
            $translationPath = $rootLang . $locale . '/' . $path;
            if (!is_dir($translationPath)) {
                throw new Exception('Directory not found: ' . $translationPath);
            }
            $dir = new DirectoryIterator($translationPath);
            foreach ($dir as $fileinfo) {
                if (!$fileinfo->isDot()
                    && !$fileinfo->isDir()
                    && !in_array($fileinfo->getFilename(), ['vendor'])
                ) {
                    $locales[$locale] =
                        $this->allocateLocaleArray($fileinfo->getPath());

                } else {
                    if ($fileinfo->isDir() && !$fileinfo->isDot()) {
                        $this->info($fileinfo->getPathname());
                        $this->info($locale);
                        $pathFrom = explode('/' . $locale . '/', $fileinfo->getPathname());
                        if (isset($pathFrom[count($pathFrom) - 1])) {
                            $this->call('translation:export', [
                                'pathFrom' => $pathFrom[1],
                                'pathTo'   => $pathFrom[1],
                                'name'     => $fileinfo->getFilename()]);
                        }

                    }
                }
            }
        }
        return 'export default '
        . json_encode($locales, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . PHP_EOL;
    }

    private function allocateLocaleArray($path)
    {
        $data = [];
        $dir = new DirectoryIterator($path);
        foreach ($dir as $fileinfo) {
            if (!$fileinfo->isDot() && !$fileinfo->isDir()) {
                $noExt = $this->removeExtension($fileinfo->getFilename());
                $tmp = include($path . '/' . $fileinfo->getFilename());
                $data[$noExt] = $this->adjustArray($tmp);
            }
        }
        return $data;
    }

    private function adjustArray(array $arr)
    {
        $res = [];
        foreach ($arr as $key => $val) {
            if (is_string($val)) {
                $res[$key] = $this->adjustString($val);
            } else {
                $res[$key] = $this->adjustArray($val);
            }
        }
        return $res;
    }

    /**
     * Turn Laravel style ":link" into vue-i18n style "{link}"
     * @param string $s
     * @return string
     */
    private function adjustString($s)
    {
        if (!is_string($s)) {
            return $s;
        }
        return preg_replace_callback(
            '/(?<!mailto|tel):\w*/',
            function ($matches) {
                return '{' . mb_substr($matches[0], 1) . '}';
            },
            $s
        );
    }

    /**
     * @param string $filename
     * @return string
     */
    private function removeExtension($filename)
    {
        $pos = mb_strrpos($filename, '.');
        if ($pos === false) {
            return $filename;
        }
        return mb_substr($filename, 0, $pos);
    }

    private function mkpath($path)
    {
        if (@mkdir($path) or file_exists($path)) return true;
        return ($this->mkpath(dirname($path)) and mkdir($path));
    }
}
