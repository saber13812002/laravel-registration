<!DOCTYPE html>

<html>

<head>

    <title>image upload</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

</head>



<body>

    <div class="container">



        <div class="panel panel-primary">

            <div class="panel-heading">
                <h2>image upload</h2>
            </div>

            <div class="panel-body">



                @if ($message = Session::get('success'))

                <div class="alert alert-success alert-block">

                    <button type="button" class="close" data-dismiss="alert">×</button>

                    <strong>{{ $message }}</strong>
                    <a href="{{ Session::get('link')}}">بازگشت به اپ</a>

                </div> <img src="images/avatars/{{ Session::get('image') }}">

                @endif



                @if (count($errors) > 0)

                <div class="alert alert-danger">

                    <strong>Whoops!</strong> There were some problems with your input.

                    <ul>

                        @foreach ($errors->all() as $error)

                        <li>{{ $error }}</li>

                        @endforeach

                    </ul>

                </div>

                @endif



                <form action="{{ route('image.upload.post',[$id]) }}" method="POST" enctype="multipart/form-data">

                    @csrf

                    <div class="row">



                        <div class="col-md-6">

                            <input type="file" name="image" class="form-control">

                        </div>



                        <div class="col-md-6">

                            <button type="submit" class="btn btn-success">Upload</button>

                        </div>



                    </div>

                </form>



            </div>

        </div>

    </div>

</body>



</html>