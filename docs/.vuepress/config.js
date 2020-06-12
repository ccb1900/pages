module.exports = {
  title: '献给新一代的文档',
  // theme: '@vuepress/blog',
  base: '/pages/',
  logo: '/logo.png',
  description: 'java,mysql,php,redis,消息队列,laravel,spring',
  head: [
    ['link', { rel: 'ico', href: `/logo.png` }],
  ],
  themeConfig: {
    displayAllHeaders: true,
    // sidebarDepth: 2,
    lastUpdated: '最近更新时间',
    smoothScroll: true,
    // sidebar: 'auto',
    nav: [
      { text: '主页', link: '/' },
      { text: '后端', link: '/backend/' },
      { text: '前端', link: '/front/' },
      { text: '屠龙术', link: '/dragon/' },
      { text: '其他', link: '/other/' },
      { text: '博客', link: '/blog/' },
      { text: 'Github', link: 'https://github.com/ccb1900/pages' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/backend/': [
        {
          title: 'Java',   // 必要的
          // path: '/backend/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: []
        },
        {
          title: 'Go',   // 必要的
          // path: '/backend/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: []
        },
        {
          title: 'PHP',   // 必要的
          // path: '/backend/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: []
        },
        {
          title: 'Rust',   // 必要的
          // path: '/backend/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            ["/backend/rust/", '概述'],
            ["/backend/rust/常见编程概念", '常见编程概念'],
            ["/backend/rust/所有权", '理解所有权'],
            ["/backend/rust/使用结构体结构化关联的数据", '理解使用结构体结构化关联的数据所有权'],
            ["/backend/rust/枚举和模式匹配", '枚举和模式匹配'],
            ["/backend/rust/使用包，Crate和模块管理不断增长的项目", '使用包，Crate和模块管理不断增长的项目'],
          ]
        },
        {
          title: 'Python',   // 必要的
          // path: '/backend/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: []
        },
        {
          title: 'Netty',   // 必要的
          // path: '/backend/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: []
        },
        {
          title: 'RabbitMQ',   // 必要的
          // path: '/backend/rabbitmq/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            ["/backend/rabbitmq/",'概述'],
            ["/backend/rabbitmq/AMQP",'AMQP'],
            ["/backend/rabbitmq/发布者",'发布者'],
            ["/backend/rabbitmq/消费者",'消费者'],
            ["/backend/rabbitmq/例子",'例子'],
          ]
        },
        {
          title: 'RocketMQ',
          children: [ /* ... */]
        },
        {
          title: 'Kafka',
          children: [ /* ... */]
        },
        {
          title: 'Redis',
          children: [ /* ... */]
        },
        {
          title: 'Spring',
          children: [ /* ... */]
        },
        {
          title: 'Mybatis',
          children: [ /* ... */]
        },
        {
          title: 'Laravel',
          children: [ /* ... */]
        },
        {
          title: 'Mysql',
          children: [ /* ... */]
        },
        {
          title: '微服务',
          children: [ /* ... */]
        },
        {
          title: '容器',
          children: [ /* ... */]
        },
        {
          title: '安全',
          children: [ /* ... */]
        },
      ],
      '/front/': [
        {
          title: 'Vue',
          children: [ /* ... */]
        },
        {
          title: 'React',
          children: [ /* ... */]
        },
        {
          title: 'Angular',
          children: [ /* ... */]
        },
        {
          title: 'Css',
          children: [ /* ... */]
        },
        {
          title: 'Android',
          children: [ /* ... */]
        },
        {
          title: 'iOS',
          children: [ /* ... */]
        },
        {
          title: '桌面',
          children: [ /* ... */]
        },
      ],
      '/dragon/': [
        {
          title: '设计模式',
          children: [ /* ... */]
        },
        {
          title: '数据结构',
          children: [ /* ... */]
        },
        {
          title: '算法',
          children: [ /* ... */]
        },
        {
          title: '编译原理',
          children: [ /* ... */]
        },
        {
          title: '计算机网络',
          children: [ /* ... */]
        },
        {
          title: '操作系统',
          children: [ /* ... */]
        },
        {
          title: '数据库',
          children: [ /* ... */]
        },
      ],
      '/other/': [
        {
          title: '树莓派',
          children: [ /* ... */]
        },
        {
          title: '路由器',
          children: [ /* ... */]
        },
        {
          title: '车联网',
          children: [ /* ... */]
        },
        {
          title: '物联网',
          children: [ /* ... */]
        },
        {
          title: '大数据',
          children: [ /* ... */]
        },
      ],
      '/blog/': [
        '',
        'github action 自动部署 gh-pages',
        '大文件分片上传',
      ]
    }
  }
}
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