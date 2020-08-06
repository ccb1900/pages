(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{488:function(t,a,s){"use strict";s.r(a);var n=s(43),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"进程管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程管理"}},[t._v("#")]),t._v(" 进程管理")]),t._v(" "),s("h2",{attrs:{id:"进程概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程概述"}},[t._v("#")]),t._v(" 进程概述")]),t._v(" "),s("h2",{attrs:{id:"进程创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程创建"}},[t._v("#")]),t._v(" 进程创建")]),t._v(" "),s("h2",{attrs:{id:"进程调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程调度"}},[t._v("#")]),t._v(" 进程调度")]),t._v(" "),s("h2",{attrs:{id:"实践：打印进程描述符中task-struct中的字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实践：打印进程描述符中task-struct中的字段"}},[t._v("#")]),t._v(" 实践：打印进程描述符中task_struct中的字段")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #include <unistd.h>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/init.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/kernel.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/module.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/sched.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/fdtable.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/fs_struct.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/mm_types.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/init_task.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<linux/types.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<asm/atomic.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" __init "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_pcb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("task_struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("list_head")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"task struct init\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start print...\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取o号进程")]),t._v("\n  task "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("init_task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("list_for_each")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("task"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("list_entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("task_struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pid:%d;state:%lx;prio:%d;static_prio:%d;parent_pid:%d;file_count:%d;umask:%d;\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("pid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("prio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("static_prio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("pid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("atomic_read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("umask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("mm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"total_vm:%ld"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("mm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("total_vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"count: %d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end ..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" __exit "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit_pcb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"task struct exit\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("module_init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("print_pcb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("module_exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exit_pcb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MODULE_LICENSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GPL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("输出结果")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("task struct init\n[13368.506753] start print...\n[13368.506754] pid:1;state:1;prio:120;static_prio:120;parent_pid:0;file_count:1;umask:0;\n[13368.506754] total_vm:19514\n[13368.506755] pid:2;state:1;prio:120;static_prio:120;parent_pid:0;file_count:67;umask:0;\n[13368.506756] pid:3;state:402;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506757] pid:4;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506758] pid:6;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506759] pid:7;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506759] pid:8;state:402;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506760] pid:9;state:402;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506761] pid:10;state:1;prio:0;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506762] pid:11;state:1;prio:0;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506763] pid:12;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506763] pid:13;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:18;\n[13368.506764] pid:14;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506765] pid:15;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506766] pid:16;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506766] pid:17;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506767] pid:18;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506768] pid:19;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506769] pid:20;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506770] pid:21;state:1;prio:125;static_prio:125;parent_pid:2;file_count:67;umask:0;\n[13368.506770] pid:22;state:1;prio:139;static_prio:139;parent_pid:2;file_count:67;umask:0;\n[13368.506771] pid:23;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506772] pid:24;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506772] pid:25;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506773] pid:26;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506774] pid:27;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506775] pid:28;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506775] pid:29;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506776] pid:30;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506777] pid:34;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506778] pid:35;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506779] pid:36;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506779] pid:78;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506780] pid:79;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506781] pid:83;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506782] pid:92;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506783] pid:109;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506784] pid:148;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506784] pid:149;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506785] pid:151;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506786] pid:152;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506787] pid:153;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506788] pid:154;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506789] pid:158;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506789] pid:164;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506790] pid:165;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506791] pid:166;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506792] pid:167;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506793] pid:168;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506793] pid:207;state:402;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506794] pid:268;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506795] pid:305;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506796] pid:319;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506796] pid:320;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506797] pid:352;state:1;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506798] pid:386;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506799] pid:396;state:1;prio:119;static_prio:119;parent_pid:1;file_count:1;umask:18;\n[13368.506799] total_vm:23717\n[13368.506800] pid:402;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506801] pid:403;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506801] pid:405;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506802] pid:406;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506803] pid:407;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506803] total_vm:10786\n[13368.506804] pid:408;state:402;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506805] pid:413;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506805] total_vm:24427\n[13368.506806] pid:504;state:1;prio:120;static_prio:120;parent_pid:1;file_count:2;umask:18;\n[13368.506806] total_vm:35489\n[13368.506807] pid:604;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506807] total_vm:20020\n[13368.506808] pid:616;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506809] total_vm:17665\n[13368.506809] pid:761;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506810] total_vm:7083\n[13368.506810] pid:762;state:1;prio:120;static_prio:120;parent_pid:1;file_count:4;umask:18;\n[13368.506811] total_vm:65759\n[13368.506812] pid:763;state:1;prio:120;static_prio:120;parent_pid:1;file_count:3;umask:18;\n[13368.506812] total_vm:23885\n[13368.506813] pid:764;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506813] total_vm:7937\n[13368.506814] pid:766;state:1;prio:120;static_prio:120;parent_pid:1;file_count:3;umask:18;\n[13368.506815] total_vm:72000\n[13368.506815] pid:773;state:1;prio:120;static_prio:120;parent_pid:1;file_count:2;umask:18;\n[13368.506816] total_vm:42708\n[13368.506817] pid:775;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506817] total_vm:12538\n[13368.506818] pid:793;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506818] total_vm:17650\n[13368.506819] pid:803;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506819] total_vm:4103\n[13368.506820] pid:807;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506821] total_vm:3722\n[13368.506821] pid:810;state:1;prio:120;static_prio:120;parent_pid:1;file_count:3;umask:18;\n[13368.506822] total_vm:72221\n[13368.506823] pid:828;state:1;prio:120;static_prio:120;parent_pid:1;file_count:2;umask:18;\n[13368.506823] total_vm:46890\n[13368.506824] pid:903;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:18;\n[13368.506825] total_vm:18075\n[13368.506825] pid:918;state:1;prio:120;static_prio:120;parent_pid:1;file_count:1;umask:2;\n[13368.506826] total_vm:19173\n[13368.506827] pid:929;state:1;prio:120;static_prio:120;parent_pid:918;file_count:1;umask:2;\n[13368.506827] total_vm:27955\n[13368.506828] pid:1514;state:1;prio:120;static_prio:120;parent_pid:903;file_count:1;umask:2;\n[13368.506829] total_vm:26996\n[13368.506830] pid:1581;state:1;prio:120;static_prio:120;parent_pid:1514;file_count:1;umask:2;\n[13368.506830] total_vm:26996\n[13368.506831] pid:1699;state:1;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506832] pid:1758;state:1;prio:120;static_prio:120;parent_pid:1;file_count:10;umask:18;\n[13368.506832] total_vm:162074\n[13368.506833] pid:1887;state:1;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506834] pid:1951;state:1;prio:100;static_prio:100;parent_pid:2;file_count:67;umask:0;\n[13368.506834] pid:1971;state:1;prio:120;static_prio:120;parent_pid:903;file_count:1;umask:2;\n[13368.506835] total_vm:26996\n[13368.506836] pid:2039;state:1;prio:120;static_prio:120;parent_pid:1971;file_count:1;umask:2;\n[13368.506836] total_vm:27029\n[13368.506837] pid:2072;state:1;prio:120;static_prio:120;parent_pid:2039;file_count:1;umask:18;\n[13368.506837] total_vm:15992\n[13368.506838] pid:2073;state:1;prio:120;static_prio:120;parent_pid:2072;file_count:5;umask:18;\n[13368.506839] total_vm:78829\n[13368.506840] pid:2164;state:1;prio:120;static_prio:120;parent_pid:903;file_count:1;umask:2;\n[13368.506840] total_vm:26996\n[13368.506841] pid:2232;state:1;prio:120;static_prio:120;parent_pid:2164;file_count:1;umask:2;\n[13368.506841] total_vm:26996\n[13368.506842] pid:2233;state:1;prio:120;static_prio:120;parent_pid:2232;file_count:1;umask:2;\n[13368.506843] total_vm:6017\n[13368.506843] pid:11453;state:402;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506844] pid:11721;state:402;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506845] pid:12057;state:402;prio:120;static_prio:120;parent_pid:2;file_count:67;umask:0;\n[13368.506846] pid:12652;state:1;prio:120;static_prio:120;parent_pid:2233;file_count:1;umask:18;\n[13368.506846] total_vm:15992\n[13368.506847] pid:12653;state:0;prio:120;static_prio:120;parent_pid:12652;file_count:1;umask:18;\n[13368.506847] total_vm:1164\n[13368.506847] count: 100\n")])])]),s("h2",{attrs:{id:"实践：基于内核模块的负载监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实践：基于内核模块的负载监控"}},[t._v("#")]),t._v(" 实践：基于内核模块的负载监控")]),t._v(" "),s("p",[t._v("这个部分有点难。")]),t._v(" "),s("h3",{attrs:{id:"正确理解系统负载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正确理解系统负载"}},[t._v("#")]),t._v(" 正确理解系统负载")])])}),[],!1,null,null,null);a.default=p.exports}}]);