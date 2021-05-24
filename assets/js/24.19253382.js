(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{410:function(a,t,s){"use strict";s.r(t);var e=s(45),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"protobuf-基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#protobuf-基础"}},[a._v("#")]),a._v(" protobuf 基础")]),a._v(" "),s("h2",{attrs:{id:"定义-message-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义-message-类型"}},[a._v("#")]),a._v(" 定义 message 类型")]),a._v(" "),s("p",[a._v("我们先来定义一个搜索请求对象")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('syntax = "proto3";\n\nmessage SearchRequest {\n  string query = 1;\n  int32 page_number = 2;\n  int32 result_per_page = 3;\n}\n')])])]),s("ul",[s("li",[a._v("第一行指定了语法的版本，如果没有该选项，默认使用版本2")]),a._v(" "),s("li",[a._v("定义指定了三个字段，也就是键值对，包含名称和类型")]),a._v(" "),s("li",[a._v("上面的例子中，所有的字段都是标量类型")]),a._v(" "),s("li",[a._v("你也可以为字段指定组合类型，包括枚举类型和其他类型")]),a._v(" "),s("li",[a._v("消息中的每个字段都有一个唯一的数字，这些数字是用来在消息二进制格式中标识字段的。如果消息类型已经投入使用就不要再更改这个数字。")]),a._v(" "),s("li",[a._v("数字1-15花费一个字节编码，包括数字和字段类型")]),a._v(" "),s("li",[a._v("数字16到2047使用两个字节")]),a._v(" "),s("li",[a._v("频繁使用的字段最好用1-15，为未来可能添加的频繁使用的字段留出数字。")]),a._v(" "),s("li",[a._v("数字最小是1，最大是2的29次方减去1或者 536870911，19000-19999属于保留数字。")]),a._v(" "),s("li",[a._v("默认是0或1个，repeated 是大于1（数组吧，列表）")]),a._v(" "),s("li",[a._v("一个proto文件可以有多个消息类型")]),a._v(" "),s("li",[a._v("支持行注释和块注释")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('message Foo {\n  reserved 2, 15, 9 to 11;\n  reserved "foo", "bar";\n}\n')])])]),s("ul",[s("li",[a._v("标注为保留字段")]),a._v(" "),s("li",[a._v("数字和名称要分别标注")])]),a._v(" "),s("h2",{attrs:{id:"标量值类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标量值类型"}},[a._v("#")]),a._v(" 标量值类型")]),a._v(" "),s("p",[a._v("double，float，int32等")]),a._v(" "),s("p",[a._v("https://developers.google.com/protocol-buffers/docs/proto3#scalar")]),a._v(" "),s("h2",{attrs:{id:"默认值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认值"}},[a._v("#")]),a._v(" 默认值")]),a._v(" "),s("ul",[s("li",[a._v("字符串是空字符串")]),a._v(" "),s("li",[a._v("字节是空字节")]),a._v(" "),s("li",[a._v("布尔是false")]),a._v(" "),s("li",[a._v("数字是0")]),a._v(" "),s("li",[a._v("枚举是第一个被定义的枚举值，必须是0")]),a._v(" "),s("li",[a._v("消息字段依赖于特定的语言")]),a._v(" "),s("li",[a._v("repeated字段是空，一般是个空列表，这个看语言")])]),a._v(" "),s("h2",{attrs:{id:"枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#枚举"}},[a._v("#")]),a._v(" 枚举")]),a._v(" "),s("p",[a._v("当你定义一个消息类型，你可能想要某些字段的值是预定义值列表的一个。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("enum Corpus {\n  UNIVERSAL = 0;// 第一个必须是0\n  WEB  = 1;\n  IMAGES  = 2;\n  LOCAL  = 3;\n  NEWS  = 4;\n  PRODUCTS  = 5;\n  VIDEO  = 6;\n}\n\nmessage Test {\n  enum Gender {\n    M = 0;\n    F = 2;\n  }\n  Gender gender = 8;\n}\n")])])]),s("h2",{attrs:{id:"使用其他消息类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用其他消息类型"}},[a._v("#")]),a._v(" 使用其他消息类型")]),a._v(" "),s("h2",{attrs:{id:"嵌套类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套类型"}},[a._v("#")]),a._v(" 嵌套类型")]),a._v(" "),s("h2",{attrs:{id:"更新消息类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新消息类型"}},[a._v("#")]),a._v(" 更新消息类型")]),a._v(" "),s("h2",{attrs:{id:"未知字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未知字段"}},[a._v("#")]),a._v(" 未知字段")]),a._v(" "),s("h2",{attrs:{id:"any"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#any"}},[a._v("#")]),a._v(" any")]),a._v(" "),s("h2",{attrs:{id:"oneof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oneof"}},[a._v("#")]),a._v(" oneof")]),a._v(" "),s("h2",{attrs:{id:"映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#映射"}},[a._v("#")]),a._v(" 映射")]),a._v(" "),s("h2",{attrs:{id:"包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包"}},[a._v("#")]),a._v(" 包")]),a._v(" "),s("h2",{attrs:{id:"定义服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义服务"}},[a._v("#")]),a._v(" 定义服务")]),a._v(" "),s("h2",{attrs:{id:"json-映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-映射"}},[a._v("#")]),a._v(" json 映射")]),a._v(" "),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("h2",{attrs:{id:"生成你自己的类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成你自己的类"}},[a._v("#")]),a._v(" 生成你自己的类")])])}),[],!1,null,null,null);t.default=r.exports}}]);