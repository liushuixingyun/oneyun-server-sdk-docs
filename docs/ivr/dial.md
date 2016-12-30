# 拨号

{% method -%}

## 参数

| 参数名称   | 数据类型  | 是否必填  | 说明      |
| ----------------- | -----------  | -----| ---------------------------------------- |
| `number`         |  字符串       |  是  | 放音文件列表                        |
| `options`         | 数组          |  否  | 自定义参数  参见[dial属性列表](#dial属性列表)                     |


#### dial属性列表

| 枚举值                  | 说明                                     |
| --------------------- |  ---------------------------------------- |
| `from`                | 主叫号码                          |
| `max_call_duration`   | 最大接通时间（秒）                 |
| `max_dial_duration`   | 最大拨号等待时间（秒）                         |
| `dial_voice_stop_cond`| 自定义拨号音停止播放条件。0：振铃停止；1：接听或者挂断停止。 |
| `play`                | 放音文件。参见[play属性列表](#play属性列表)  |
| `connect`             | 连接。参见[connect属性列表](#connect属性列表)  |

##### play属性列表

| 枚举值  | 说明           |
| ---- | ------------ |
| `finish_keys`|中断码 |
| `repeat`|重复次数 |

##### connect属性列表

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
$ivr_resp->dial("手机号码");

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
$ivr_resp->dial('手机号码',
  array(
    'max_call_duration'=>30,
    'play'=>array(
      'warning.wav',
      array('repeat'=>3)
    ),
    'connect'=>array(
      'max_duration'=>20,
      'play'=>array(
          'warning.wav',
          array('repeat'=>3)
      )
    )
  )
);

//输出结果
echo $ivr_resp;

```

{% endmethod %}
