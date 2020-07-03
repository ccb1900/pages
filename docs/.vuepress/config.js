module.exports = {
  title: "献给新一代的文档",
  plugins: [
    require("./plugins/baidu-analytics/index.js"),
    [
      "@vuepress/blog",
      {
        directories: [
          {
            // Unique ID of current classification
            id: "post",
            // Target directory
            dirname: "blog",
            // Path of the `entry page` (or `list page`)
            path: "/post/",
            layout: "IndexPost",
            itemPermalink: "/post/:year/:month/:day/:slug",
            pagination: {
              lengthPerPage: 20,
              layout: "IndexPost",
            },
          },
        ],
        globalPagination: {
          lengthPerPage: 2,
          prevText: "上一页",
          nextText: "下一页",
        },
      },
    ],
  ],
  base: "/pages/",
  logo: "/logo.png",
  description: "java,mysql,php,redis,消息队列,laravel,spring",
  head: [["link", { rel: "ico", href: `/logo.png` }]],
  themeConfig: {
    displayAllHeaders: true,
    // sidebarDepth: 2,
    lastUpdated: "最近更新时间",
    smoothScroll: true,
    // sidebar: 'auto',
    nav: [
      { text: "主页", link: "/" },
      { text: "后端", link: "/backend/" },
      { text: "前端", link: "/front/" },
      { text: "屠龙术", link: "/dragon/" },
      { text: "其他", link: "/other/" },
      { text: "菜谱", link: "/recipe/" },
      { text: "博客", link: "/post/" },
      { text: "Github", link: "https://github.com/ccb1900/pages" },
    ],
    sidebar: {
      "/backend/": [
        {
          title: "Java", // 必要的
          // path: '/backend/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [],
        },
        {
          title: "Golang", // 必要的
          // path: '/backend/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            ["/backend/golang/", "golang 参考手册"],
            ["/backend/golang/单例模式", "golang 单例模式"],
            ["/backend/golang/go 语言设计与实现", "golang 语言设计与实现"],
            ["/backend/golang/常用工具函数", "golang 常用工具函数"],
          ],
        },
        {
          title: "PHP", // 必要的
          // path: '/backend/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [],
        },
        {
          title: "Rust", // 必要的
          // path: '/backend/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            ["/backend/rust/", "概述"],
            ["/backend/rust/常见编程概念", "常见编程概念"],
            ["/backend/rust/所有权", "理解所有权"],
            [
              "/backend/rust/使用结构体结构化关联的数据",
              "理解使用结构体结构化关联的数据所有权",
            ],
            ["/backend/rust/枚举和模式匹配", "枚举和模式匹配"],
            [
              "/backend/rust/使用包，Crate和模块管理不断增长的项目",
              "使用包，Crate和模块管理不断增长的项目",
            ],
          ],
        },
        {
          title: "Python", // 必要的
          // path: '/backend/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [],
        },
        {
          title: "Netty", // 必要的
          // path: '/backend/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [],
        },
        {
          title: "RabbitMQ", // 必要的
          // path: '/backend/rabbitmq/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            ["/backend/rabbitmq/", "概述"],
            ["/backend/rabbitmq/AMQP", "AMQP"],
            ["/backend/rabbitmq/发布者", "发布者"],
            ["/backend/rabbitmq/消费者", "消费者"],
            ["/backend/rabbitmq/例子", "例子"],
          ],
        },
        {
          title: "RocketMQ",
          children: [
            /* ... */
          ],
        },
        {
          title: "Kafka",
          children: [
            /* ... */
          ],
        },
        {
          title: "Redis",
          children: [
            /* ... */
          ],
        },
        {
          title: "Spring",
          path: "/backend/spring/",
          children: [["/backend/spring/", "spring中文手册"]],
        },
        {
          title: "Mybatis",
          children: [
            /* ... */
          ],
        },
        {
          title: "Laravel",
          children: [
            /* ... */
          ],
        },
        {
          title: "Mysql",
          children: [
            /* ... */
          ],
        },
        {
          title: "微服务",
          children: [
            // ["配置中心","/"],
            // ["熔断降级","/"],
            // ["APIGATEWAY","/"],
            // ["APIGATEWAY","/"],
          ],
        },
        {
          title: "容器",
          children: [
            /* ... */
          ],
        },
        {
          title: "安全",
          children: [
            /* ... */
          ],
        },
        {
          title: "翻译",
          children: [
            [
              "/backend/translate/CAS Protocol 3.0 Specification",
              "CAS Protocol 3.0 Specification",
            ],
            [
              "/backend/translate/cas 3.0 协议规范翻译",
              "CAS 协议 3.0 规范翻译",
            ],
          ],
        },
      ],
      "/front/": [
        {
          title: "Vue",
          children: [
            /* ... */
          ],
        },
        {
          title: "React",
          children: [
            /* ... */
          ],
        },
        {
          title: "Angular",
          children: [
            /* ... */
          ],
        },
        {
          title: "Css",
          children: [
            /* ... */
          ],
        },
        {
          title: "Android",
          children: [
            /* ... */
          ],
        },
        {
          title: "iOS",
          children: [
            /* ... */
          ],
        },
        {
          title: "桌面",
          children: [
            /* ... */
          ],
        },
      ],
      "/dragon/": [
        {
          title: "设计模式",
          children: [
            /* ... */
          ],
        },
        {
          title: "数据结构",
          children: [
            ["/dragon/data-struct/队列", "队列"],
            ["/dragon/data-struct/栈", "栈"],
            ["/dragon/data-struct/双端队列", "双端队列"],
            ["/dragon/data-struct/二叉树", "二叉树"],
            ["/dragon/data-struct/图", "图"],
          ],
        },
        {
          title: "算法",
          children: [
            /* ... */
            "alg/一致性哈希",
          ],
        },
        {
          title: "编译原理",
          children: [
            /* ... */
          ],
        },
        {
          title: "计算机网络",
          children: [
            /* ... */
          ],
        },
        {
          title: "操作系统",
          children: [
            /* ... */
          ],
        },
        {
          title: "数据库",
          children: [
            /* ... */
          ],
        },
      ],
      "/other/": [
        {
          title: "树莓派",
          children: [
            /* ... */
          ],
        },
        {
          title: "路由器",
          children: [
            /* ... */
          ],
        },
        {
          title: "车联网",
          children: [
            /* ... */
          ],
        },
        {
          title: "物联网",
          children: [
            /* ... */
          ],
        },
        {
          title: "大数据",
          children: [
            /* ... */
          ],
        },
      ],
      "/recipe/": [
        {
          title: "菜谱",
          path: "/recipe/",
          collapsable: false,
          sidebarDepth: 1,
          children: ["大盘鸡", "糖醋排骨"],
        },
      ],
      // "/blog/": [
      //   "",
      //   "github action 自动部署 gh-pages",
      //   "IO 模型",
      //   "Proactor 模式",
      //   "Reactor 模式",
      //   "socket介绍",
      //   "一致性哈希算法",
      //   "分布式选举算法",
      //   "半同步-半异步模式",
      //   "多路复用介绍",
      //   "大文件分片上传",
      //   "提高服务器性能的其他建议",
      //   "有限状态机",
      //   "爱奇艺网络协程编写高并发应用实践",
      //   "领导者->追随者模式",
      // ],
    },
  },
};
// {
//   '/mq/': [
//     '',     /* /foo/ */
//     'AMQP',   /* /foo/two.html */
//     '发布者',   /* /foo/two.html */
//     '消费者',   /* /foo/two.html */
//   ],

//     '/java/': [
//       '',      /* /bar/ */
//     ],

//       // fallback
//       '/': [
//         '',        /* / */
//         '/java/', /* /contact.html */
//         '/mq/'    /* /about.html */
//       ]
// }