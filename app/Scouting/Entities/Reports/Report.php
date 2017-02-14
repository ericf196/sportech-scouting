<?php

namespace App\Scouting\Entities\Reports;

use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Users\User;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Reports\Report
 *
 * @property int $id
 * @property int $user_id
 * @property array $name
 * @property array $description
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property array $data
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Scoutings\Scouting[] $scoutings
 * @property-read \App\Scouting\Entities\Users\User $user
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereData($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereUserId($value)
 * @mixin \Eloquent
 * @property mixed $data_parry
 * @property mixed $data_combat_status
 * @property mixed $data_counteroffensive
 * @property mixed $data_defensive
 * @property mixed $data_offensive
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereDataCombatStatus($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereDataCounteroffensive($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereDataDefensive($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereDataOffensive($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereDataParry($value)
 * @property array $data_summary
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Reports\Report whereDataSummary($value)
 */
class Report extends Model
{
    use HasTranslations;

    public $translatable = ['name', 'description'];

    protected $casts = [
        'user_id'               => 'integer',
        'data'                  => 'array',
        'data_offensive'        => 'array',
        'data_defensive'        => 'array',
        'data_counteroffensive' => 'array',
        'data_combat_status'    => 'array',
        'data_parry'            => 'array',
        'data_summary'          => 'array',
        'auto_generated'        => 'boolean',
        'scouting_id'           => 'integer',
    ];
    protected $fillable = [
        'name', 'description', 'data', 'data_parry', 'data_combat_status', 'scouting_id',
        'data_counteroffensive', 'data_defensive', 'data_offensive', 'data_summary', 'auto_generated'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scoutings()
    {
        return $this->belongsToMany(Scouting::class, 'scoutings_reports');
    }

}
