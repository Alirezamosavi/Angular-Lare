<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use\App\laravel;

class AngularController extends Controller
{   //  this Add Delete Edit that need to your App
    public function index(){
        return laravel::all();
    }
    
    public function show($id){
        return laravel::find($id);
    }
    // Stor is Save to new data
    public function store(Request $request){
        return laravel::create($request->all());
    } 

 //   Update is to Edit data
    public function update(Request $request, $id){
        $angular= laravel::findOrFail($id);
        $angular->update($request->all());
        return $angular;
    } 
//Delete is to delete of data
    public function delete(Request $request, $id){
        $angular= laravel::findOrFail($id);
        $angular->delete();
        return 204;  // beacause we Use of frontend return to 204
    }
}
