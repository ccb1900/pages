package others

import "testing"

func TestPp(t *testing.T) {
	tt := New(0)
	tt.Pp()
	tt.wg.Add(2)
	go func() {
		tt.Chan(1)
		tt.wg.Done()
	}()
	go func() {
		tt.Chan(0)
		tt.wg.Done()
	}()

	tt.wg.Wait()

	t.Log("success")

}
func TestPpp(t *testing.T) {
	tt := New(0)
	tt.Pp()
	tt.wg.Add(2)
	go func() {
		tt.Cond(1)
		tt.wg.Done()
	}()
	go func() {
		tt.Cond(0)
		tt.wg.Done()
	}()

	tt.wg.Wait()
	t.Log("success")

}
