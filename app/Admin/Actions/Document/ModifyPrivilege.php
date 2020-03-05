<?php

namespace App\Admin\Actions\Document;

use Encore\Admin\Actions\BatchAction;
use App\Models\Document;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ModifyPrivilege extends BatchAction
{
    public $name = 'ModifyPrivilege';

    public function handle(Collection $documents, Request $request)
    {
        foreach ($documents as $document) {
            $document->privilege = $request->privilege;
            $document->save();
        }

        return $this->response()->success('ModifyPrivilege')->refresh();
    }

    public function form()
    {
        $this->radio('privilege', 'ModifyPrivilege')->options(Document::$privileges);
    }
}