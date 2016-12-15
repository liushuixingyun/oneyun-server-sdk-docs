# 发码

{% method -%}

## 参数


| 参数名称                  | 数据类型  | 是否必填            | 默认值                                     |
| ------------------------- | -----------    | ------------------- | ---------------------------------------- |
| `code`        | 字符串      |  是       | 要发送的 DTMF 码串 默认: `0123456789*#ABCD`                |



{% sample lang="js" -%}
```js
// 示例
```

{% sample lang="php" -%}
```php
<?php
require __DIR__."/vendor/autoload.php";
header("Content-type:text/xml");

$ivr = new Oneyun\Ivr();
$ivr->send_dtmf("0123456789");

```
{% endmethod %}
