<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Timesheet extends Model
{
    //

    protected $fillable = ['period_id', 'user_id', 'shift_id', 'bakhsh_id', 'date', 'extra'];
    
}
