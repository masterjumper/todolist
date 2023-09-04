<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use Illuminate\Http\Request;


class TasksController extends Controller
{
    public function index()
    {
        $tasks = Tasks::orderBy('created_at', 'desc')->get();
        
        return response()->json($tasks);
    }

    public function store( Request $request)
    {
        $task = new Tasks($request->input());
        $task->save();
        
        return response()->json(
            [   'status' => true,
                'message' => 'Task created successfully',
                'task_id'=>$task['id']
            ], 200
        );
    }
    
    public function show($id)
    {
        $task = Tasks::find($id);
        if (!$task) {
            return response()->json(['status' => false, 'message' => 'Task not found'], 404);
        }
        return response()->json(
            [   'status' => true,
                'data' => $task
            ]
        );
    }

    public function edit($id)
    {
        $task = Task::findOrFail($id);

        return response()->json(
            [   'status' => true,
                'data' => $task,
                'message' => 'Task edit successfully'
            ], 200
        );
    }

    public function update(Request $request, Tasks $task)
    {
        $task->update($request->input());
        
        return response()->json(
            [   'status' => true,
                'message' => 'Task updated successfully'
            ], 200
        );
    }

    public function destroy(Request $request, Tasks $task)
    {
        $task->delete();
        
        return response()->json(
            [   'status' => true,
                'message' => 'Task deleted successfully'
            ], 200
        );
    }
}
