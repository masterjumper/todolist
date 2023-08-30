<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    
    public function create(Request $request){        
        $rules = [
            'name' => 'required|string|max:100',
            'email' => 'required|string|email|max:100',
            'password' =>'required|string'
        ];
        $validator = \Validator::make($request->input(),$rules);
        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'errors' =>$validator->errors()->all()
            ], 400);            
        }

        $user = User::create(
            [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password, ['rounds' => 10])
            ]
            );
        return response()->json([
            'status'=>true,
            'message' => 'User Created in successfully',            
            'token'=>$user->createToken('API TOKEN')->plainTextToken
        ], 200);
        
    }

    public function login(Request $request){        
        $rules = [
            'email' => 'required|string|email|max:100',
            'password' =>'required|string'
        ];
        $validator = \Validator::make($request->input(),$rules);
        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'errors' =>$validator->errors()->all()
            ], 400);            
        }
        if(!Auth::attempt($request->only('email', 'password'))){
            return response()->json([
                'status'=>false,
                'errors' =>['Unauthorized']
            ], 401); 
        }
        $user = User::where('email', $request->email)->first();
        return response()->json([
            'status'=>true,
            'message' => 'User Logged in successfully',
            'data'=>$user,
            'token'=>$user->createToken('API TOKEN')->plainTextToken
        ], 200);
        
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status'=>true,
            'message' => 'User Logged out successfully',                        
        ], 200);
    }

    public function generateToken()
    {
        $user = Auth::user();
        $token = $user->createToken('token-todolist')->plainTextToken;

        return response()->json(['token' => $token]);
    }
}
