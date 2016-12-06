# 概述

<!-- toc -->

----

{% method -%}
## 安装
第一件事就是安装 Oneyun SDK。

Oneyun 提供了SDK对应语言最常见的[包管理器](http://wikipedia.org/wiki/Package_manager)的代码库，如 composer，npm。

使用 Oneyue SDK 最简单的方式就是使用包管理器在线安装。

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

例如，当用户的应用服务程序收到来自 Onyune 的呼入事件后，使用 IVR 告知 Oneyun 接听来电，并播放欢迎语:

{% sample lang="js" -%}
```js
/// ...

let oneyun = require('oneyun');

/// ...

function onCallIn(req, res) {
  let ivr = new oneyun.Ivr();
  ivr.play("song.wav")
     .next("http://your.company.com/your/next/url");
  res.setHeader('Content-Type', 'text/xml');
  res.send(ivr.toXml());
}

/// ...
```

{% sample lang="php" -%}
```php
<?
/// ...

require "vender\autoload.php";

/// ...

function on_call_in(request) {
  $ivr = new Oneyun\Ivr();
  $ivr->play("song.wav")
      ->next("http://your.company.com/your/next/url");
  header("Content-Type": "text/xml");
  echo $ivr;
}
```

{% endmethod %}
