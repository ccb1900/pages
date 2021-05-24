# 安装

- [protobuf 编译器安装](https://github.com/protocolbuffers/protobuf/releases)，之后，可以使用protoc命令，可能需要自己配置环境变量
- [golang 插件安装](https://github.com/protocolbuffers/protobuf-go)，之后可以使用 protoc-gen-go 命令，会安装到$GOBIN。用于生成go代码

```
go install google.golang.org/protobuf/cmd/protoc-gen-go
```


```
protoc -I=$SRC_DIR --go_out=$DST_DIR $SRC_DIR/addressbook.proto
```

- 在go项目中安装运行时，生成的go代码需要

```
go get google.golang.org/protobuf
```

- 安装grpc，用于开发

```
go get google.golang.org/grpc
```

- grpc protobuf插件

```
go get google.golang.org/grpc/cmd/protoc-gen-go-grpc
```


## 例子

需要辅助go_package

```
protoc --go_out=./proto/helloworld/pb ./proto/helloworld/pb/test.proto
```
