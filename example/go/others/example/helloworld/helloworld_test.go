package helloworld

import "testing"

func TestHelloWorld(t *testing.T) {
	t.Log("hello world")
	HelloWorld()
}

func TestHello(t *testing.T) {
	if Hello() == "hello" {
		t.Log("success")
	} else {
		t.Fatal("failed")
	}
}

func TestHelloCcb(t *testing.T) {
	if helloCcb() == "ccb" {
		t.Log("success")
	} else {
		t.Fatal("failed")
	}
}
