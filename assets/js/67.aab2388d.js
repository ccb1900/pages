(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{444:function(t,s,a){"use strict";a.r(s);var n=a(43),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"常见面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见面试题"}},[t._v("#")]),t._v(" 常见面试题")]),t._v(" "),a("p",[t._v("业务中用到的很多东西，其实基础里面都有讲述，引申扩展一下就可以了。")]),t._v(" "),a("h2",{attrs:{id:"数据结构与算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构与算法"}},[t._v("#")]),t._v(" 数据结构与算法")]),t._v(" "),a("h3",{attrs:{id:"b-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[t._v("#")]),t._v(" b+树")]),t._v(" "),a("h3",{attrs:{id:"红黑树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#红黑树"}},[t._v("#")]),t._v(" 红黑树")]),t._v(" "),a("h3",{attrs:{id:"跳表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳表"}},[t._v("#")]),t._v(" 跳表")]),t._v(" "),a("h3",{attrs:{id:"动态规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),a("h3",{attrs:{id:"优先队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优先队列"}},[t._v("#")]),t._v(" 优先队列")]),t._v(" "),a("p",[t._v("可以快速找出最大值或最小值")]),t._v(" "),a("h3",{attrs:{id:"平衡树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平衡树"}},[t._v("#")]),t._v(" 平衡树")]),t._v(" "),a("h3",{attrs:{id:"哈希"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希"}},[t._v("#")]),t._v(" 哈希")]),t._v(" "),a("h2",{attrs:{id:"安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),a("h3",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" csrf")]),t._v(" "),a("h3",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" xss")]),t._v(" "),a("h3",{attrs:{id:"中间人攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间人攻击"}},[t._v("#")]),t._v(" 中间人攻击")]),t._v(" "),a("h2",{attrs:{id:"数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[t._v("#")]),t._v(" 数据库")]),t._v(" "),a("h3",{attrs:{id:"索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),a("p",[t._v("索引的本质不考虑数据结构，那就是有序，方便查找。\n一个有序的序列有什么性质呢？针对某个字段或者或者某几个字段建立了索引，也就是可比较的，很自然的未加入索引的，\n或者顺序和索引不一致的就无法命中了。")]),t._v(" "),a("h4",{attrs:{id:"索引的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的分类"}},[t._v("#")]),t._v(" 索引的分类")]),t._v(" "),a("h4",{attrs:{id:"索引的优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的优化"}},[t._v("#")]),t._v(" 索引的优化")]),t._v(" "),a("h3",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),a("h4",{attrs:{id:"实现机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现机制"}},[t._v("#")]),t._v(" 实现机制")]),t._v(" "),a("p",[t._v("理解事务的实现机制，就可以很自然的衍生出分布式事务的机制")]),t._v(" "),a("h4",{attrs:{id:"隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[t._v("#")]),t._v(" 隔离级别")]),t._v(" "),a("h3",{attrs:{id:"innodb引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb引擎"}},[t._v("#")]),t._v(" innodb引擎")]),t._v(" "),a("h2",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" redis")]),t._v(" "),a("h3",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),a("h3",{attrs:{id:"底层数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#底层数据结构"}},[t._v("#")]),t._v(" 底层数据结构")]),t._v(" "),a("h2",{attrs:{id:"协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协议"}},[t._v("#")]),t._v(" 协议")]),t._v(" "),a("p",[t._v("协议就是按照约定的格式交换数据。")]),t._v(" "),a("p",[t._v("比如http，在TCP连接后，会发送很多行的消息头+消息体的数据，服务器收到后，进行解析，解析完成按照\n协议约定的格式返回数据（响应头+响应体），浏览器收到后，对二者进行解析，然后渲染页面。")]),t._v(" "),a("h3",{attrs:{id:"https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" https")]),t._v(" "),a("h4",{attrs:{id:"tcp-握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-握手"}},[t._v("#")]),t._v(" TCP 握手")]),t._v(" "),a("p",[t._v("首先建立TCP连接")]),t._v(" "),a("h4",{attrs:{id:"tls-握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tls-握手"}},[t._v("#")]),t._v(" TLS 握手")]),t._v(" "),a("p",[t._v("服务器都需要配置证书，公钥和私钥。")]),t._v(" "),a("p",[t._v("公钥用于信息加密，客户端使用。")]),t._v(" "),a("p",[t._v("私钥用于信息解密，服务器使用。")]),t._v(" "),a("p",[t._v("有了https，就不会被运营商植入广告啦。")]),t._v(" "),a("p",[t._v("服务器的证书是第三方签发的，所以客户端可以通过向第三方发起证书真实性的验证，保证不被篡改。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html"),a("OutboundLink")],1)]),t._v(" "),a("h5",{attrs:{id:"过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[t._v("#")]),t._v(" 过程")]),t._v(" "),a("p",[t._v("会话状态的密码参数由TLS握手协议产生，该协议在TLS记录层之上运行。当TLS客户端和服务器第一次开始通信时，它们就协议版本达成一致，选择加密算法，可选地相互验证，并使用公钥加密技术生成共享密钥。")]),t._v(" "),a("p",[t._v("实际使用的是对称加密。")]),t._v(" "),a("ul",[a("li",[t._v("客户端发送：我是客户端，向你跑了一个白眼")]),t._v(" "),a("li",[t._v("服务器回复了你一个白眼，并给了你证书")]),t._v(" "),a("li",[t._v("客户端：我用公钥加密了随机数")]),t._v(" "),a("li",[t._v("服务器：我收到了你的随机数")]),t._v(" "),a("li",[t._v("客户端：我用会话密钥加密了http")]),t._v(" "),a("li",[t._v("服务器：我用会话密钥解密了http，并加密了相应")]),t._v(" "),a("li",[t._v("客户端：我收到了加密的响应")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" http")]),t._v(" "),a("p",[t._v("获取公钥之后就可以用公钥加密数据并且发送了。")]),t._v(" "),a("h2",{attrs:{id:"多线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[t._v("#")]),t._v(" 多线程")]),t._v(" "),a("h3",{attrs:{id:"交替打印"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交替打印"}},[t._v("#")]),t._v(" 交替打印")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" others\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strconv"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sync"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个协程既是生产者又是消费者，交替打印。那么如果是多个元素交替打印呢？")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Test "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tc     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cond\n\tcount "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\twg    sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WaitGroup\n\tch    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a 打印单数 检查count，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"just test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 条件变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Cond")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自旋")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 释放锁进入阻塞状态（wait包含三个步骤，释放锁，阻塞，获取锁）")]),t._v("\n\t\t\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("strconv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Itoa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"::"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通知另一个协程，已经处理完成，让另一个协程尝试获取锁")]),t._v("\n\t\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 释放锁")]),t._v("\n\t\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// channel 实现")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Chan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("strconv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Itoa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"::"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\t\t\t\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test::default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewCond")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mutex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" count\n\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c\n\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" t\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" others\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testing"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestPp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Chan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Chan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestPpp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Cond")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Cond")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ttt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"微服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务"}},[t._v("#")]),t._v(" 微服务")]),t._v(" "),a("h3",{attrs:{id:"服务注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务注册"}},[t._v("#")]),t._v(" 服务注册")]),t._v(" "),a("h3",{attrs:{id:"配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置中心"}},[t._v("#")]),t._v(" 配置中心")]),t._v(" "),a("h3",{attrs:{id:"熔断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熔断"}},[t._v("#")]),t._v(" 熔断")]),t._v(" "),a("h3",{attrs:{id:"限流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限流"}},[t._v("#")]),t._v(" 限流")]),t._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("h3",{attrs:{id:"session和cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session和cookie"}},[t._v("#")]),t._v(" session和cookie")]),t._v(" "),a("h3",{attrs:{id:"jwt的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt的原理"}},[t._v("#")]),t._v(" jwt的原理")]),t._v(" "),a("h3",{attrs:{id:"在数据量比较大的情况下会有什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在数据量比较大的情况下会有什么问题"}},[t._v("#")]),t._v(" 在数据量比较大的情况下会有什么问题")]),t._v(" "),a("h2",{attrs:{id:"网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[t._v("#")]),t._v(" 网络")]),t._v(" "),a("h3",{attrs:{id:"三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),a("h3",{attrs:{id:"四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[t._v("#")]),t._v(" 四次挥手")]),t._v(" "),a("h3",{attrs:{id:"拥塞控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[t._v("#")]),t._v(" 拥塞控制")]),t._v(" "),a("h3",{attrs:{id:"差错控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#差错控制"}},[t._v("#")]),t._v(" 差错控制")]),t._v(" "),a("h3",{attrs:{id:"路由原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由原理"}},[t._v("#")]),t._v(" 路由原理")]),t._v(" "),a("h3",{attrs:{id:"分组有序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组有序"}},[t._v("#")]),t._v(" 分组有序")]),t._v(" "),a("h2",{attrs:{id:"go-语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-语言"}},[t._v("#")]),t._v(" go 语言")]),t._v(" "),a("p",[t._v("https://chai2010.cn/advanced-go-programming-book/ch1-basic/readme.html")]),t._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" docker")])])}),[],!1,null,null,null);s.default=r.exports}}]);