<?php

namespace App\Admin\Actions\Document;

use Encore\Admin\Actions\BatchAction;
use Illuminate\Database\Eloquent\Collection;

class CopyDocuments extends BatchAction
{
    public $name = 'CopyDocuments';

    public function handle(Collection $collection)
    {
        foreach ($collection as $model) {
            $model->replicate()->save();
        }

        return $this->response()->success('CopyDocuments')->refresh();
    }

    public function dialog()
    {
        $this->confirm('CopyDocuments');
    }
}