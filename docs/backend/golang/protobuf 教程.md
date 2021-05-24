# 安装

- [protobuf 编译器安装](https://github.com/protocolbuffers/protobuf/releases)，之后，可以使用protoc命令，可能需要自己配置环境变量
- [golang 插件安装](https://github.com/protocolbuffers/protobuf-go)，之后可以使用 protoc-gen-go 命令，会安装到$GOBIN

```
protoc -I=$SRC_DIR --go_out=$DST_DIR $SRC_DIR/addressbook.proto
```
