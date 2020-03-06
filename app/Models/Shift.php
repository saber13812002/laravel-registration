<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shift extends Model
{
    //

    protected $fillable = ['name', 'from', 'to', 'fromHour', 'toHour'];
}
