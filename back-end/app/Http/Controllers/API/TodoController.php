<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use DB;

class TodoController extends Controller
{
    public function insert (Request $request){


        $validator = Validator::make($request->all(), [
            'task' => 'required|max:255',
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'errors'=>$validator->errors()
            ],401);
        }

        $inserted = DB::table('tasks')->insert([
            'task'=> $request->task,
        ]);
        if ($inserted) {
            return response()->json([
                'message' => 'Task added successfully !',
                'status' => 200
            ]);
        }else{
            return response()->json([
                'message' => 'Something goes wrong to insert!',
            ]);
        }
    }


    public function editTask($id, $renamed){
        $updated = DB::table('tasks')->where('id', $id)->update([
            'task' => $renamed
        ]);

        if($updated){
            return response()->json([
                'message' => 'Task renamed successfully !',
                'status' => 200
            ]);
        }else{
            return response()->json([
                'message' => 'Something goes wrong to update!',
            ]);
        }
    }


    public function taskId($id){
        $data =  DB::table('tasks')-> where('id',$id)->first();
        if($data){
         return response()->json([
             'data' => $data,
             'status' => 200
         ]);
        }else{
         return response()->json([
             'message' => 'Something goes wrong to delete!',
         ]);
        }
     }

    public function deleteTask($id){
       $deleted =  DB::table('tasks')-> where('id',$id)->delete();
       if($deleted){
        return response()->json([
            'message' => 'Task deleted successfully!',
            'status' => 200
        ]);
       }else{
        return response()->json([
            'message' => 'Something goes wrong to delete!',
        ]);
       }
    }

    public function getTask(){
        $tasks = DB::table('tasks')->orderByDesc('id')->paginate(10);
        if($tasks->count() > 0){
            return response()->json([
                'lists' => $tasks,
                'status' => 200
            ]);
        }else{  
            return response()->json([
                'messsage' => 'No records found',
                'status' => 200
            ]);
        }
    }

    public function searchTask($taskname){
        $tasks = DB::table('tasks')->where('task','LIKE','%'.$taskname.'%')
        ->orderByDesc('id')->paginate(5);
        if($tasks->count() > 0){
            return response()->json([
                'lists' => $tasks,
                'status' => 200
            ]);
        }else{  
            return response()->json([
                'messsage' => 'No records found',
                'status' => 200
            ]);
        }
    }
}
