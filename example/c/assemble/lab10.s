	.section	__TEXT,__text,regular,pure_instructions
	.build_version macos, 10, 15	sdk_version 10, 15, 6
	.globl	_swap                   ## -- Begin function swap
	.p2align	4, 0x90
_swap:                                  ## @swap
	.cfi_startproc
## %bb.0:
	pushl	%ebp
	.cfi_def_cfa_offset 8
	.cfi_offset %ebp, -8
	movl	%esp, %ebp
	.cfi_def_cfa_register %ebp
	pushl	%esi
	.cfi_offset %esi, -12
	movl	12(%ebp), %eax
	movl	8(%ebp), %ecx
	movl	(%ecx), %edx
	movl	(%eax), %esi
	movl	%esi, (%ecx)
	movl	%edx, (%eax)
	popl	%esi
	popl	%ebp
	retl
	.cfi_endproc
                                        ## -- End function

.subsections_via_symbols
