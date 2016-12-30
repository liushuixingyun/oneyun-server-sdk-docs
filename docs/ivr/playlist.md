# 放音


{% method -%}

## 参数

| 参数名称   | 数据类型  | 是否必填  | 说明      |
| ----------------- | -----------  | -----| ---------------------------------------- |
| `content`         | 字符串 &#124; 数组         |  是  | 放音文件列表                        |
| `options`         | 数组          |  否  | 自定义参数  参见[playlist属性列表](#playlist属性列表)                     |


#### playlist属性列表

| 枚举值  | 说明           |
| ---- | ------------ |
| `finish_keys`|中断码 |
| `repeat`|重复次数 |



### 示例

{% sample lang="js" -%} simple 示例

{% sample lang="js" -%}
```js
// 示例
```
{% sample lang="php" -%} simple 示例

{% sample lang="php" -%}
```php
<?php
require __DIR__."/vendor/autoload.php";
header("Content-type:text/xml");

$ivr_resp = new Oneyun\Ivr();
$ivr_resp->playlist(
  array(
    'weclome.wav',
    'weclome1.wav'
  )
);

//输出结果
echo $ivr_resp;
```
{% sample lang="js" -%} complete 示例

{% sample lang="js" -%}
```js
// 示例
```

{% sample lang="php" -%} complete 示例

{% sample lang="php" -%}
```php
require __DIR__."/vendor/autoload.php";
header("Content-type:text/xml");

$ivr_resp = new Oneyun\Ivr();
$ivr_resp->playlist(
  array(
    'weclome.wav',
    'weclome1.wav'
  ),
  array(
    "finish_keys"=>'#',
    "repeat"=>'3'
  )
);

//输出结果
echo $ivr_resp;
```

{% endmethod %}
