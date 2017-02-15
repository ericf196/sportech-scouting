<?php

namespace App\Scouting\Entities\Rankings;

use App\Scouting\Entities\Users\User;
use DB;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * App\Scouting\Entities\Rankings\Ranking
 *
 * @property-read \App\Scouting\Entities\Users\User $user
 * @mixin \Eloquent
 */
class Ranking extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'ranking';
    protected $fillable = ['points'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeGetWithRowNumber($query, $columns = ['*'], $paginate = null)
    {
        // Set the row number
        $offset = (int)$query->getQuery()->offset;
        DB::statement(DB::raw("set @row={$offset}"));

        // Adjust SELECT clause to contain the row
        if (!count($query->getQuery()->columns)) $query->select($columns);
        $sub = $query->addSelect([DB::raw('@row:=@row+1 as row')]);

        // Return the result instead of builder object
        if ($paginate) {
            return $query->paginate($paginate);
        }
        return $query->get();
    }
}
