module.exports = {
  title: '献给新一代的文档',
  // theme: '@vuepress/blog',
  base: '/pages/',
  description: 'java,mysql,php,redis,消息队列',
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: '最近更新时间',
    smoothScroll: true,
    // sidebar: 'auto',
    nav: [
      { text: '主页', link: '/' },
      { text: '消息队列', link: '/mq/' },
      { text: 'Java', link: '/java/' },
      { text: 'PHP', link: '/php/' },
      { text: 'Mysql', link: '/mysql/' },
      { text: 'Redis', link: '/redis/' },
      { text: '其他', link: '/other/' },
      { text: 'Github', link: 'https://github.com/ccb1900/pages' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/mq/': [
        '',     /* /foo/ */
        'AMQP',   /* /foo/two.html */
        '发布者',   /* /foo/two.html */
        '消费者',   /* /foo/two.html */
      ],

      '/java/': [
        '',      /* /bar/ */
      ],

      // fallback
      '/': [
        '',        /* / */
        '/java/', /* /contact.html */
        '/mq/'    /* /about.html */
      ]
    }
  }
}