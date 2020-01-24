<?php

namespace App\Http\Controllers\APIs;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function store(Request $request) {
       Product::create([
           'name' => $request->get('name')
       ]);
    }
}
