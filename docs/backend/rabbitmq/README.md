# RabbitMQ 概述

- AMQP 高级消息队列协议
- 松耦合
- 单点问题

松耦合应用使得原本把数据直接存在数据库中的应用能够把数据发送到rabbitmq，从而实现数据的异步处理。

如果数据库负载过大，可以对消费者进行限流或者直接关闭。消息会保存在队列中。

这种架构同样允许rabbitmq对同一份数据进行重复利用。类似于广播，可以将详细群发到不同的服务进行处理。

- 解耦
- 异步
- 流量削峰

系统可用性降低 系统引入的外部依赖越多，越容易挂掉。


- 连接
- 信道
- 交换器
- 队列