# 挂断


{% method -%}


## 参数
    无

### 示例

{% sample lang="js" -%}
```js
// 示例
```

{% sample lang="php" -%}
```php
<?php
require __DIR__."/vendor/autoload.php";
header("Content-type:text/xml");

$ivr_resp = new Oneyun\Ivr();
$ivr_resp->hangup();

//输出结果
echo $ivr_resp;
```

{% endmethod %}
