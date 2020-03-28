<?php

namespace App\Admin\Controllers;

use App\Match;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class MatchController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Match';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Match());

        $grid->column('id', __('Id'));
        $grid->column('playground_id', __('Playground id'));
        $grid->column('author_id', __('Author id'));
        $grid->column('team_id_1', __('Team id 1'));
        $grid->column('team_id_2', __('Team id 2'));
        $grid->column('score_1', __('Score 1'));
        $grid->column('score_2', __('Score 2'));
        $grid->column('quarter', __('Quarter'));
        $grid->column('finished', __('Finished'));
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
        $show = new Show(Match::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('playground_id', __('Playground id'));
        $show->field('author_id', __('Author id'));
        $show->field('team_id_1', __('Team id 1'));
        $show->field('team_id_2', __('Team id 2'));
        $show->field('score_1', __('Score 1'));
        $show->field('score_2', __('Score 2'));
        $show->field('quarter', __('Quarter'));
        $show->field('finished', __('Finished'));
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
        $form = new Form(new Match());

        $form->number('playground_id', __('Playground id'));
        $form->number('author_id', __('Author id'));
        $form->number('team_id_1', __('Team id 1'));
        $form->number('team_id_2', __('Team id 2'));
        $form->number('score_1', __('Score 1'));
        $form->number('score_2', __('Score 2'));
        $form->number('quarter', __('Quarter'));
        $form->switch('finished', __('Finished'));

        return $form;
    }
}
