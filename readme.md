# How to start


## Demo

/

## Installation: https://github.com/saber13812002/laravel-registration/wiki

you need xampp 

2- install vscode 

3- install git

4- install composer

5- install nodejs LTS

https://github.com/saber13812002/laravel-registration/wiki

## Setup: https://github.com/saber13812002/laravel-registration/wiki/SETUP

- first clone into your pc by git clone https://github.com/saber13812002/laravel-registration.git
- run: composer i
- run: npm i
- create new database in your mysql
- rename .env.example into .env file
- change dbname and credential to connect to mysql in .env file and change APP_ENV from **productio**n to **local**
- run: 

      php artisan serve

- run: 

      php artisan migrate
        
- run: 

      php artisan db:seed
        
        
- run 

      npm run watch
      
- now you can open localhost:8000 in develop mode by applu these configs:

      APP_URL=http://localhost:8000
      ASSET_URL=http://localhost:8000
      MIX_API_URL=http://localhost:8000

- run: 

      php artisan admin:install

if you are in localhost please set and configure 

      ADMIN_HTTPS=false
    
open this link: localhost:8000/admin

then you need to run vuejs app


https://github.com/saber13812002/laravel-registration/wiki/SETUP

if ok please next

## Amazon CDN S3 :

create new liara.ir account 
then create a storage from AMAZON s3
then paste your config into env file
then you can test upload pictures


## OTP:

### Kavenegar Config

you should create a new account in kavenegar to continue.

after registration you need to use use verification service

create a new verification template and config it by your test messsage 

then use token in user panel copy and paste it into you project KavenegarApiKey in .env file

## OTP:

then you can open this: http://localhost:8000/reg
then you need to configure your sms server to send sms or open otps table from phpmyadmin
if you type a phone number for registration you can see 5 digit otp in opts table

## Hosting

create new account in liara.ir

then create a mashine

then install npm liara npm package

then run liara deploy

now you can have a sample demo site like this: wiki.liara.run


## .htaccess

if yoursite.com/admin not open please check out your .htaccess files 

if yoursite.com/links didnt open please modifu .htaccess file : like this:



## License:

The Laravel framework is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
