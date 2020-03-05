<?php

namespace App\Admin\Actions\Document;

use Encore\Admin\Actions\RowAction;
use App\Models\Document;

class CloneDocument extends RowAction
{
    public $name = 'CloneDocument';

    public function handle(Document $document)
    {
        $document->replicate()->save();
        
        return $this->response()->success('CloneDocument')->refresh();
    }

    public function dialog()
    {
        $this->confirm('确认复制?');
    }
}