# osx

- macOS
- bash - Bourne Again SHell
- ~/.bash_profile
- ~/ 文件夹就是 /Users/haixhu/
- /usr/local/bin/fastlane

## Shell

- bash 是 Shell 的一种
- zsh Z-Shell 是 Mac default Shell
- shell命令可以分为以下三类：
 - 内建函数(built-in function)：shell自带的功能
 - 可执行文件(executable file)：保存在shell之外的脚本，提供了额外的功能。
 - 别名(alias)：给某个命令的简称

```shell
# 查看占用了8000端口的进程
lsof -i tcp:8000
# 根据PID停掉某个进程
kill -9 {PID}

# 查看本地IP; en:0 字段查看IPv4
ifconfig

# sed ??
sed -i "s:old_value:new_value:g" src/index.ts

# 返回命令对应的可执行文件的绝对路径
which date
which pwd

# 可以用type命令查看命令类型。
# 如果是内建函数会返回builtin字样，
# 如果是可执行文件，将返回文件的路径
type date
type pwd

date
cal
echo $SHELL

# log 输出到文件
yarn ios > error.txt

whoami

ls -la
ls -l <file>

drwxrwxrwx

groups $(whoami)

id -a $(whoami)
```

## Homebrew

- https://brew.sh

```shell
brew install nvm
brew docs
brew doctor
brew tap --repair
brew cleanup
HOMEBREW_NO_INSTALL_CLEANUP
```

## Xcode

- Xcode/product/clean Build Folder

```shell
# clear xcode cache
rm -rf ~/Library/Developer/Xcode/DerivedData
```

### Xcode Command Line Tools

- https://developer.apple.com/downloa/all/?q=xcode

```shell
xcode-select --install
```
