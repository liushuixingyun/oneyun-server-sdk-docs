# IVR

<!-- toc -->

----

在 Oneyun 服务器 SDK 中， `IVR` 是一个用于产生 XML IVR 定义的类。
开发者利用 IVR 类，可以快速生成合乎 Oneyun IVR 标准的 XML 内容。

开发者可以在 Oneyun 平台向用户服务程序发送IVR回掉时，将此 XML 回复给 Oneyue ，让 Oneyue 执行相应的动作。

{% method -%}
## 引用
在使用 `IVR` 之前，开发者应[安装](../index.md#安装)并“引用” Oneyne 的程序包。
引用部分的代码是这样的：

{% sample lang="js" -%}
Oneyun SDK 的名称空间是 `oneyun`，开发者可以使用 `require` 引用：

{% sample lang="js" -%}
```js
var oneyun = require("oneyun");
```

{% sample lang="js" -%}
或者按照ES6规范进行引用：

{% sample lang="js" -%}
```js
import { oneyun } from "oneyun";
```

{% sample lang="php" -%}
Oneyun SDK 的名称空间是 `Oneyun` ，开发者应按照 composer 的规范引用该程序包。

{% sample lang="php" -%}
```php
<?
require "vender\autoload.php";
```

{% endmethod %}

{% method -%}
## 构造
开发者通常应在收到 Oneyun 的`IVR`回掉时构造 IVR 实例：

{% sample lang="js" -%}
```js
let ivrResp = new oneyun.Ivr();
```

{% sample lang="php" -%}
```php
<?
$ivr_resp = new Oneyun\Ivr();
```

{% endmethod %}

{% method -%}
## 生成 IVR
`IVR`对象为各个`IVR`动作提供了“构造器”，开发者通过使用“构造器”像`IVR`实例填充对应动作的`XML`内容。

“构造器”可以连接使用，最常见的用法就是连接`next`到其它动作之后。

最后，开发者可将`IVR`对象转换为`XML`格式的内容，将它返回给 Oneyun, 控制 Oneyun 进行相应的`IVR`操作。

{% sample lang="js" -%}
```js
ivrResp.play("welcome.wav")
    .next("/ivr/2");
```

{% sample lang="php" -%}
```php
<?
$ivr_resp->play("welcome.wav")
    ->next("/ivr/2.php");
```

{% endmethod %}

{% method -%}
## 返回 IVR
`IVR`对象可被转换为`XML`格式的内容，将它返回给 Oneyun, 即可控制 Oneyun 进行相应的`IVR`操作。

{% sample lang="js" -%}
```js
res.setHeader('Content-Type', 'text/xml');
res.send(ivrResp.toXml());
```

{% sample lang="php" -%}
```php
<?
header("Content-Type": "text/xml");
echo $ivr_resp;
```

{% endmethod %}

{% method -%}
## 例子
此例中，当用户的应用服务程序收到来自 Onyune 的呼入事件后，使用 IVR 告知 Oneyun 接听来电，并播放欢迎语，然后播放再见，播放完成后挂断:

{% sample lang="js" -%}
```js
var oneyun = require('oneyun');
var express = require('express');
var app = express();

app.get('/ivr/:id', function (req, res) {
  let ivrResp = new oneyun.Ivr();
  if (req.params.id === "1") {
    ivrResp.play("welcome.wav")
        .next("/ivr/2");
  } else if (req.params.id === "2") {
    ivrResp.play("bye.wav");
  } else {
    ivrResp.drop();
  }
  res.set('Content-Type', 'text/xml');
  res.send(ivrResp.toXml());
});
```

{% sample lang="php" -%}
`/ivr/1.php`:

{% sample lang="php" -%}
```php
<?
require "vender\autoload.php";

$ivr_resp = new Oneyun\Ivr();
$ivr_resp->play("welcome.wav")
    ->next("/ivr/2.php");
header("Content-Type": "text/xml");
echo $ivr_resp;
```

{% sample lang="php" -%}
`/ivr/2.php`:

{% sample lang="php" -%}
```php
<?
require "vender\autoload.php";

$ivr_resp = new Oneyun\Ivr();
$ivr_resp->play("bye.wav");
header("Content-Type": "text/xml");
echo $ivr_resp;
```

{% endmethod %}
