---
title: 生成图像
gitChangelog: false
updatedAt: 2025-05-08
---


# 生成图像

## 接口描述

提交生成图像任务。

## 请求

- 请求方式: POST

- 请求地址: `https://{api_url}/kling/v1/images/generations`

## 请求参数

>[!TIP]
> URL 有长度限制，通常在 2,048 到 8,192 字符之间（取决于浏览器和服务器）。对于 AI 模型的调用，提示词（prompt）可能非常长，如果放在查询参数中很容易超出 URL 长度限制。并且 URL 查询参数只能表达简单的键值对。此外，URL 可能被缓存在浏览器中。因此，在 AI 模型的调用中，参数通常放在请求体中。
>
> 放在请求体中的好处有：
> 1. 可以传递较长的提示词
> 2. 可以传递复杂的 JSON 数据，例如表达嵌套的数据结构，并且可以明确区分字符串、数字、布尔值等类型。
> 3. HTTPS 加密传输整个请求，更加安全。

### 文生图场景

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| prompt | string | 是 | 提示词 |
| n | int | 否 | 生成图像数量 |
| size | string | 否 | 图像尺寸 |
| response_format | string | 否 | 响应格式 |
| user | string | 否 | 用户ID |

### 图生图场景

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | string | 是 | 图像URL |
| prompt | string | 否 | 提示词 |


## 返回参数示例

```
{
    'code': 0, // 状态码
    'message': 'SUCCEED', // 消息
    'request_id': 'Cl58rmgHRLsAAAAABFV6lg', // 请求ID
    'data': {
        'task_id': 'Cl58rmgHRLsAAAAABFV6lg', // 任务ID
        'task_status': 'submitted', // 任务状态
        'created_at': 1746696422103, // 创建时间
        'updated_at': 1746696422103 // 更新时间
    }
}
```


## 代码示例

> 深色背景为可以修改的参数，非必选参数已经注释，可以按照自己的需求启用。


<<< @/zh/snippets/query-api.py{5-6,44}
