# Kling 生成图像接口



```python
import json
import base64
import time
import os

def generate_cover(your_file_path=None):
    """
    使用 kling 生成封面
    输入参数:
        your_file_path: 需要生成封面的文件路径
    输出参数:
        task_id: 生成任务的 id
    """
    payload = json.dumps({
    "model_name": "kling-v1-5", # [必选] 模型名称 可选择 kling-v1-5 或 kling-v1
    "prompt": COVER_PROMPT, # [必选] 正向文本提示词
    # "negative_prompt": "", # 负向文本提示词
    # "output_format": "png", # 输出格式：png 或 jpg
    # "n": 1, # 生成数量 [1, 9]
    # "aspect_ratio": "16:9", # 输出比例：16:9 或 9:16 或 1:1 或 4:3 或 3:4 或 3:2 或 2:3
    # "callback_url": "url", # 回调地址，可以用于 webhook 等通知场景
    })
    headers = {
    'Authorization': f'Bearer {DMX_API_TOKEN}',
    'Content-Type': 'application/json'
    }
    conn.request("POST", "/kling/v1/images/generations?=null", payload, headers)
    res = conn.getresponse()
    json_data = json.loads(res.read().decode("utf-8"))
    print(json_data)
    return json_data['data']['task_id']
```


