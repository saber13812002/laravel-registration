<?php

namespace App\Admin\Actions\Document;

use Encore\Admin\Actions\BatchAction;
use Illuminate\Database\Eloquent\Collection;

class ShareDocuments extends BatchAction
{
    public $name = 'ShareDocuments';

    public function handle(Collection $collection)
    {
        foreach ($collection as $model) {
            // ...
        }

        return $this->response()->success('ShareDocuments')->refresh();
    }

    public function dialog()
    {
        $this->confirm('ShareDocuments?');
    }
}