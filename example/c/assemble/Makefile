LIST = lab1 lab2 lab3 lab4 lab5 lab6 lab7 lab8 lab9 lab10 lab11
all:
	for i in $(LIST); do \
			gcc -O2  -S $$i.c -m32 -fno-omit-frame-pointer; \
	done
clean:
	rm -rf ./*.s

# 大O代表编译优化级别
# 32 位