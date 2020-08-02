sudo apt update && \
sudo apt install make gcc bison flex zsh autojump && \
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" && \
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions


# 在 /etc/passwd 找到用户，修改登录的shell为/bin/zsh