<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pay;

class BankController extends Controller
{
    public function payment(Request $request)
    {
        try {

            $pay = Pay::where('author_id', $request['author_id'])->first();

            if ($pay->result <> "Payed") {

                // $gateway = \Gateway::mellat();

                $gateway = \Gateway::saman();


                $gateway
                    ->price(1000)
                    // setShipmentPrice(10) // optional - just for paypal
                    // setProductName("My Product") // optional - just for paypal
                    ->ready();

                $refId =  $gateway->refId(); // شماره ارجاع بانک
                $transId = $gateway->transactionId(); // شماره تراکنش

                //mellat:

                //$gateway->setCallback(url('/verifypayment' . '/' . $transId . '/' . $refId)); //You can also change the callback


                //saman:
                $gateway->setCallback(url('/verifypayment')); //You can also change the callback


                // در اینجا
                //  شماره تراکنش  بانک را با توجه به نوع ساختار دیتابیس تان
                //  در جداول مورد نیاز و بسته به نیاز سیستم تان
                // ذخیره کنید .


                $pay->refId = $refId;
                $pay->transId = $transId;
                $pay->result = "GoToPay";
                $pay->save();
                return $gateway->redirect();
            }


            return "
            پرداخت برای کاربر شما یکبار با موفقیت انجام شده است 
            به اپ باز گردید و صفحه را ریفرش کنید";
        } catch (\Exception $e) {

            echo $e->getMessage();
        }
    }

    public function verifypayment(Request $request)
    {
        try {

            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

            $pay = Pay::where('transId', $request["transaction_id"])->first();
            $pay->trackingCode = $trackingCode;
            $pay->cardNumber = $cardNumber;
            $pay->result = "Payed";
            $pay->save();

            // تراکنش با موفقیت سمت بانک تایید گردید
            // در این مرحله عملیات خرید کاربر را تکمیل میکنیم

            echo "عملیات خرید تکمیل شد ";

            echo "\n\r" . "<br>";

            echo "به اپلیکیشن باز گردید";

            echo "<a href='" . env('APP_HOT_LINK') . "'>بازگشت به اپ اینجا کلیک کنید</a>";
        } catch (\Larautility\Gateway\Exceptions\RetryException $e) {

            // تراکنش قبلا سمت بانک تاییده شده است و
            // کاربر احتمالا صفحه را مجددا رفرش کرده است
            // لذا تنها فاکتور خرید قبل را مجدد به کاربر نمایش میدهیم



            // $pay = Pay::where('transId', $request["transaction_id"])->first();
            // $pay->result = "Payed";
            // $pay->save();

            echo $e->getMessage() . "<br>";
        } catch (\Exception $e) {

            // نمایش خطای بانک
            echo $e->getMessage();
        }
    }
}
