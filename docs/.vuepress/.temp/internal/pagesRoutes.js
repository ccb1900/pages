import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","go genarate",["/index.html","/README.md"]],
  ["v-110e81ee","/golang/%20stringer%20%E5%AE%9E%E7%8E%B0%E5%88%86%E6%9E%90.html","",["/golang/ stringer 实现分析.html","/golang/%20stringer%20%E5%AE%9E%E7%8E%B0%E5%88%86%E6%9E%90","/golang/ stringer 实现分析.md","/golang/%20stringer%20%E5%AE%9E%E7%8E%B0%E5%88%86%E6%9E%90.md"]],
  ["v-056cc365","/golang/go%20generate%E5%91%BD%E4%BB%A4-%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90.html","go genarate",["/golang/go generate命令-代码生成.html","/golang/go%20generate%E5%91%BD%E4%BB%A4-%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90","/golang/go generate命令-代码生成.md","/golang/go%20generate%E5%91%BD%E4%BB%A4-%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90.md"]],
  ["v-3706649a","/404.html","",["/404"]],
  ["v-39266350","/blog/redux%20%E5%85%A5%E9%97%A8.html","redux 入门",["/blog/redux 入门.html","/blog/redux%20%E5%85%A5%E9%97%A8","/blog/redux 入门.md","/blog/redux%20%E5%85%A5%E9%97%A8.md"]],
  ["v-49ad2024","/blog/react%20%E7%AE%80%E4%BB%8B.html","react 简介",["/blog/react 简介.html","/blog/react%20%E7%AE%80%E4%BB%8B","/blog/react 简介.md","/blog/react%20%E7%AE%80%E4%BB%8B.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
