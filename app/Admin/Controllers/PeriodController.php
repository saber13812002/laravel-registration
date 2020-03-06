<?php

namespace App\Admin\Controllers;

use App\Models\Period;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class PeriodController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Models\Period';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Period());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('week_number', __('Week number'));
        $grid->column('from_date', __('From date'));
        $grid->column('to_date', __('To date'));
        $grid->column('number_of_days', __('Number of days'));
        $grid->column('active', __('Active'));
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
        $show = new Show(Period::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('week_number', __('Week number'));
        $show->field('from_date', __('From date'));
        $show->field('to_date', __('To date'));
        $show->field('number_of_days', __('Number of days'));
        $show->field('active', __('Active'));
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
        $form = new Form(new Period());

        $form->text('name', __('Name'));
        $form->switch('week_number', __('Week number'));
        $form->date('from_date', __('From date'))->default(date('Y-m-d'));
        $form->date('to_date', __('To date'))->default(date('Y-m-d'));
        $form->switch('number_of_days', __('Number of days'));
        $form->switch('active', __('Active'));

        return $form;
    }
}
