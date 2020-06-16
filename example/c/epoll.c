#define MAX_EVENTS 5
#define READ_SIZE 10
#include <stdio.h>
#include <unistd.h>
#include <sys/epoll.h>
#include <string.h>

int main()
{
  int running = 1;
  char read_buffer[READ_SIZE + 1];
  struct epoll_event event,events[MAX_EVENTS];

  // 创建
  int epoll_fd = epoll_create1(0);

  // 检测是否创建成功
  if (epoll_fd == -1)
  {
    fprintf(stderr, "Failed to create epoll file descriptor\n");
    return 1;
  }

  event.events = EPOLLIN;
  event.data.fd = 0;

  // 0 标准输入，注册监听事件类型
  if (epoll_ctl(epoll_fd, EPOLL_CTL_ADD,0,&event))
  {
    fprintf(stderr, "Failed to add file descriptor to epoll\n");
    close(epoll_fd);
    return 1;
  }
  
  while (running)
  {
    printf("\nPolling for input...\n");
    // 阻塞，等待事件就绪
    int event_count = epoll_wait(epoll_fd,events,MAX_EVENTS,30000);
    printf("%d ready events \n", event_count);
    // 处理就绪事件
    for (size_t i = 0; i < event_count; i++)
    {
      printf("Reading fd '%d' --- ",events[i].data.fd);
      size_t bytes_read = read(events[i].data.fd,read_buffer,READ_SIZE);
      printf("%zd bytes read.\n", bytes_read);
      read_buffer[bytes_read] = '\0';
      printf("Read '%s'\n", read_buffer);
      if (!strncmp(read_buffer, "stop\n", 5)) {
        running = 0;
      }
    }
    
  }
  
  // 关闭epoll，close可以关闭任何文件描述符
  if (close(epoll_fd))
  {
    fprintf(stderr, "Failed to close epoll file descriptor\n");
    return 1;
  }
  fprintf(stdout, "hello epoll\n");
  return 0;
}