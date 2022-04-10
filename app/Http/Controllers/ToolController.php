<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ToolController extends Controller
{
    public function index()
    {
        return Inertia::render('Tool/Index');
    }
}
