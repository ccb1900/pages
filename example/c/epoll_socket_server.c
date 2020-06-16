#include <stdio.h>
#include <string.h> //strlen
#include <sys/socket.h>
#include <arpa/inet.h> //inet_addr
#include <unistd.h>    //write
#define MAX_EVENTS 5
#define READ_SIZE 10
#include <sys/epoll.h>

int main(int argc, char *argv[])
{
  int socket_desc, new_socket, c;
  struct sockaddr_in server, client;
  char *message;

  int clients[1024];
  int running = 1;
  char read_buffer[READ_SIZE + 1];
  struct epoll_event event, events[MAX_EVENTS];

  // 创建
  int epoll_fd = epoll_create1(0);

  // 检测是否创建成功
  if (epoll_fd == -1)
  {
    fprintf(stderr, "Failed to create epoll file descriptor\n");
    return 1;
  }

  //Create socket
  socket_desc = socket(AF_INET, SOCK_STREAM, 0);
  if (socket_desc == -1)
  {
    printf("Could not create socket");
  }

  //Prepare the sockaddr_in structure
  server.sin_family = AF_INET;
  server.sin_addr.s_addr = INADDR_ANY;
  server.sin_port = htons(8888);

  //Bind
  if (bind(socket_desc, (struct sockaddr *)&server, sizeof(server)) < 0)
  {
    puts("bind failed");
    return 1;
  }
  puts("bind done");
  // setnonblocking(socket_desc);
  event.events = EPOLLIN | EPOLLET;
  event.data.fd = socket_desc;

  // 0 标准输入，注册监听事件类型
  if (epoll_ctl(epoll_fd, EPOLL_CTL_ADD, socket_desc, &event))
  {
    fprintf(stderr, "Failed to add file descriptor to epoll\n");
    close(epoll_fd);
    return 1;
  }

  //Listen
  listen(socket_desc, 3);
  
  //Accept and incoming connection
  puts("Waiting for incoming connections...");
  c = sizeof(struct sockaddr_in);
  int client_count = 0;
  while (running)
  {

    printf("\nPolling for input...\n");
    // 阻塞，等待事件就绪
    int event_count = epoll_wait(epoll_fd, events, MAX_EVENTS, 30000);
    printf("%d ready events \n", event_count);
    // 处理就绪事件
    for (size_t i = 0; i < event_count; i++)
    {
      if (events[i].data.fd == socket_desc)
      {
        // 设置为非阻塞，此处可以立刻返回？
        int new_socket = accept(socket_desc, (struct sockaddr *)&client, (socklen_t *)&c);
        if (-1 == new_socket)
        {
          fprintf(stderr, "Failed to sockfd");
          return -1;
        }
        // setnonblocking(new_socket);
        event.events = EPOLLIN | EPOLLET;
        event.data.fd = new_socket;
        if (epoll_ctl(epoll_fd, EPOLL_CTL_ADD, new_socket, &event) == -1)
        {
          fprintf(stderr, "Failed to add file descriptor to epoll\n");
          return -1;
        }
        clients[client_count] = new_socket;
        client_count++;
        message = "Hello Client , I have received your connection. But I have to go now, bye\n";
        write(new_socket, message, strlen(message));
      } else {
        for (size_t j = 0; j < client_count; j++)
        {
          if (events[i].data.fd == clients[j]) {
            fprintf(stdout, "Failed to add file descriptor to epoll\n");
            message = "hello hahaha\n";
            write(clients[j], message, strlen(message));
          }
        }
        
      }
      
    }
  }

  return 0;
}