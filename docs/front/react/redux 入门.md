# redux 入门

介绍redux是什么以及如何使用redux，由此，对redux有一个宏观的认识。

redux包含几个主要元素，state，action,reducer。

- state
    - 可以是js对象
    - js数组
    - js原生类型
- action
    - 事件
    - 一个原生的js对象，描述应用发生了什么
    - action 函数
- reducer
    - 监听器
    - 接收state和action作为参数，通过action.type判断事件类型，对state做出处理，返回一个新的状态或者保持旧状态不变。
    - reducer 签名 `(state,action) => newState`
    - 1. 基于state和action计算新状态
    - 2. 不可直接修改旧状态。必须进行不可变更新，复制旧状态修改。
    - 3. 禁止处理异步逻辑或副作用
    - 任何遵循这些规则的函数也被称为“纯”函数，即使它没有专门编写为 reducer 函数。
    - 为什么这些规则是重要的？
        - Redux 的目标之一是使您的代码可预测。当函数的输出仅根据输入参数计算时，更容易理解该代码的工作原理并对其进行测试
        - 另一方面，如果一个函数依赖于它自身之外的变量，或者它的行为是随机的，你永远不知道运行它时会发生什么
        - 如果一个函数修改了其他值，包括它的参数，这可能会意外地改变应用程序的工作方式。这可能是错误的常见来源，例如“我更新了我的状态，但现在我的 UI 没有在应该更新的时候更新！”
        - Redux DevTools 的一些功能取决于你的 reducer 是否正确遵循这些规则
    - 不可变更新
        - 在redux中永远不允许直接修改state
        - 可以使用扩展操作符或者其他函数返回一个copy
        - 当数据嵌套时，这变得更加困难。不可变更新的一个关键规则是您必须为需要更新的每一级嵌套制作副本。
        - 手写不可变更新的逻辑是困难的，容易犯错的。所以我们需要redux toolkit，来简化不可变更新的编写。
::: tip

安全的修改状态

```js
return {
    ...state,
    value: 123
}
```
:::

- 副作用
    - 从函数返回值之外可以看到的对状态或行为的任何更改
    - 例如
        - 打印到控制台
        - 保存到文件
        - 设置异步定时器
        - http 请求
        - 修改存在于函数之外的某些状态，或改变函数的参数
        - 生成随机数或唯一的随机 ID (`Math.random() or Date.now()`)
- 分割reducer
    - 根据状态对reducer进行分割，解决数据嵌套的问题。
    - 每个reducer更新一部分状态
    - 这称为 reducer 组合，它是构建 Redux 应用程序的基本模式。

::: tip todoSlice.js

```js
const initialState = [
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
]


function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}


const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case 'todos/todoAdded': {
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                }
            ]
        }
    }
}

```

:::


- 组合reducers
    - 分久必合
    - 根reducers是必须的，对slice reducer进行组合。
- store
    - 全局唯一
    - 在里面保存当前的应用程序状态
    - 可以获取当前状态
    - dispatch
    - subscribe
    - unsubscribe
    - 创建 store
    - 加载初始状态
        - 例如包含在从服务器发送的 HTML 页面中的值，或持久保存在 localStorage 中并在用户再次访问该页面时回读的值
    - enhancers
        - 对store做一些定制
    - middleware
        - dispatch 进行一些个性化操作
        - Redux 中间件在分派动作和它到达reducer的那一刻之间提供了第三方扩展点。
            - 打印日志
            - 冲突报告
            - 异步api
            - 路由等等
        - 使用中间件
            - Redux 中间件实际上是在 Redux 内置的一个非常特殊的 store 增强器之上实现的，称为 applyMiddleware
        - 中间件可以有副作用
        - 中间件在dispatch逻辑之前执行
            - The print1 middleware (which we see as store.dispatch)
            - The print2 middleware
            - The print3 middleware
            - The original store.dispatch
            - The root reducer inside store
        - 定制中间件

        ```js
        export const exampleMiddleware = (storeApi) => {
            return (next) => {
                return (action) => {
                    console.log("dispatch start",action.type,action)
                    let result = next(action)
                    console.log("dispatch end",result)
                    return result
                }
            }
        }

        ```

- todoApp
    - action
        - add a todo
        - todo 的完成状态
        - 删除todo
        - 清除已完成todo

## react-redux 的模式

全局状态，组件状态，表单。整个应用程序所需的全局状态应该放在 Redux Store 中。只在一处需要的状态应该放在组件状态

## 异步逻辑和拉取数据

- 使用redux thunk 中间件，官方的异步函数中间件。允许直接dispatch异步函数

## provider

## redux tookit

- configureStore
    - 组合reducers
    - 创建store
    - 自动添加thunk中间件
    - 自动增加一些错误检查的中间件
    - 自动设置redux开发工具扩展

```js

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer
  }
})

```

- 包更干净了
    - 自动包含redux，redux-thunk，reselect
- createSlice
    - name，生成的action的前缀
    - initialState，初始状态
    - reducers 一个对象，其中键是字符串，值是将处理特定操作的“case reducer”函数
    - 自动生成action
    - 使用了immer，因此可以在reducers中进行可变更新
```js

import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.push(action.payload)
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    todosLoading(state, action) {
      return {
        ...state,
        status: 'loading'
      }
    }
  }
})

export const { todoAdded, todoToggled, todosLoading } = todosSlice.actions

export default todosSlice.reducer

```
    - createAsyncThunk
## 规范化状态