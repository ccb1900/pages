<template><h1 id="redux-入门" tabindex="-1"><a class="header-anchor" href="#redux-入门" aria-hidden="true">#</a> redux 入门</h1>
<p>介绍redux是什么以及如何使用redux，由此，对redux有一个宏观的认识</p>
<ul>
<li>state
<ul>
<li>可以是js对象</li>
<li>js数组</li>
<li>js原生类型</li>
</ul>
</li>
<li>action
<ul>
<li>事件</li>
<li>一个原生的js对象，描述应用发生了什么</li>
<li>action 函数，dispatch时使用</li>
</ul>
</li>
<li>reducer
<ul>
<li>监听器</li>
<li>接收state和action作为参数，通过action.type判断事件类型，对state做出处理，返回一个新的状态或者保持旧状态不变。</li>
<li>reducer 签名 <code>(state,action) =&gt; newState</code></li>
<li>
<ol>
<li>基于state和action计算新状态</li>
</ol>
</li>
<li>
<ol start="2">
<li>不可直接修改旧状态。必须进行不可变更新，复制旧状态修改。</li>
</ol>
</li>
<li>
<ol start="3">
<li>禁止处理异步逻辑或副作用</li>
</ol>
</li>
<li>任何遵循这些规则的函数也被称为“纯”函数，即使它没有专门编写为 reducer 函数。</li>
<li>
<h2 id="为什么这些规则是重要的" tabindex="-1"><a class="header-anchor" href="#为什么这些规则是重要的" aria-hidden="true">#</a> 为什么这些规则是重要的？</h2>
</li>
</ul>
</li>
<li>副作用
<ul>
<li>从函数返回值之外可以看到的对状态或行为的任何更改</li>
<li>例如
<ul>
<li>打印到控制台</li>
<li>保存到文件</li>
<li>设置异步定时器</li>
<li>http 请求</li>
<li>修改存在于函数之外的某些状态，或改变函数的参数</li>
<li>生成随机数或唯一的随机 ID (<code>Math.random() or Date.now()</code>)</li>
</ul>
</li>
</ul>
</li>
<li>todoApp
<ul>
<li>action
<ul>
<li>add a todo</li>
<li>todo 的完成状态</li>
<li>删除todo</li>
<li>清除已完成todo</li>
</ul>
</li>
</ul>
</li>
</ul>
</template>
