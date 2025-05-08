import http.client
import json
import time

# 配置全局变量
API_URL = "www.dmxapi.cn" # API 节点
DMX_API_TOKEN = "sk-XXXXXXXXXX" # API 密钥

conn = http.client.HTTPSConnection(API_URL)

# 生成图像
def kling_generate_image():
    """
    使用 kling 生成图像
    返回参数:
        task_id: 生成任务的 id
    """
    payload = json.dumps({
    "model_name": "kling-v1-5", # [必选]模型名称 可选择 kling-v1-5 或 kling-v1
    "prompt": "生成一张袋鼠的照片，手里拿着一个写着'DMXAPI'的牌子", # [必选]文本提示词
    # "negative_prompt": "", # 负向文本提示词
    # "output_format": "png", # 输出格式：png 或 jpg
    # "n": 1, # int, 生成数量 [1, 9]
    # "aspect_ratio": "16:9", # 输出比例：16:9, 9:16, 1:1, 4:3, 3:4, 3:2, 2:3
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

def query_kling_image_url(task_id):
    """
    查询获取图像
    输入参数:
        task_id: 生成任务的 id
    输出参数:
        image_url: 图像 url
    """
    action = "images"
    action2 = "generations"

    query_path = f"/kling/v1/{action}/{action2}/{task_id}"

    headers = {
    'Authorization': f'Bearer {DMX_API_TOKEN}'
    }

    conn.request("GET", query_path, None, headers)
    res = conn.getresponse()
    json_data = json.loads(res.read().decode("utf-8"))
    if json_data['data']['task_status'] == "succeed":
        return json_data['data']['task_result']['images'][0]['url']
    else: 
        return None

def generate_image():
    """
    生成图像
    返回参数:
        image_url: 图像 url
    """
    # 调用生成图像 api 提交图像生成任务，返回获取 task_id。
    task_id = kling_generate_image() 
    start_time = time.time()
    timeout = 60 # 队列等待超时时间

    while True:
        # 根据 task_id 调用查询图像api 查看图像生成任务是否完成。
        image_url = query_kling_image_url(task_id) 
        if image_url is not None:
            return image_url

        if time.time() - start_time > timeout:
            print(f"请求达到 {timeout} 秒超时")
            return None

        time.sleep(1)
        print(f"等待图像生成，{int(time.time() - start_time)} 秒", flush=True)

if __name__ == "__main__":
    print(generate_image())