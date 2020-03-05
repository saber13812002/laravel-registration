<?php

namespace App\Admin\Actions\Document;

use Encore\Admin\Actions\Action;
use Illuminate\Http\Request;

class ImportDocument extends Action
{
    public $name = 'ImportDocument';

    protected $selector = '.import-document';

    public function handle(Request $request)
    {
        $name = $request->file('document')->getClientOriginalName();

        return $this->response()->success("ImportDocument : {$name}")->refresh();
    }

    public function form()
    {
        $this->file('document', 'ImportDocument');
    }

    public function html()
    {
        return <<<HTML
        <a class="btn btn-sm btn-default import-document">导入</a>
HTML;
    }
}