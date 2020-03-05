<?php

namespace App\Admin\Extensions\Nav;

use Illuminate\Contracts\Support\Renderable;

class Dropdown implements Renderable
{
    public function render()
    {
        return <<<HTML
<li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <i class="fa fa-th"></i>
    </a>
    <ul class="dropdown-menu" style="padding: 0;box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);">
        <li>
           <div class="box box-solid" style="width: 300px;height: 300px;margin-bottom: 0;">
            <!-- /.box-header -->
            <div class="box-body">
              <a class="btn btn-app" href="/admin/posts">
            <i class="fa fa-edit"></i> Posts
              </a>
              <a class="btn btn-app" href="/admin/users">
                <i class="fa fa-users"></i> Users
              </a>
              <a class="btn btn-app" href="/admin/images">
                <i class="fa fa-picture-o"></i> Images
              </a>
              <a class="btn btn-app" href="/admin/videos">
                <i class="fa fa-play"></i> Videos
              </a>
              <a class="btn btn-app" href="/admin/articles">
                <i class="fa fa-file-text"></i> Articles
              </a>
              <a class="btn btn-app" href="/admin/tags">
                <i class="fa fa-tags"></i> Tags
              </a>
              <a class="btn btn-app" href="/admin/documents">
                <i class="fa fa-file-o"></i> Documents
              </a>
              <a class="btn btn-app" href="/admin/chartjs">
                <i class="fa fa-line-chart"></i> Charts
              </a>
            </div>
            <!-- /.box-body -->
          </div>
      </li>
    </ul>
</li>
HTML;

    }
}