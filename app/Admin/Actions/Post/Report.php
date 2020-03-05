<?php

namespace App\Admin\Actions\Post;

use Encore\Admin\Actions\RowAction;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Report extends RowAction
{
    public $name = 'Report';

    public function handle(Model $model, Request $request)
    {
        // $model ...

        return $this->response()->success('Success message.')->refresh();
    }

    public function form()
    {
        $type = [
            1 => 'تبلیغات',
            2 => 'غیرقانونی',
            3 => 'ماهیگیری',
        ];
        $this->checkbox('type', 'تایپ کنید')->options($type);
        $this->textarea('reason', 'علت');
    }
}