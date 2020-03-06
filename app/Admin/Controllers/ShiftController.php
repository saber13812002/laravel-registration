<?php

namespace App\Admin\Controllers;

use App\Models\Shift;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ShiftController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Models\Shift';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Shift());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('from', __('From'));
        $grid->column('to', __('To'));
        $grid->column('fromHour', __('FromHour'));
        $grid->column('toHour', __('ToHour'));
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
        $show = new Show(Shift::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('from', __('From'));
        $show->field('to', __('To'));
        $show->field('fromHour', __('FromHour'));
        $show->field('toHour', __('ToHour'));
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
        $form = new Form(new Shift());

        $form->text('name', __('Name'));
        $form->number('from', __('From'));
        $form->number('to', __('To'));
        $form->time('fromHour', __('FromHour'))->default(date('H:i:s'));
        $form->time('toHour', __('ToHour'))->default(date('H:i:s'));

        return $form;
    }
}
