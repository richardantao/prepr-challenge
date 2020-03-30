<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lab extends Model
{
    protected $table = 'labs';

    public $primaryKey = 'id';

    public $timestamps = true;
}
