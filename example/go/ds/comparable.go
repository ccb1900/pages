package ds

type Comparable interface {
	CompareTo(e Element) int
}

type Element int

func (e Element) CompareTo(el Element) int {
	if e > el {
		return 1
	} else if e == el {
		return 0
	} else {
		return -1
	}
}
