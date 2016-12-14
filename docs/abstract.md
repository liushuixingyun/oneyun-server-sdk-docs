# 概述

<!-- toc -->

----

{% method -%}
## 安装
Oneyun 提供了SDK对应语言最常见的[包管理器](http://wikipedia.org/wiki/Package_manager)的代码库，如 composer，npm。
所以，安装 Oneyun SDK 最简单的方式就是使用包管理器进行在线安装。

{% sample lang="js" -%}
```sh
$ npm install oneyun-server-sdk
```

{% sample lang="php" -%}
```sh
$ php composer.phar install
```

{% endmethod %}

{% method -%}
## IVR 回复
利用SDK，快速构建IVR数据，并发送到 Oneyun 平台。

例如，当用户的应用服务程序收到来自 Onyune 的呼入事件后，使用 IVR 告知 Oneyun 接听来电，并播放欢迎语，播放完成后挂断:

{% sample lang="js" -%}
```js
var oneyun = require('oneyun');
var express = require('express');
var app = express();

app.get('/ivr', function (req, res) {
  let ivrResp = new oneyun.Ivr();
  ivrResp.play("welcome.wav");
  res.set('Content-Type', 'text/xml');
  res.send(ivrResp.toXml());
});
```

{% sample lang="php" -%}
```php
<?
require "vender\autoload.php";

$ivr_resp = new Oneyun\Ivr();
$ivr_resp->play("welcome.wav");
header("Content-Type": "text/xml");
echo $ivr_resp;
```

{% endmethod %}
