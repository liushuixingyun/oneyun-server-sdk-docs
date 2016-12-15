# 简单呼出

<!-- toc -->

 --------------------------------------------------------------------------------
 开发者可以使用Oneyun的`REST API`快速的实现语音回拨、语音验证码、语音通知等一系列功能。


 使用Oneyun SDK 实现 语音回拨


 1. 登录壹耘控制台页面，获取` 接口API`、`密钥`、`鉴权账号`、`应用标识`。
 2. 在项目目录下，安装和引用 Oneyun SDK（见[引用](#引用)）。
 3. 使用语音回拨 SDK 代码，填写参数（第一方的被叫号码，第二方的被叫号码），得到回调结果。见[例子](#例子)


{% method -%}

## 引用

在使用 `SDK` 之前，开发者应[安装](../abstract.md#安装)并"引用" Oneyne 的程序包。 引用部分的代码是这样的：

{% sample lang="js" -%} Oneyun SDK 的名称空间是 `oneyun`，开发者可以使用 `require` 引用：

{% sample lang="js" -%}

```javascript
var oneyun = require("oneyun");
```

{% sample lang="js" -%} 或者按照ES6规范进行引用：

{% sample lang="js" -%}

```javascript
import { oneyun } from "oneyun";
```

{% sample lang="php" -%} Oneyun SDK 的名称空间是 `Oneyun` ，开发者应按照 composer 的规范引用该程序包。

{% sample lang="php" -%}

```php
<?php
require __DIR__."/vendor/autoload.php";

```

{% endmethod %}

{% method -%}

## 构造

开发者通常应在收到 Oneyun 的`IVR`回掉时构造 IVR 实例：

{% sample lang="js" -%}

```javascript
let clinet = new oneyun.Client();
```

{% sample lang="php" -%}

```php
<?php

$appId = ""; //应用标识

$certId = ""; //鉴权Id

$apiUrl = ""; //接口地址

$secreKey = "";//密钥

$client = new Oneyun\Rest\Client($appId, $certId, $apiUrl, $secreKey);

```

{% endmethod %}

## 调用
{% method -%}

{% sample lang="js" -%}

```javascript
// 示例
```

{% sample lang="php" -%}

```php
<?php

$res = $oneyun->calls->create(
    '17606661993',
    '13611460986',
    array(
        'user_data'=>'',
        'max_dial_duration'=>30
    )
);

//打印结果
print_r($res);

```

{% endmethod %}



## 返回
{% method -%}
{% sample lang="js" -%}

```javascript
// 示例
```

{% sample lang="php" -%}

```php

//打印结果

Array
(
    [statusCode] => 200
    [headers] => Array
        (
            [Server] =>  nginx/1.10.1
            [Date] =>  Thu, 15 Dec 2016 08:02:34 GMT
            [Content-Type] =>  application/json;charset=UTF-8
            [Transfer-Encoding] =>  chunked
            [Connection] =>  keep-alive
            [Set-Cookie] =>  JSESSIONID=CC4A5BDA6B84C2E5983CB780B21AD11A; Path=/; HttpOnly
            [X-Application-Context] =>  application:production
            [X-Content-Type-Options] =>  nosniff
            [X-XSS-Protection] =>  1; mode=block
            [Cache-Control] =>  no-cache, no-store, max-age=0, must-revalidate
            [Pragma] =>  no-cache
            [Expires] =>  0
            [X-Frame-Options] =>  DENY
        )
    [content] => Array
        (
            [code] => 000000
            [msg] => 请求成功
            [data] => Array
                (
                    [callId] => 8af4d88f57dbcd0c015901811633018b
                )
        )
 )

```

{% endmethod %}

## 例子

此例子中，当用户发起呼叫指令, 由云平台给主被叫双方拨打电话进行连通, 双方接听后进行通话, 可通过API控制两端的通话, 来电号码可隐匿, 效果可监控


{% method -%}

{% sample lang="js" -%}

```javascript
// 示例
```

{% sample lang="php" -%}

```php
<?php
require __DIR__."/vendor/autoload.php";

$appId = ""; //应用标识

$certId = ""; //鉴权Id

$apiUrl = ""; //接口地址

$secreKey = "";//密钥

$oneyun = new Oneyun\Rest\Client($appId, $certId, $apiUrl, $secreKey);

$res = $oneyun->calls->create(
    '17606661993',
    '13611460986',
    array(
        'user_data'=>'',
        'max_dial_duration'=>30
    )
);
```



{% endmethod %}
