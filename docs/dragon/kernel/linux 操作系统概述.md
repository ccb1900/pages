# Linux 操作系统概述

低版本学习原理，高版本学习实现。

## 双向链表

该结构可以看做的双向链表，二叉树，栈，队列。

api 设计

源码位置

## 哈希表

查询效率高，常数时间查询。

不同的关键字可能映射的相同的地址，也就是有相同的哈希值，这就是冲突。

解决冲突的方法有链地址法，再散列法，开放寻址法。

api设计

- 判断是否为空 empty
- 删除 del
- 

源码位置

## 参考书籍

## 内核开发

创建一个内核模块。

<<< @/example/c/kernel/hello.c

makefile

```shell
@/example/c/kernel/Makefile
```

插入到内核

```shell
sudo insmod hello.ko
```

查看模块打印的消息

```shell
dmesg
```

查看已加载的模块

```shell
lsmod
```

删除模块

```shell
sudo rmmod hello
```

## multipass

镜像可能下载比较慢，中科大有镜像，但是mac和windows不能用。

使用 multipass 作为开发环境。

挂载宿主机目录到 multipass 实例。命令含义为
挂载宿主机当前目录到实例的 /app 目录

一般不能直接挂载到根目录下，需要提前在实例中创建 /app 目录，然后
使用 chown 修改权限。

如果是挂载到/home/user/app目录，则不需要提前做任何操作。

```shell
multipass mount . ubuntu:/app
multipass mount . ubuntu:/home/test/app
```