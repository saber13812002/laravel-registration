<?php

namespace App\Admin\Controllers;

use App\Team;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class TeamController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Team';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Team());

        $grid->column('id', __('Id'));
        $grid->column('author_id', __('Author id'));
        $grid->column('playground_id', __('Playground id'));
        $grid->column('name', __('Name'));
        $grid->column('desc', __('Desc'));
        $grid->column('city_id', __('City id'));
        $grid->column('player_id_1', __('Player id 1'));
        $grid->column('player_id_2', __('Player id 2'));
        $grid->column('player_id_3', __('Player id 3'));
        $grid->column('player_id_4', __('Player id 4'));
        $grid->column('picture_cdn', __('Picture cdn'));
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
        $show = new Show(Team::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('author_id', __('Author id'));
        $show->field('playground_id', __('Playground id'));
        $show->field('name', __('Name'));
        $show->field('desc', __('Desc'));
        $show->field('city_id', __('City id'));
        $show->field('player_id_1', __('Player id 1'));
        $show->field('player_id_2', __('Player id 2'));
        $show->field('player_id_3', __('Player id 3'));
        $show->field('player_id_4', __('Player id 4'));
        $show->field('picture_cdn', __('Picture cdn'));
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
        $form = new Form(new Team());

        $form->number('author_id', __('Author id'));
        $form->number('playground_id', __('Playground id'));
        $form->text('name', __('Name'));
        $form->text('desc', __('Desc'));
        $form->number('city_id', __('City id'));
        $form->number('player_id_1', __('Player id 1'));
        $form->number('player_id_2', __('Player id 2'));
        $form->number('player_id_3', __('Player id 3'));
        $form->number('player_id_4', __('Player id 4'));
        $form->textarea('picture_cdn', __('Picture cdn'));

        return $form;
    }
}
