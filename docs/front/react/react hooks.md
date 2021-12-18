# react hooks

Hooks 是 React 16.8 中的新增功能。它们让您无需编写类即可使用状态和其他 React 功能。

## state hook

## effect hook

您之前可能已经从 React 组件执行数据获取、订阅或手动更改 DOM。我们将这些操作称为“副作用”（或简称“效果”），因为它们会影响其他组件，并且无法在渲染过程中完成。

Effect Hook useEffect 添加了从函数组件执行副作用的能力。它与 React 类中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 的用途相同，但统一为一个 API。 （我们将在 Using the Effect Hook 中展示将 useEffect 与这些方法进行比较的示例。

一个组件可以使用许多 useEffect。

```js
useEffect(() => {
  //
});
```

```js
useEffect(() => {
  //component did
  return () => {
    // 做一些清理工作
    // unmount
  };
});
```

钩子让你可以通过哪些部分相关（例如添加和删除订阅）来组织组件中的副作用，而不是根据生命周期方法强制拆分。

### 无需清理的副作用

### 清理副作用

当组件卸载时，React 执行清理。但是，正如我们之前所了解的，效果会在每次渲染时运行，而不仅仅是一次。这就是为什么 React 还会在下次运行效果之前清除上一次渲染中的效果。

### 使用副作用的小技巧

- 使用多个副作用分离关注点

- 说明:为什么每次更新都要执行副作用

- 通过跳过副作用优化性能

## hooks 的规则

- 提供了专门的 eslint 插件
- 只能在顶层调用 hooks
- 只能在 react 函数中调用 hooks
  - 函数式组件
  - 自定义 hooks 中调用 hooks

## 自定义 hooks

自定义hooks可以将组件逻辑提取到可复用的函数中。

```js

// 自定义hooks
const useCc = (count) => {
    const [cc,setCc] = useState(0)
    useEffect(() => {
        console.log('use effect start',count)
        setCc(count)
        return () => {
            console.log('use effect clear',count)
        }
    },[count])

    return cc
}

```

