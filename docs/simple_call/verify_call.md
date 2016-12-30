# 语音验证码

{% method -%}

## 参数

| 名称   | 数据类型  | 是否必填  | 说明      |
| ----------------- | -----------  | -----| ---------------------------------------- |
| `to`              |  电话号码字符串         |  是  | 被叫号码                        |
| `verify_code`     |  12位以内十进制正整数字符串     |  是  | 要播放的验证码内容，只能是十进制数字，1到12个字符。          |
| `options`         |  数组                  |  否  | 自定义参数  参见[verify_call列表](#verify_call列表)                     |


#### verify_call列表


| 枚举值                | 有效值范围       | 默认值                | 说明                                       |
| --------------------- | ----------- | ------------------- | ---------------------------------------- |
| `from`                | 电话号码字符串     | `null`      | 向第一方显示的来电号码。                             |
| `max_dial_duration`   | 正整数         |  `45`           | 最大拨号等待时长（秒）。 |
| `repeat`              | 布尔值         | `1`        | 重复播放次数。                 |
| `play_file`           | 字符串 &#124; 数组          |  `null`            | 提示音文件，文件名或者文件名列表。  |
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

$result = $oneyun->verfiyCall->create(
    '17606661993',
    '8888' //播放的验证码
);

//打印返回结果
print_r($result)
```

{% endmethod %}
