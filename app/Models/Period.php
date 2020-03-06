<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Period extends Model
{
    //

    protected $fillable = ['name', 'week_number', 'from_date','to_date', 'number_of_days', 'active'];

}
