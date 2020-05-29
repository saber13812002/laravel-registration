<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kavenegar;
use App\Models\Smslog;

class SmsController extends Controller
{
    //
    public function send($mobile_number, $rand_no)
    {
        $curl = curl_init();
        //echo $recipient_no;echo $rand_no;
        //1000596446
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.kavenegar.com/v1/" . env("KavenegarApiKey") . "/verify/lookup.json",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"receptor\"\r\n\r\n" . (env('OTP_REDIRECT_TO_Admin') ? env('OTP_MOBILE_PHONE') : $mobile_number) . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" . $rand_no . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"template\"\r\n\r\n" . env("KaveNegarVerificationTemplateName") . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nsms\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--",
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
                "postman-token: c19618a1-fe23-69ea-de69-be1eedc13cfe",
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);
        //$err = false;

        //echo $response;

        curl_close($curl);

        if ($err) {
            //echo "cURL Error #:" . $err;
            //TODO: send error or  log or telegram or email or all
            return false;
        } else {
            //echo $response;
            //TODO: send error or  log or telegram or email or all
            return true;
        }
    }

    public function smsSent($mobile_number, $kavenegar_template)
    {
        $curl = curl_init();
        //echo $recipient_no;echo $rand_no;
        $rand_no = ".";
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.kavenegar.com/v1/" . env("KavenegarApiKey") . "/verify/lookup.json",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"receptor\"\r\n\r\n" . $mobile_number . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" . $rand_no . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"template\"\r\n\r\n" . $kavenegar_template . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nsms\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--",
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
                "postman-token: c19618a1-fe23-69ea-de69-be1eedc13cfe",
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);
        //$err = false;

        //echo $response;

        curl_close($curl);

        if ($err) {
            //echo "cURL Error #:" . $err;
            //TODO: send error or  log or telegram or email or all
            return false;
        } else {
            //echo $response;
            //TODO: send error or  log or telegram or email or all
            return true;
        }
    }

    public function sendText($mobile_number)
    {

        try {
            $sender = "1000596446";
            $message = "با سلام.
سامانه ... خوش آمدید
ثبت نام شما انجام شد
";
            $receptor = array($mobile_number);
            $result = Kavenegar::Send($sender, $receptor, $message);
            if ($result) {
                foreach ($result as $r) {

                    $inf = new Smslog;
                    $inf->messageid = $r->messageid;
                    $inf->message = $r->message;
                    $inf->status =  $r->status;
                    $inf->statustext = $r->statustext;
                    $inf->sender = $r->sender;
                    $inf->receptor = $r->receptor;
                    $inf->date = $r->date;
                    $inf->cost = $r->cost;
                    $inf->save();
                }
            }
        } catch (\Kavenegar\Exceptions\ApiException $e) {
            // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
            echo $e->errorMessage();
        } catch (\Kavenegar\Exceptions\HttpException $e) {
            // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
            echo $e->errorMessage();
        }
    }

    public function send2($mobile_number, $rand_no)
    {
        try {
            $sender = "1000596446";
            $message = "با سلام.
سامانه ...خوش آمدید
کد فعالسازی شما
" . $rand_no;
            $receptor = array($mobile_number);
            $template = "FfiriFansVerificationCode";
            $token = $rand_no;
            //$result = Kavenegar::Verify($template, $receptor, $token);
            $result = Kavenegar::Send($sender, $receptor, $message);
            if ($result) {
                foreach ($result as $r) {
                    // echo "messageid = $r->messageid";
                    // echo "message = $r->message";
                    // echo "status = $r->status";
                    // echo "statustext = $r->statustext";
                    // echo "sender = $r->sender";
                    // echo "receptor = $r->receptor";
                    // echo "date = $r->date";
                    // echo "cost = $r->cost";

                    $inf = new Smslog;
                    $inf->messageid = $r->messageid;
                    $inf->message = $r->message;
                    $inf->status =  $r->status;
                    $inf->statustext = $r->statustext;
                    $inf->sender = $r->sender;
                    $inf->receptor = $r->receptor;
                    $inf->date = $r->date;
                    $inf->cost = $r->cost;
                    $inf->save();
                }
            }
        } catch (\Kavenegar\Exceptions\ApiException $e) {
            // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
            echo $e->errorMessage();
        } catch (\Kavenegar\Exceptions\HttpException $e) {
            // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
            echo $e->errorMessage();
        }
    }

    public function send3($mobile_number, $rand_no)
    {

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.kavenegar.com/v1/" . env("KavenegarApiKey") . "/verify/lookup.json",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"receptor\"\r\n\r\n09196070718\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"template\"\r\n\r\nFfiriFansVerificationCode\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n11111\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--",
            CURLOPT_HTTPHEADER => array(
                "Accept: */*",
                "Cache-Control: no-cache",
                "Connection: keep-alive",
                "Host: api.kavenegar.com",
                "Postman-Token: 01bf0e08-daf8-443d-96b9-f10102f93f53,9ec37ee8-2614-41ab-b5c7-b5868aec5de4",
                "User-Agent: PostmanRuntime/7.15.0",
                "accept-encoding: gzip, deflate",
                "cache-control: no-cache",
                "content-length: 415",
                "content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            echo $response;
        }
    }

    public function send4($mobile_number, $rand_no)
    {

        $request = new HttpRequest();
        $request->setUrl('https://api.kavenegar.com/v1/" . env("KavenegarApiKey") . "/verify/lookup.json');
        $request->setMethod(HTTP_METH_POST);

        $request->setHeaders(array(
            'cache-control' => 'no-cache',
            'Connection' => 'keep-alive',
            'content-length' => '415',
            'content-type' => 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
            'accept-encoding' => 'gzip, deflate',
            'Host' => 'api.kavenegar.com',
            'Postman-Token' => '01bf0e08-daf8-443d-96b9-f10102f93f53,6137f18f-1bb5-453b-a85d-fbf9b88a74ac',
            'Cache-Control' => 'no-cache',
            'Accept' => '*/*',
            'User-Agent' => 'PostmanRuntime/7.15.0'
        ));

        $request->setBody('------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="receptor"

09196070718
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="template"

FfiriFansVerificationCode
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="token"

11111
------WebKitFormBoundary7MA4YWxkTrZu0gW--');

        try {
            $response = $request->send();

            echo $response->getBody();
        } catch (HttpException $ex) {
            echo $ex;
        }
    }

    public function send5($mobile_number, $rand_no)
    {

        $client = new http\Client;
        $request = new http\Client\Request;

        $body = new http\Message\Body;
        $body->addForm(array(
            'receptor' => '09196070718',
            'template' => 'FfiriFansVerificationCode',
            'token' => '11111'
        ), NULL);

        $request->setRequestUrl('https://api.kavenegar.com/v1/" . env("KavenegarApiKey") . "/verify/lookup.json');
        $request->setRequestMethod('POST');
        $request->setBody($body);

        $request->setHeaders(array(
            'cache-control' => 'no-cache',
            'Connection' => 'keep-alive',
            'content-length' => '415',
            'accept-encoding' => 'gzip, deflate',
            'Host' => 'api.kavenegar.com',
            'Postman-Token' => 'dacd5d09-0e66-4b6a-9269-9cd4ec7986fb,38b00eb2-b567-4206-a2e0-63dd8eeaffa8',
            'Cache-Control' => 'no-cache',
            'Accept' => '*/*',
            'User-Agent' => 'PostmanRuntime/7.15.0'
        ));

        $client->enqueue($request)->send();
        $response = $client->getResponse();

        echo $response->getBody();
    }

    public function send6($mobile_number, $rand_no)
    {
        $client = new \GuzzleHttp\Client();
        $url = "https://api.kavenegar.com/v1/" . env("KavenegarApiKey") . "/verify/lookup.json";

        //$myBody['name'] = "Demo";
        $body = array(
            'form_params' => array(
                'receptor' => '09196070718',
                'template' => 'FfiriFansVerificationCode',
                'token' => '11111'
            )
        );

        $request = $client->put($url, $body);
        $response = $request->send();

        dd($response);
    }
}
