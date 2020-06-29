# Paxos 算法

这是一个共识算法

协商一致的要求：

- 只能选择已经被提出的value
- 只能选择一个value
- 进程只能获取那些真正被选中的value

我们不会尝试指定精确的要求。但是我们的目标是要确保总有一些被提出的value会被选中，如果一个value最终被选中了，那么其他进程最终要能够获取该value。

包含三类agents，proposers, acceptors和learners。

agents 之间可以通过发送消息通信。使用异步，非拜占庭模型：

- Agents以任意速度执行，可能发生故障，可能重启。因为所有的agent都可能在一个value被选中之后故障并重启，因此一般的方法是不可行的，除非agent能记住一些信息，即使发生了故障或重启。
- 发送的message可以是任意长度的，可能重复，也可能丢失，但是它们不会被损坏

## 参考链接

- [paxos make simple 翻译](https://www.cnblogs.com/YaoDD/p/6150498.html)
- [paxos make simple 原文](https://lamport.azurewebsites.net/pubs/paxos-simple.pdf)
- [图解paxos算法](https://ocavue.com/paxos.html)