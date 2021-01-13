<?php

namespace App\Http\Controllers;

use App\Anonymous;
use App\User;
use Illuminate\Http\Request;

class AnonymousController extends Controller
{
    public function store(Request $request, $user_token, $id){
        $this->validate($request, [
            'anonymous_msg' => 'required'
        ]);

        $user = User::findorfail($id);

        $user_token = User::findorfail($user_token);
        $anonymous = new Anonymous;
        $data = $request->input();
        $anonymous->anonymous_msg = $data['anonymous_msg'];
        $anonymous->user()->associate($user);

        $anonymous->save();

        return response([
            'status' => true,
            'message' => 'Anonymous added successfully',
            'date' => $user_token
        ]);
    }
}
