<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lab;

class LabsController extends Controller
{
    public function index() 
    {
        $labs =  Lab::all();

        // return view('dashboard')->with('labs', $labs);
        return $labs;
    }
}
