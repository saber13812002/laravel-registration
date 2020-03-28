<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\Dashboard;
use Encore\Admin\Layout\Column;
use Encore\Admin\Layout\Content;
use Encore\Admin\Layout\Row;
use Harimayco\Menu\Models\Menus;
use Harimayco\Menu\Models\MenuItems;
use Harimayco\Menu\Facades\Menu;


class MenuController extends Controller
{
    public function index(Content $content)
    {

        $content->body(Menu::render());
        $content->body(Menu::scripts());
        
        // method `row` is alias for `body`
        return $content;
    }
}
