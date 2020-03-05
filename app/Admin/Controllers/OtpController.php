<?php

namespace App\Admin\Controllers;

use App\Models\Otp;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class OtpController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Otp';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Otp());

        $grid->column('id', __('Id'));
        $grid->column('mobile_number', __('Mobile number'));
        $grid->column('verification_code', __('Verification code'));
        $grid->column('verified', __('Verified'));
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
        $show = new Show(Otp::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('mobile_number', __('Mobile number'));
        $show->field('verification_code', __('Verification code'));
        $show->field('verified', __('Verified'));
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
        $form = new Form(new Otp());

        $form->text('mobile_number', __('Mobile number'));
        $form->text('verification_code', __('Verification code'));
        $form->number('verified', __('Verified'));

        return $form;
    }
}
