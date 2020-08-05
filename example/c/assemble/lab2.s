	.section	__TEXT,__text,regular,pure_instructions
	.build_version macos, 10, 15	sdk_version 10, 15, 6
	.globl	_main                   ## -- Begin function main
	.p2align	4, 0x90
_main:                                  ## @main
	.cfi_startproc
## %bb.0:
	pushl	%ebp
	.cfi_def_cfa_offset 8
	.cfi_offset %ebp, -8
	movl	%esp, %ebp
	.cfi_def_cfa_register %ebp
	subl	$8, %esp
	calll	L0$pb
L0$pb:
	popl	%eax
	subl	$8, %esp
	leal	L_.str-L0$pb(%eax), %eax
	pushl	$12345                  ## imm = 0x3039
	pushl	%eax
	calll	_printf
	addl	$16, %esp
	xorl	%eax, %eax
	addl	$8, %esp
	popl	%ebp
	retl
	.cfi_endproc
                                        ## -- End function
	.section	__TEXT,__cstring,cstring_literals
L_.str:                                 ## @.str
	.asciz	"%x"


.subsections_via_symbols
