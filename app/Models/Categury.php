<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;


use App\Clinic;

class Categury extends Eloquent
{
    protected $casts = [
        'hasChild' => 'boolean',
    ];

    public function clinics()
    {
        return $this->hasMany('App\Clinic');
    }
}
