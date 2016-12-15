# 暂停

{% method -%}

## 参数

| 参数                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `timeout`       | 暂停时长（秒）                  |


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
$ivr->pause();

```

{% endmethod %}
