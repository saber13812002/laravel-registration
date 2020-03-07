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
        //$grid->column('period_id', __('Period id'));
        
        $grid->period_id(__('my.period'))->display(function ($period_id) {
            return ($period_id ? \App\Models\Period::find($period_id)->name : null);
        });

        // $grid->column('user_id', __('User id'));
        
        $grid->user_id(__('my.user'))->display(function ($user_id) {
            return ($user_id ? \App\User::find($user_id)->name : null);
        });

        // $grid->column('shift_id', __('Shift id'));
        
        $grid->shift_id(__('my.shift'))->display(function ($shift_id) {
            return ($shift_id ? \App\Models\Shift::find($shift_id)->name : null);
        });

        // $grid->column('bakhsh_id', __('Bakhsh id'));
        
        // $grid->bakhsh_id(__('my.bakhsh'))->display(function ($bakhsh_id) {
        //     return ($bakhsh_id ? \App\Models\Bakhsh::find($bakhsh_id)->name : null);
        // });

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
        

        $p = \App\Models\Period::all()->toArray();
        $pArray = [];
        foreach ($p as $item) {
            $pArray[$item['id']] = $item['name'];
        }
        $show->period_id(__('my.period'))->using($pArray);

        $show->field('user_id', __('User id'));
        $show->field('shift_id', __('Shift id'));
        // $show->field('bakhsh_id', __('Bakhsh id'));
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

        // $form->number('period_id', __('Period id'));
        
        $form->select('period_id', __('my.period'))->options(\App\Models\Period::all()->pluck('name', 'id'));

        // $form->number('user_id', __('User id'));
        $form->select('user_id', __('my.user'))->options(\App\User::all()->pluck('name', 'id'));

        // $form->number('shift_id', __('Shift id'));
        $form->select('shift_id', __('my.shift'))->options(\App\Models\Shift::all()->pluck('name', 'id'));

        // $form->number('bakhsh_id', __('Bakhsh id'));
        // $form->select('bakhsh_id', __('my.bakhsh'))->options(\App\Models\Bakhsh::all()->pluck('name', 'id'));

        $form->date('date', __('Date'))->default(date('Y-m-d'));
        $form->switch('extra', __('Extra'));

        return $form;
    }
}
