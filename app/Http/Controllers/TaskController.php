<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Validator;
use App\Models\Task;

class TaskController extends Controller
{
    
    function listItem(Request $req) {
        $data = Task::all();
        return view('welcome')->withData($data);
    }
    
    public function addItem(Request $request)
    {
        $data = new Task();
        $data->name = $request->name;
        $data->value = $request->router_value;
        $data->save();
        
        return response()->json($data);
    }
    
    
    public function editItem(Request $req)
    {
        $data = Task::find($req->id);
        $data->name = $req->name;        
        $data->value = $req->router_value;
        $data->save();
        
        return response()->json($data);
    }
    public function deleteItem(Request $req)
    {
        Task::find($req->id)->delete();
        
        return response()->json();
    }
    
    public function generateRecord(Request $req)
    {
        $g = $req->g;
        $text = '0123456789abcdefghijklmnopqrstuvwxyz';
        $name = substr(str_shuffle($text), 0, 10);
        $value = rand(10,100);
        
        if ($g > 1) {
            for ($i = 0; $i < $g; $i++) {
                $name = substr(str_shuffle($text), 0, 10);
                $value = rand(2, 3);
                $data = new Task();
                $data->name = $name;
                $data->value = $value;
                $data->save();             
            }
            return response()->json($data);
        }
        else {
            $data = new Task();
            $data->name = $name;
            $data->value = $value;
            $data->save();
        }
        
        return response()->json($data);        
    }
}
