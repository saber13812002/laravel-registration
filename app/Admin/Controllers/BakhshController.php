<?php

namespace App\Admin\Controllers;

use App\Models\Bakhsh;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class BakhshController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Models\Bakhsh';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Bakhsh());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('floor', __('Floor'));
        $grid->column('room', __('Room'));
        $grid->column('sex', __('Sex'));
        $grid->column('capacity', __('Capacity'));
        $grid->column('extra', __('Extra'));
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
        $show = new Show(Bakhsh::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('floor', __('Floor'));
        $show->field('room', __('Room'));
        $show->field('sex', __('Sex'));
        $show->field('capacity', __('Capacity'));
        $show->field('extra', __('Extra'));
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
        $form = new Form(new Bakhsh());

        $form->text('name', __('Name'));
        $form->switch('floor', __('Floor'));
        $form->switch('room', __('Room'));
        $form->text('sex', __('Sex'))->default('All');
        $form->switch('capacity', __('Capacity'));
        $form->switch('extra', __('Extra'));

        return $form;
    }
}
