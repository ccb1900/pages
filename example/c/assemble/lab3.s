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
	pushl	%esi
	subl	$20, %esp
	.cfi_offset %esi, -12
	calll	L0$pb
L0$pb:
	popl	%esi
	leal	L_.str-L0$pb(%esi), %eax
	movl	%eax, (%esp)
	movl	$-2, 4(%esp)
	calll	_printf
	leal	L_.str.1-L0$pb(%esi), %eax
	movl	%eax, (%esp)
	calll	_printf
	xorl	%eax, %eax
	addl	$20, %esp
	popl	%esi
	popl	%ebp
	retl
	.cfi_endproc
                                        ## -- End function
	.section	__TEXT,__cstring,cstring_literals
L_.str:                                 ## @.str
	.asciz	"%d\n"

L_.str.1:                               ## @.str.1
	.asciz	"???"


.subsections_via_symbols
