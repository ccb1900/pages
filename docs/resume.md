# 简历

## 个人信息

- 姓名：`郭建行`
- 1992 年人，性别男
- 手机号：`15601948562`
- 邮箱：`ccb1900@qq.com`
- GitHub: [`https://github.com/ccb1900`](https://github.com/ccb1900)
- 所在地：武汉
- 故乡：河南周口
- 微信号： `pgg19001301`
- 学校: 2016年毕业于湖北大学

## 工作经历

### 武汉升学在线科技股份有限公司

- 2019-04～ 至今，后端开发工程师
- 日常开发与 bug 修复，用 vue 写一些管理后台的业务。
- 主要工作是用 PHP 或 Java 提供 api，bug 修复和一部分部署工作。

### 上海俊杭电子有限公司武汉办事处

- 2016-07～2019-03，PHP 开发工程师
- 主要是日常开发与 bug 修复

## 项目

### 升学在线

- 本项目是基于 Spring Cloud 的 Java 微服务项目，使用 Eureka 作为注册中心，携程 apollo 作为配置中心，Hystrix 用于
熔断、服务降级，消息队列使用 rabbitmq，支撑公司的主体服务
- 主要包括平台端 api 实现，App 和小程序的 api 等

### 专家志愿填报系统

- 专家使用该系统服务于用户，为学生生成志愿结果，可以查询各地招生情况等。
- 历年招生情况数据量比较庞大，通过索引优化了查询，查询速率有了较大的提升。
- 主要使用 php，laravel，Redis，MySQL，vue 实现
- 使用 docker 部署

### 新版易收银 

- 旧版易收银的重构，采用前后端分离。前端使用的 angularJs1.4， 后台提供 api，由旧版系统修改而来。
- 期间学习了前端使用的 angularJs 的作用域，控制器等概念以及指令的编写，涉及的比较多。
- 由于 Angular 的框架更新前后不兼容，因此认为没有学习的必要，已经不再关注这个框架，转入了解和学习 vue 与 React。
- svn 进行版本控制

### 对接商城和自有系统

- 开发系统对接商城业务，用于为用户提供服务。
- 用户下单以后会推送消息，高峰期，用户下单量比较大。队列消息处理进行了限速，防止触发接口调用限制。
- Redis 作为简单的消息队列支撑，很好地服务了用户。
- 主要使用 PHP，laravel，redis，MySQL 实现
- 使用 docker 部署

## 开源贡献

### [Redis Server https://github.com/ccb1900/redisbygo](https://github.com/ccb1900/redisbygo)

参考 Redis 源码，使用 Golang 实现的 redis 服务器。已解析 redis 协议，实现发布订阅等。目前仍然在开发中，已完成部分可以查看项目说明。

### [Hyperf https://github.com/hyperf/hyperf](https://github.com/hyperf/hyperf)

基于`swoole`的`PHP`框架，我贡献了[异常处理器的 PR](https://github.com/hyperf/hyperf/pull/1245)，目前已经被官方合并。

### [Jupiter https://github.com/douyu/jupiter](https://github.com/douyu/jupiter)

斗鱼开源的面向治理的微服务框架，使用`Golang`编写，我贡献了集成 [goframe 的 PR](https://github.com/douyu/jupiter/pull/135)，目前也已经被官方合并。

以上是目前为社区做的微小的工作。

## 技能

- 版本控制： `Git`
- 编程语言： `PHP`，`JavaScript`，`Golang`
- 前端： `vue`
- 框架： `Laravel`
- 其他： `Docker`，`Linux`
- 数据库： `MySQL` ， `Redis`
- 微服务：`Spring Cloud`

## 结语

感谢您抽出时间查看我的简历。