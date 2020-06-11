# rust

## 常用命令

本地查看rust book

```bash
rustup docs --book
```

本地查看rust 版本

```bash
rustc --version
```

更新rustup

```bash
rustup update
```

查看rust 本地文档

```bash
rustup doc
```
编译单独的rust文件

```bash
rustc  rustfilename.rs
```

查看cargo 版本

```bash
cargo --version
```

新建项目

```bash
cargo new helloword
```

构建

```bash
cargo build
```

构建发行版

```bash
cargo build --release
```

检查项目是否可编译

```bash
cargo check
```

格式化工具 rustfmt

rust 中，变量默认是不可变的。使用let声明变量。

match 关键字匹配。

变量可重复声明，常用于类型转换。
