# FAQ

## 如何清理 docker 日志

创建或修改文件 /etc/docker/daemon.json，并增加以下配置



```json
{
    "log-driver":"json-file",
    "log-opts":{
        "max-size" :"50m","max-file":"1"
    }
}
```