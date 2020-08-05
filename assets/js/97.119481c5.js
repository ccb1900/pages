(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{474:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux-操作系统概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-操作系统概述"}},[t._v("#")]),t._v(" Linux 操作系统概述")]),t._v(" "),a("p",[t._v("低版本学习原理，高版本学习实现。")]),t._v(" "),a("p",[t._v("机制与策略分离")]),t._v(" "),a("p",[t._v("机制：提供了什么样的功能，是不变的部分\n策略：如何使用这些功能。")]),t._v(" "),a("p",[t._v("系统调用起接口的作用，为用户提供操作系统的服务，隔离变化。")]),t._v(" "),a("h2",{attrs:{id:"双向链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向链表"}},[t._v("#")]),t._v(" 双向链表")]),t._v(" "),a("p",[t._v("该结构可以看做的双向链表，二叉树，栈，队列。")]),t._v(" "),a("p",[t._v("api 设计")]),t._v(" "),a("p",[t._v("源码位置")]),t._v(" "),a("h2",{attrs:{id:"哈希表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希表"}},[t._v("#")]),t._v(" 哈希表")]),t._v(" "),a("p",[t._v("查询效率高，常数时间查询。")]),t._v(" "),a("p",[t._v("不同的关键字可能映射的相同的地址，也就是有相同的哈希值，这就是冲突。")]),t._v(" "),a("p",[t._v("解决冲突的方法有链地址法，再散列法，开放寻址法。")]),t._v(" "),a("p",[t._v("api设计")]),t._v(" "),a("ul",[a("li",[t._v("判断是否为空 empty")]),t._v(" "),a("li",[t._v("删除 del")]),t._v(" "),a("li")]),t._v(" "),a("p",[t._v("源码位置")]),t._v(" "),a("h2",{attrs:{id:"参考书籍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考书籍"}},[t._v("#")]),t._v(" 参考书籍")]),t._v(" "),a("ul",[a("li",[t._v("Linux 操作系统原理与应用，陈莉君")]),t._v(" "),a("li",[t._v("现代操作系统")]),t._v(" "),a("li",[t._v("深入理解Linux内核，陈莉君翻译")]),t._v(" "),a("li",[t._v("Linux内核设计与实现，陈莉君翻译")]),t._v(" "),a("li",[t._v("分布式操作系统，何炎祥翻译")]),t._v(" "),a("li",[t._v("Linux 设备驱动程序")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.kerneltravel.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.kerneltravel.net/"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"实践：内核开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践：内核开发"}},[t._v("#")]),t._v(" 实践：内核开发")]),t._v(" "),a("p",[t._v("创建一个内核模块。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #include <unistd.h>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/init.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/kernel.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/module.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" __init "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lkm_init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" __exit "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lkm_exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good bye\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("module_init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lkm_init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("module_exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lkm_exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MODULE_LICENSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GPL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("makefile")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("@/example/c/kernel/Makefile\n")])])]),a("p",[t._v("插入到内核")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" insmod hello.ko\n")])])]),a("p",[t._v("查看模块打印的消息")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dmesg")]),t._v("\n")])])]),a("p",[t._v("查看已加载的模块")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("lsmod\n")])])]),a("p",[t._v("删除模块")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rmmod hello\n")])])]),a("h2",{attrs:{id:"multipass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multipass"}},[t._v("#")]),t._v(" multipass")]),t._v(" "),a("p",[t._v("镜像可能下载比较慢，中科大有镜像，但是mac和windows不能用。")]),t._v(" "),a("p",[t._v("使用 multipass 作为开发环境。")]),t._v(" "),a("p",[t._v("挂载宿主机目录到 multipass 实例。命令含义为\n挂载宿主机当前目录到实例的 /app 目录")]),t._v(" "),a("p",[t._v("一般不能直接挂载到根目录下，需要提前在实例中创建 /app 目录，然后\n使用 chown 修改权限。")]),t._v(" "),a("p",[t._v("如果是挂载到/home/user/app目录，则不需要提前做任何操作。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("multipass "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" ubuntu:/app\nmultipass "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" ubuntu:/home/test/app\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);