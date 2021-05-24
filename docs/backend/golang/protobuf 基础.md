# protobuf 基础

## 定义 message 类型

我们先来定义一个搜索请求对象

```
syntax = "proto3";

message SearchRequest {
  string query = 1;
  int32 page_number = 2;
  int32 result_per_page = 3;
}
```

- 第一行指定了语法的版本，如果没有该选项，默认使用版本2
- 定义指定了三个字段，也就是键值对，包含名称和类型
- 上面的例子中，所有的字段都是标量类型
- 你也可以为字段指定组合类型，包括枚举类型和其他类型
- 消息中的每个字段都有一个唯一的数字，这些数字是用来在消息二进制格式中标识字段的。如果消息类型已经投入使用就不要再更改这个数字。
- 数字1-15花费一个字节编码，包括数字和字段类型
- 数字16到2047使用两个字节
- 频繁使用的字段最好用1-15，为未来可能添加的频繁使用的字段留出数字。
- 数字最小是1，最大是2的29次方减去1或者 536870911，19000-19999属于保留数字。
- 默认是0或1个，repeated 是大于1（数组吧，列表）
- 一个proto文件可以有多个消息类型
- 支持行注释和块注释

```
message Foo {
  reserved 2, 15, 9 to 11;
  reserved "foo", "bar";
}
```

- 标注为保留字段
- 数字和名称要分别标注

## 标量值类型

double，float，int32等

https://developers.google.com/protocol-buffers/docs/proto3#scalar


## 默认值

- 字符串是空字符串
- 字节是空字节
- 布尔是false
- 数字是0
- 枚举是第一个被定义的枚举值，必须是0
- 消息字段依赖于特定的语言
- repeated字段是空，一般是个空列表，这个看语言

## 枚举

当你定义一个消息类型，你可能想要某些字段的值是预定义值列表的一个。

```
enum Corpus {
  UNIVERSAL = 0;// 第一个必须是0
  WEB  = 1;
  IMAGES  = 2;
  LOCAL  = 3;
  NEWS  = 4;
  PRODUCTS  = 5;
  VIDEO  = 6;
}

message Test {
  enum Gender {
    M = 0;
    F = 2;
  }
  Gender gender = 8;
}
```

## 使用其他消息类型
## 嵌套类型
## 更新消息类型
## 未知字段
## any
## oneof
## 映射(map)

主要是讲map类型如何定义，map类型不能用repeated修饰

```
map<string, Project> projects = 3;
```

## 包
## 定义服务
## json 映射
## 选项
## 生成你自己的类

对命令参数进行了简单的介绍。
