<?php

namespace App\Admin\Controllers;

use App\Playground;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class PlaygroundController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Playground';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Playground());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('type', __('Type'));
        $grid->column('lat', __('Lat'));
        $grid->column('lng', __('Lng'));
        $grid->column('desc', __('Desc'));
        $grid->column('tlgrmGroupAdminId', __('TlgrmGroupAdminId'));
        $grid->column('tlgrmGroupJoinLink', __('TlgrmGroupJoinLink'));
        $grid->column('tlgrmChannelId', __('TlgrmChannelId'));
        $grid->column('instagramId', __('InstagramId'));
        $grid->column('province_id', __('Province id'));
        $grid->column('county_id', __('County id'));
        $grid->column('city_id', __('City id'));
        $grid->column('pushe_id', __('Pushe id'));
        $grid->column('chat_id', __('Chat id'));
        $grid->column('active', __('Active'));
        $grid->column('rimHeight', __('RimHeight'));
        $grid->column('distance2parking', __('Distance2parking'));
        $grid->column('rimNumber', __('RimNumber'));
        $grid->column('roof', __('Roof'));
        $grid->column('spotlight', __('Spotlight'));
        $grid->column('fence', __('Fence'));
        $grid->column('parking', __('Parking'));
        $grid->column('basketnet', __('Basketnet'));
        $grid->column('scoreline', __('Scoreline'));
        $grid->column('lines', __('Lines'));
        $grid->column('author_id', __('Author id'));
        $grid->column('editor_id', __('Editor id'));
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
        $show = new Show(Playground::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('type', __('Type'));
        $show->field('lat', __('Lat'));
        $show->field('lng', __('Lng'));
        $show->field('desc', __('Desc'));
        $show->field('tlgrmGroupAdminId', __('TlgrmGroupAdminId'));
        $show->field('tlgrmGroupJoinLink', __('TlgrmGroupJoinLink'));
        $show->field('tlgrmChannelId', __('TlgrmChannelId'));
        $show->field('instagramId', __('InstagramId'));
        $show->field('province_id', __('Province id'));
        $show->field('county_id', __('County id'));
        $show->field('city_id', __('City id'));
        $show->field('pushe_id', __('Pushe id'));
        $show->field('chat_id', __('Chat id'));
        $show->field('active', __('Active'));
        $show->field('rimHeight', __('RimHeight'));
        $show->field('distance2parking', __('Distance2parking'));
        $show->field('rimNumber', __('RimNumber'));
        $show->field('roof', __('Roof'));
        $show->field('spotlight', __('Spotlight'));
        $show->field('fence', __('Fence'));
        $show->field('parking', __('Parking'));
        $show->field('basketnet', __('Basketnet'));
        $show->field('scoreline', __('Scoreline'));
        $show->field('lines', __('Lines'));
        $show->field('author_id', __('Author id'));
        $show->field('editor_id', __('Editor id'));
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
        $form = new Form(new Playground());

        $form->text('name', __('Name'));
        $form->text('type', __('Type'));
        $form->text('lat', __('Lat'));
        $form->text('lng', __('Lng'));
        $form->text('desc', __('Desc'));
        $form->text('tlgrmGroupAdminId', __('TlgrmGroupAdminId'));
        $form->text('tlgrmGroupJoinLink', __('TlgrmGroupJoinLink'));
        $form->text('tlgrmChannelId', __('TlgrmChannelId'));
        $form->text('instagramId', __('InstagramId'));
        $form->number('province_id', __('Province id'));
        $form->number('county_id', __('County id'));
        $form->number('city_id', __('City id'));
        $form->text('pushe_id', __('Pushe id'));
        $form->text('chat_id', __('Chat id'));
        $form->switch('active', __('Active'));
        $form->text('rimHeight', __('RimHeight'));
        $form->text('distance2parking', __('Distance2parking'));
        $form->text('rimNumber', __('RimNumber'));
        $form->text('roof', __('Roof'));
        $form->text('spotlight', __('Spotlight'));
        $form->text('fence', __('Fence'));
        $form->text('parking', __('Parking'));
        $form->text('basketnet', __('Basketnet'));
        $form->text('scoreline', __('Scoreline'));
        $form->text('lines', __('Lines'));
        $form->number('author_id', __('Author id'));
        $form->number('editor_id', __('Editor id'));

        return $form;
    }
}
