<?php

namespace App\Admin\Actions;

use Encore\Admin\Actions\Action;
use Illuminate\Http\Request;

class System extends Action
{
    public $name = 'system';

    protected $selector = '.system';

    public function handle(Request $request)
    {
        // $request ...

        return $this->response()->success($request->get('name'))->refresh();
    }

    public function form()
    {
        $this->text('name', 'system');
        $this->textarea('desc', 'system');
    }

    public function html()
    {
        return <<<HTML
<li>
    <a href="javascript:void(0);" class="system">
      <i class="fa fa-wrench"></i>
    </a>
</li>
HTML;
    }
}