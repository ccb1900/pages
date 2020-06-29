---
sidebarDepth: 0
collapsable: false
---

# Proactor 模式

此模式是事件驱动架构之一，侧重于如何处理事件。

## 介绍

与Reactor模式不同，Proactor 模式将所有IO操作都交给主线程和内核来处理，工作线程仅仅负责业务逻辑。