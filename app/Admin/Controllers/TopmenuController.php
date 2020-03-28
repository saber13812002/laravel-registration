<?php

namespace App\Admin\Controllers;

use App\Topmenu;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class TopmenuController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Topmenu';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Topmenu());

        $grid->column('id', __('Id'));
        $grid->column('title', __('Title'));
        $grid->column('classname', __('Classname'));
        $grid->column('link', __('Link'));
        $grid->column('alt', __('Alt'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Topmenu::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('title', __('Title'));
        $show->field('classname', __('Classname'));
        $show->field('link', __('Link'));
        $show->field('alt', __('Alt'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Topmenu());

        $form->text('title', __('Title'));
        $form->text('classname', __('Classname'));
        $form->url('link', __('Link'));
        $form->text('alt', __('Alt'));

        return $form;
    }
}
