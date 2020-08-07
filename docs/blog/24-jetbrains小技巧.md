---
sidebarDepth: 0
collapsable: false
date: 2020-08-07
---

# jetbrains 小技巧

## 使用file watchers 进行代码自动格式化

### 配置方式

设置->file watchers->+->go fmt

找到本机的 gofmt 命令 

```
which gofmt
```

将得到的路径填入 Program 配置项

Arguments 选项填写 `-l -s -w $FilePath$`，这是 gofmt 格式化的选项

其他保持默认值就好