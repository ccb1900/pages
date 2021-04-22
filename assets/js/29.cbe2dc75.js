(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{414:function(t,a,_){"use strict";_.r(a);var v=_(46),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),_("p",[t._v("一个节点就是一个磁盘块，")]),t._v(" "),_("p",[t._v("一个磁盘块的容量是大小为n的数据项（比如name和email）的长度不一样，则一个磁盘块\n容纳的数据项的数量也就是节点的包含的元素数量不一样。")]),t._v(" "),_("h2",{attrs:{id:"mysql-具体实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-具体实现"}},[t._v("#")]),t._v(" mysql 具体实现")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("节点存储key，不存储数据，叶子节点才存储数据，比如主索引文件节点只存储主键，叶子节点才有完整的记录。也叫聚集索引。")])]),t._v(" "),_("li",[_("p",[t._v("辅助索引就不一样了，key是索引的字段[(name,age),(email,name)]的值，而叶子节点也就是data存放的是主键，也就是主索引的key")])])]),t._v(" "),_("p",[t._v("因此，过长的主键会使得辅助索引变的很大，因为每个辅助索引都要用主键。")]),t._v(" "),_("p",[t._v("如果主键不单调，那么就需要维护b+树的结构，而频繁的分裂调整。")]),t._v(" "),_("p",[t._v("查询的列和所建立的索引的列个数相同，字段相同。")]),t._v(" "),_("h2",{attrs:{id:"索引-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引-2"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),_("ul",[_("li",[t._v("最左匹配，遇到范围查询就停止查询，也就是索引最多用于一个范围列。")]),t._v(" "),_("li",[t._v("=和in的顺序不重要，可以被查询优化器优化")]),t._v(" "),_("li",[t._v("尽量选择区分度高的索引")]),t._v(" "),_("li",[t._v("索引字段不能参加计算，from_unixtime(create_time) = ’2014-05-29’就不能使用到索引，create_time = unix_timestamp(’2014-05-29’)可以命中。")]),t._v(" "),_("li",[t._v("尽量扩展索引，不要新建索引。")]),t._v(" "),_("li",[t._v("多值匹配和范围匹配的区分")])]),t._v(" "),_("p",[t._v("前缀索引兼顾索引大小和查询速度，但是其缺点是不能用于ORDER BY和GROUP BY操作，也不能用于Covering index")]),t._v(" "),_("p",[t._v("覆盖索引：当索引本身包含查询所需全部数据时，不再访问数据文件本身")]),t._v(" "),_("h2",{attrs:{id:"问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),_("ul",[_("li",[t._v("为什么范围就停止")]),t._v(" "),_("li",[t._v("为什么不能再字段上用函数")])]),t._v(" "),_("h2",{attrs:{id:"慢查询优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#慢查询优化"}},[t._v("#")]),t._v(" 慢查询优化")]),t._v(" "),_("h2",{attrs:{id:"索引优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引优化"}},[t._v("#")]),t._v(" 索引优化")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("结构优化")])]),t._v(" "),_("li",[_("p",[t._v("查询优化")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);