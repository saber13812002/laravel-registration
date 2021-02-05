<?php

namespace App\Http\Controllers;

class MizanController extends Controller
{

    public function index()
    {
        return view('Mizan');
    }

    public function profile()
    {
        return view('profile');
    }

    public function register()
    {
        return view('register');
    }

    public function show()
    {
        return view('show');
    }

    public function bank()
    {
        return view('bank');
    }

    public function bankData()
    {
        return view('bank-data');
    }

    public function company()
    {
        return view('company');
    }

    public function companyPosts()
    {
        return view('company-posts');
    }

    public function companyUsers()
    {
        return view('company-users');
    }

    public function megaMenu()
    {
        return view('mega-menu');
    }
}
