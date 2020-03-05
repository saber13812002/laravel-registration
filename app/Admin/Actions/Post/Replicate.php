<?php

namespace App\Admin\Actions\Post;

use Encore\Admin\Actions\RowAction;
use Illuminate\Database\Eloquent\Model;

class Replicate extends RowAction
{
    public $name = 'Replicate';

    public function handle(Model $model)
    {
        $model->replicate()->save();

        return $this->response()->success('Replicate.')->refresh();
    }

    public function dialog()
    {
        $this->confirm('Replicate?');
    }
}