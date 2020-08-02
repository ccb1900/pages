// #include <unistd.h>
#include <linux/init.h>
#include <linux/kernel.h>
#include <linux/module.h>
#include <linux/sched.h>
#include <linux/fdtable.h>
#include <linux/fs_struct.h>
#include <linux/mm_types.h>
#include <linux/init_task.h>
#include <linux/types.h>
#include <asm/atomic.h>

static int __init print_pcb(void)
{
  struct task_struct *task,*p;
  struct list_head *pos;

  int count=0;

  printk("task struct init\n");

  printk("start print...\n");

  // 获取o号进程
  task = &init_task;

  list_for_each(pos,&task->tasks)
  {
    p = list_entry(pos,struct task_struct ,tasks);
    count++;

    printk("pid:%d;state:%lx;prio:%d;static_prio:%d;parent_pid:%d;file_count:%d;umask:%d;\n", p->pid, p->state, p->prio, p->static_prio, (p->parent)->pid, atomic_read(&((p->files)->count)), (p->fs)->umask);

    if ((p->mm) != NULL)
    {
      printk("total_vm:%ld", (p->mm)->total_vm);
    }
    
  }


  printk("count: %d",count);
  printk("end ...");

  return 0;
}

static void __exit exit_pcb(void)
{
  printk("task struct exit\n");
}

module_init(print_pcb);
module_exit(exit_pcb);

MODULE_LICENSE("GPL");
