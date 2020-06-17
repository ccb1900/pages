---
sidebarDepth: 0
collapsable: false
---

# Reactor 模式

此模式是事件驱动架构之一，侧重于如何处理事件。

## 事件类型

服务器程序通常需要处理三类事件：

- IO事件
- 定时事件
- 信号事件

## 介绍

Reactor 要求主线程（IO处理单元）只负责监听文件描述符上是否有事件发生，有的话就立刻将事件通知工作线程。
除此之外，主线程不做其他任何实质性的工作。
读写数据，接受新的连接，以及处理客户请求均在工作线程中完成。

使用同步IO模型实现Reactor模式的工作流程是：

1. 主线程往epoll内核事件表注册 `socket` 上的读就绪事件。
2. 主线程调用epoll_wait等待 `socket` 上有数据可读。
3. 当socket上有数据可读时， `epoll_wait` 通知主线程。主线程则将socket可读事件放入请求队列。
4. 睡眠在请求队列上的某个工作线程被唤醒，它从 `socket` 读取数据，并处理客户请求，然后往 `epoll 内核事件表` 注册该 `socket` 的写就绪事件。
5. 主线程调用 · 等待 `socket` 可写。
6. 当socket可写时，epoll_wait通知主线程。主线程将可写事件放入请求队列。
7. 睡眠在请求队列上的某个工作线程被唤醒，它往socket上写入服务器处理客户请求的结果。

## 组件

## 优点

## 局限性

## 参考文档

- [https://en.wikipedia.org/wiki/Reactor_pattern](https://en.wikipedia.org/wiki/Reactor_pattern)
- [https://java-design-patterns.com/patterns/reactor/](https://java-design-patterns.com/patterns/reactor/)

