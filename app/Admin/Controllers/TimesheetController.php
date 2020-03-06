<?php

namespace App\Admin\Controllers;

use App\Models\Timesheet;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class TimesheetController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Models\Timesheet';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Timesheet());

        $grid->column('id', __('Id'));
        $grid->column('period_id', __('Period id'));
        $grid->column('user_id', __('User id'));
        $grid->column('shift_id', __('Shift id'));
        $grid->column('bakhsh_id', __('Bakhsh id'));
        $grid->column('date', __('Date'));
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
        $show = new Show(Timesheet::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('period_id', __('Period id'));
        $show->field('user_id', __('User id'));
        $show->field('shift_id', __('Shift id'));
        $show->field('bakhsh_id', __('Bakhsh id'));
        $show->field('date', __('Date'));
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
        $form = new Form(new Timesheet());

        $form->number('period_id', __('Period id'));
        $form->number('user_id', __('User id'));
        $form->number('shift_id', __('Shift id'));
        $form->number('bakhsh_id', __('Bakhsh id'));
        $form->date('date', __('Date'))->default(date('Y-m-d'));
        $form->switch('extra', __('Extra'));

        return $form;
    }
}
