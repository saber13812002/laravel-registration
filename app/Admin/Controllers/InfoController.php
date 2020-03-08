<?php

namespace App\Admin\Controllers;

use App\Models\Info;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class InfoController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Info';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Info());

        $grid->column('id', __('Id'));
        $grid->column('author_id', __('Author id'));
        $grid->column('name', __('Name'));
        $grid->column('family', __('Family'));
        $grid->column('email', __('Email'));
        $grid->column('mobile', __('Mobile'));
        $grid->column('national_code', __('National code'));
        // $grid->column('psn_id', __('Psn id'));
        $grid->image('profile_picture_cdn', __('Profile picture'));
        // $grid->column('profile_picture', __('Profile picture'));
        $grid->column('shomshenas', __('Shomshenas'));
        $grid->column('type', __('Type'));
        // $grid->column('token', __('Token'));
        // $grid->column('req_date', __('Req date'));
        // $grid->column('req_time', __('Req time'));
        // $grid->column('req_status', __('Req status'));
        // $grid->column('created_at', __('Created at'));
        // $grid->column('updated_at', __('Updated at'));
        $grid->column('fathername', __('Fathername'));
        $grid->column('birthdate', __('Birthdate'));
        $grid->column('tahsilat', __('Tahsilat'));
        // $grid->column('ostan', __('Ostan'));
        // $grid->column('shahr', __('Shahr'));
        // $grid->column('province', __('Province'));
        // $grid->column('county', __('County'));
        // $grid->column('city', __('City'));
        $grid->column('address', __('Address'));
        $grid->column('postalcode', __('Postalcode'));
        $grid->column('phone', __('Phone'));
        $grid->column('smsSent', __('SmsSent'));

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
        $show = new Show(Info::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('author_id', __('Author id'));
        $show->field('name', __('Name'));
        $show->field('family', __('Family'));
        $show->field('email', __('Email'));
        $show->field('mobile', __('Mobile'));
        $show->field('national_code', __('National code'));
        $show->field('psn_id', __('Psn id'));
        $show->field('profile_picture', __('Profile picture'));
        $show->image('profile_picture_cdn', __('Profile picture'));
        $show->field('shomshenas', __('Shomshenas'));
        $show->field('type', __('Type'));
        $show->field('token', __('Token'));
        $show->field('req_date', __('Req date'));
        $show->field('req_time', __('Req time'));
        $show->field('req_status', __('Req status'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));
        $show->field('fathername', __('Fathername'));
        $show->field('birthdate', __('Birthdate'));
        $show->field('tahsilat', __('Tahsilat'));
        $show->field('ostan', __('Ostan'));
        $show->field('shahr', __('Shahr'));
        $show->field('province', __('Province'));
        $show->field('county', __('County'));
        $show->field('city', __('City'));
        $show->field('address', __('Address'));
        $show->field('postalcode', __('Postalcode'));
        $show->field('phone', __('Phone'));
        $show->field('smsSent', __('SmsSent'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Info());

        $form->number('author_id', __('Author id'));
        $form->text('name', __('Name'));
        $form->text('family', __('Family'));
        $form->email('email', __('Email'));
        $form->mobile('mobile', __('Mobile'));
        $form->text('national_code', __('National code'));
        $form->text('psn_id', __('Psn id'));
        $form->textarea('profile_picture', __('Profile picture'));
        $form->image('profile_picture_cdn', __('Profile picture'));
        $form->text('shomshenas', __('Shomshenas'));
        $form->textarea('type', __('Type'));
        $form->textarea('token', __('Token'));
        $form->date('req_date', __('Req date'))->default(date('Y-m-d'));
        $form->datetime('req_time', __('Req time'))->default(date('Y-m-d H:i:s'));
        $form->text('req_status', __('Req status'));
        $form->text('fathername', __('Fathername'));
        $form->text('birthdate', __('Birthdate'));
        $form->text('tahsilat', __('Tahsilat'));
        $form->text('ostan', __('Ostan'));
        $form->text('shahr', __('Shahr'));
        $form->number('province', __('Province'));
        $form->number('county', __('County'));
        $form->number('city', __('City'));
        $form->textarea('address', __('Address'));
        $form->text('postalcode', __('Postalcode'));
        $form->mobile('phone', __('Phone'));
        $form->textarea('smsSent', __('SmsSent'));
        $form->switch('active', __('active'));

        return $form;
    }
}
