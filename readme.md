# How to start


## Demo

https://jjj.liara.run

## Installation:

you need xampp 

2- install vscode 

3- install git

4- install composer

5- install nodejs LTS


## Setup:

- first clone into your pc by git clone https://github.com/saber13812002/laravel-registration.git
- run: composer i
- run: npm i
- create new database in your mysql
- rename .env.example into .env file
- change dbname and credential to connect to mysql
- run: php artisan serve
- run: php artisan migrate
- run: php artisan db:seed
- run: php artisan admin:install

open this link:

localhost:8000/admin

then you need to run vuejs app

- run npm run watch

if ok please

## Amazon CDN S3 :

create new liara.ir account 
then create a storage from AMAZON s3
then paste your config into env file
then you can test upload pictures


## OTP:

then you can open this: http://localhost:8000/reg
then you need to configure your sms server to send sms or open otps table from phpmyadmin
if you type a phone number for registration you can see 5 digit otp in opts table

## Hosting

create new account in liara.ir

then create a mashine

then install npm liara npm package

then run liara deploy

now you can have a sample demo site like this: jjj.liara.run

## License:

The Laravel framework is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
