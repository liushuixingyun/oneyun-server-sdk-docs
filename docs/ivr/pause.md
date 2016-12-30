# 暂停

{% method -%}

## 参数

## 参数

| 参数名称   | 数据类型  | 是否必填  | 说明      |
| ----------------- | -----------  | -----| ---------------------------------------- |
| `options`         | 数组          |  否  | 自定义参数  参见[get属性列表](#pause属性列表)    |


### pause属性列表

| 参数                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `timeout`       | 暂停时长（秒）                  |


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
$ivr_resp->pause();

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
$ivr_resp->pause(
  array(
    "timeout"=>25
  )
);

//输出结果
echo $ivr_resp;
```

{% endmethod %}
