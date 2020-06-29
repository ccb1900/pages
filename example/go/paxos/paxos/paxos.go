package paxos

type Proposer struct {
	no int
	value string
}

func (p *Proposer)Broadcast()  {
	p.no++
	// 发送到所有的acceptor
}
type Acceptor struct {
	
}

func Counter(machine int)  {
	
}

