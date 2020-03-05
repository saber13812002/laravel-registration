<?php

use App\Admin\Actions;
use App\Admin\Extensions\Column\OpenMap;
use App\Admin\Extensions\Column\FloatBar;
use App\Admin\Extensions\Column\UrlWrapper;
use App\Admin\Extensions\Nav;
use Encore\Admin\Form;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Grid\Column;

/**
 * Laravel-admin - admin builder based on Laravel.
 * @author z-song <https://github.com/z-song>
 *
 * Bootstraper for Admin.
 *
 * Here you can remove builtin form field:
 * Encore\Admin\Form::forget(['map', 'editor']);
 *
 * Or extend custom form field:
 * Encore\Admin\Form::extend('php', PHPEditor::class);
 *
 * Or require js and css assets:
 * Admin::css('/packages/prettydocs/css/styles.css');
 * Admin::js('/packages/prettydocs/js/main.js');
 *
 */

Encore\Admin\Form::forget(['map', 'editor']);


Admin::navbar(function (\Encore\Admin\Widgets\Navbar $navbar) {
    // $navbar->right(Nav\Link::make('Settings', 'forms/settings'));
    $navbar->right(Nav\Link::make('Register', 'forms/register', 'fa-user'));
    $navbar->right(new Nav\AutoRefresh())
        ->right(new Actions\ClearCache())
        ->right(new Actions\Feedback())
        ->right(new Actions\System());

    // $navbar->left(view('admin.search-bar'));

    $navbar->left(Nav\Shortcut::make([
        'Posts' => 'posts/create',
        'Users' => 'users/create',
        'Images' => 'images/create',
        'Videos' => 'videos/create',
        'Articles' => 'articles/create',
        'Tags' => 'tags/create',
        'Categories' => 'categories/create',
    ], 'fa-plus')->title('Create'));

    $navbar->left(new Nav\Dropdown());
});
