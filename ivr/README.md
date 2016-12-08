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
```js
let oneyun = require('oneyun');
```

{% sample lang="js" -%}
Oneyun SDK 的根名称空间是 `oneyun`

{% sample lang="php" -%}
```php
<?
require "vender\autoload.php";
```

{% sample lang="js" -%}
Oneyun SDK 的根名称空间是 `Oneyun`

{% endmethod %}

{% method -%}
## 构造
开发者应这样构造 IVR 实例：

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
