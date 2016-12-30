# 录音

{% method -%}

## 参数

| 参数名称   | 数据类型  | 是否必填  | 说明      |
| ----------------- | -----------  | -----| ---------------------------------------- |
| `options`         | 数组          |  否  | 自定义参数  参见[record属性列表](#record属性列表)  |


#### record属性列表

| 枚举值  | 说明           |
| ---- | ------------ |
| `max_duration`|最长录音时限（秒） |
| `beeping`| 是否在录音之前播放"嘀"的一声 |
| `finish_keys`| 中断码 |



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
$ivr_resp->record();

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
$ivr_resp->record(
  array(
    "beeping"=>true,
    "finish_keys"=>'#',
    "repeat"=>'3'
  )
);

//输出结果
echo $ivr_resp;
```

{% endmethod %}
