<?php
namespace App\Composers;

use Illuminate\View\View;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class LocaleComposer
{
    public function compose(View $view)
    {
        $locale = LaravelLocalization::getCurrentLocale();
        $view->with('locale', $locale);

    }
}