<?php

namespace App\Http\Controllers;

use App\Mail\ForgotPassword;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    public function store(Request $request){
        $this->validate($request, [
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        $data = $request->input();

        $check_user_alreadyExit = User::where('email', $data['email'])->first();
        if ($check_user_alreadyExit){
            return response([
                'status' => false,
                'message' => "Your account already exit"
            ],200);
        }

        $user = new User();
        $user->username = $data['username'];
        $user->email    = $data['email'];
        $user->password = bcrypt($data['password']);
        $user->user_token = mt_rand(10000, 100000);

        $user->save();

        return response([
            'status' => true,
            'message' => 'Registration Successful',
            'data' => $user
        ],200);
    }

    public function login(Request $request){
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        $data = $request->input();
        $user_details =  [
            'email' => $data['email'],
            'password' => $data['password']
        ];

        if($token = JWTAuth::attempt($user_details)){
            return response([
                'status' => true,
                'message' => 'Login Successful',
                'data'=>Auth::user(),
                'token' => $token
            ],200);
        }else{
            return response([
                'status' => false,
                'message' => 'Invalid login details',
            ],422);
        }
    }

    public function forgotPassword(Request $request){
        $this->validate($request, [
            'email' => 'required|email'
        ]);

        $user = User::where('email', $request->email)->first();

        if(!user){
            return response([
                'status' => false,
               ' message' => 'Email does not exist'
            ]);
        }else{
            $token = mt_rand(100000,200000);
            $user = User::find($user->id);
            $link = $request->getHttpHost().'reset-password/'.$token;
            $user->remember_token = $token;

            Mail::to($user->email)->send(new ForgotPassword(['name' => $user->username, 'link' => $link]));

            $user->save();

            return response([
                'status' => true,
                'message' => "Please check your mail for a reset password link!!",
                'data' => $user->remember_token
            ]);

        }
    }

    public function confirmToken(Request $request,$token){
//        $token=$request->query('token');
        $check=User::where('remember_token',$token)->first();
        if(!$check){
            return response(['status' => false, 'message' => 'Incorrect Token'],422);
        }
        return response(['status' => true, 'data' => $token]);
    }

    public function resetPassword(Request $request){
        $token= $request->remember_token;

        $this->validate($request, [
            'reset-password' => 'required|min:6',
        ]);

        $check = User::where('remember_token', $token);
        if(!$check){
            return 'incorrect link';
        }
        $check->save();
        $check->password=$request->input('reset-password');
        $check->remember_token=mt_rand(10000,20000);

        return response([
            'status' => true,
            'message' => 'Password Changed Successfully'
        ]);
    }

}
