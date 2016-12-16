# 连接

{% method -%}

## 参数

| 参数名称   | 数据类型  | 是否必填  | 说明      |
| ----------------- | -----------  | -----| ---------------------------------------- |
| `content`         |  字符串 &#124; 数组         |  是  | 放音文件列表                        |
| `options`         | 数组          |  否  | 自定义参数  参见[connect属性列表](#connect属性列表)                     |


#### connect属性列表

| 枚举值                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `max_duration`        | 最大连接时间（秒）                        |
| `mode`                | 连接模式 。参见[连接模式列表](#连接模式列表)               |
| `recording`           | 最大拨号等待时间（秒）                         |
| `volume1`             | 双通道连接建立后的第一方音量。 |  
| `volume1`             | 双通道连接建立后的第二方音量。 |  
| `play_time`           | 本次连接通话进行到这个时间点播放声音。 |

##### 连接模式列表
| 枚举值                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `1`        | 连接双方均可互相听到                                   |
| `2`        | 仅连接的第二方可以听到第一方;第一方听不到第二方        |
| `3`        | 仅连接的第一方可以听到第二方;第二方听不到第一方        |


### 示例
{% sample lang="js" -%}simple 示例

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
$ivr_resp->connect();

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
$ivr_resp->connect("welcome.wav",
  array(
    "max_duration"=>50,
    "mode"=>1
  )
);

//输出结果
echo $ivr_resp;
```

{% endmethod %}
