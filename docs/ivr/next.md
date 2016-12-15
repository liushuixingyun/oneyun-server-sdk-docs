# 后续


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

$ivr = new Oneyun\Ivr();
$ivr->next("http://localhost/demo.php");

```
{% endmethod %}
