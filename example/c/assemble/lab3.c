#include<stdio.h>

int main(int argc, char const *argv[])
{
  int a = -1;
  unsigned int b=1u;
  
  printf("%d\n",a-b); 

  if (a > b)
  {
    printf("???");
  }
  

  return 0;
}
