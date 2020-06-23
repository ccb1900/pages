package hash

type HashFunc interface {
	Hash(s string) int64
}
