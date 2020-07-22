# ntfs 工具

手上有一个移动硬盘，被我格式化成ntfs了，mac没有提供原生的支持。

第三方有几个可用的软件，但是都是收费的，找了半天才有这个开源的。

ntfstools

```shell
brew cask install osxfuse
```

如果不是最新的，或者已经安装了旧版

```shell
brew cask upgrade osxfuse
```

安装ntfstools

```shell
brew cask install ntfstool
```

可能会有权限问题，这个是通用的，可以自行解决。

have fun

## 参考链接

- https://www.appinn.com/ntfstool-for-macos/