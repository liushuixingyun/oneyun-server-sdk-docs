# 语音回拨

{% method -%}


## 参数

| 名称   | 数据类型  | 是否必填  | 说明      |
| ----------------- | -----------  | -----| ---------------------------------------- |
| `to1`             |  电话号码字符串         |  是  | 放音文件列表                        |
| `t02`             |  电话号码字符串         |  是  | 放音文件列表                        |
| `options`         |  数组                  |  否  | 自定义参数  参见[duo_callback列表](#duo_callback列表)                     |


#### duo_callback列表

| 枚举值                | 有效值范围       | 默认值                | 说明                                       |
| --------------------- | ----------- | ------------------- | ---------------------------------------- |
| `from1`               | 电话号码字符串     | `null`      | 向第一方显示的来电号码。                             |
| `from2`               | 电话号码字符串     | `null`      | 向第二方显示的来电号码。                             |
| `ring_tone`           | 录音文件名字符串   | `null`      | 自定义回铃音文件，再向第二方拨号的时候，向第一方播放这个文件。如果不指定该参数或者该参数为空，则向第一方透传播放第二方的回铃音。 |
| `ring_tone_mode`      | 枚举               | `3`         | 自定义回铃音播放模式。      |
| `max_dial_duration`   | 正整数             | `45`        | 最大拨号等待时长（秒）。 |
| `max_call_duration`   | 正整数             | `3600`      | 最大通话时长（秒）。         |
| `recording`           | 布尔值             | `false`     | 是否录音。true录音，false不录音。                    |
| `record_mode`         | 枚举               |  `0`        | 录音模式。  |
| `user_data`           | 不超过128字符字符串| `null`      | 用户数据，该呼叫的后续事件将带有该参数。                     |



### 示例

{% sample lang="js" -%}
```js
// 示例
```

{% sample lang="php" -%}
```php
<?php
require __DIR__."/vendor/autoload.php";

/**
 * @params appId 应用标识
 * @params certId 鉴权Id
 * @params apiUrl 接口地址
 * @params secreKey 密钥
 */
$oneyun = new Oneyun\Rest\Client($appId, $certId, $apiUrl, $secreKey);

$result = $oneyun->calls->create(
    '17606661993',
    '13611460986',
    array(
        'user_data'=>'userData',
        'max_dial_duration'=>30
    )
);

//打印返回结果
print_r($result)
```

{% endmethod %}
