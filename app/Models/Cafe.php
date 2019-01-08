<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\BrewMethod;
use App\User;

class Cafe extends Model
{
    //
    public function brewMethods(){
        return $this->belongsToMany(BrewMethod::class,'cafes_brew_methods','cafe_id','brew_method_id');
    }

    public function parent(){
        return $this->hasOne(Cafe::class,'id','parent');
    }

    public function child(){
        return $this->hasMany(Cafe::class,'parent','id');
    }

    public function likes(){
        return $this->belongsToMany(User::class,'users_cafes_likes','cafe_id','user_id');
    }

    public function userLike(){
        return $this->belongsToMany(User::class,'users_cafes_likes','cafe_id','user_id')->where('user_id',auth('api')->id());
    }
}
