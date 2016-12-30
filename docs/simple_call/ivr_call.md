# IVR呼出

{% method -%}

## 参数

| 名称   | 数据类型  | 是否必填  | 说明      |
| ----------------- | -----------  | -----| ---------------------------------------- |
| `to`              |  电话号码字符串         |  是  | 被叫号码                        |
| `options`         |  数组                  |  否  | 自定义参数  参见[ivr_call列表](#ivr_call列表)                     |


#### ivr_call列表

| 枚举值                | 有效值范围       | 默认值                | 说明                                       |
| --------------------- | ----------- | ------------------- | ---------------------------------------- |
| `from`                | 电话号码字符串     | `null`      | 主叫号码。                             |
| `max_dial_duration`   | 正整数         |  `50`           | 最大拨号等待时长（秒）。 |
| `max_call_duration`   | 正整数         | `360`        | 最大接通时间（秒）。                 |
| `user_data`           | 不超过128字符字符串 | `null` | 用户数据，该呼叫的后续事件将带有该参数。                     |


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

$result = $oneyun->ivrCall->create(
    '17606661993',
    array(
        'user_data'=>'',
        'max_dial_duration'=>30
    )
);

//打印返回结果
print_r($result)

```

{% endmethod %}
