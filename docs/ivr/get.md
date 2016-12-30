# 收码

{% method -%}


## 参数

| 参数名称   | 数据类型  | 是否必填  | 说明      |
| ----------------- | -----------  | -----| ---------------------------------------- |
| `content`         |  字符串 &#124; 数组         |  是  | 放音文件列表                        |
| `options`         | 数组          |  否  | 自定义参数  参见[get属性列表](#get属性列表)                     |


#### get属性列表

| 枚举值                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `valid_keys`          | 有效 DTMF 码范围字符串                   |
| `max_keys`            | 接收 DTMF 码的最大长度                          |
| `finish_keys`         | 结束码串                  |
| `first_key_timeout`   | 等待接收第一个 DTMF 码的超时时间（秒）                         |
| `continues_keys_timeout`          | 等待接收后续 DTMF 码的超时时间（秒）                  |
| `play_repeat`         | 如果出现等待超时，按照该参数重复播放提示音                   |
| `if_break_on_key`     | 是否在接收到第一个有效 DTMF 码时停止放音                          |



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
$ivr_resp->get("welcome.wav");

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
<?php
require __DIR__."/vendor/autoload.php";
header("Content-type:text/xml");

$ivr_resp = new Oneyun\Ivr();
$ivr_resp->get("welcome.wav",
  array(
    "finish_keys"=>'#',
    "repeat"=>'3'
  )
);

//输出结果
echo $ivr_resp;

```

{% endmethod %}
