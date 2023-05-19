# Ruby

- [ ]Gemfiles
- Gem 是 Ruby 中的包，依照 .gemspec 构建
- .gemspec 文件包含Gem 有关信息，版本号，作者，联系方式，依赖等

```shell
# osx查看ruby
which ruby

ruby -v
```

## RVM

- ruby version manager
- https://rvm.io

```shell
# To start using RVM run
source ~/.rvm/scripts/rvm

ruby -v

rvm list

# 安装后路径为~/.rvm/rubies/ruby-x.x.x
rvm install 2.7

# 指定ruby的默认版本
rvm use 2.7 --default

rvm use system
```

## RubyGems

- Ruby的包管理器源
- 管理gem安装的工具

```shell
# 使用系统Ruby环境
# 需要管理员权限
# /Library/Ruby/Gems/x.x.x
sudo gem install xxx

# Error RubyGems is not listed as your Gem source
gem sources

gem sources --add https://rubygems.org

# 使用rvm ruby环境，默认安装到
# ～/.rvm/gems/ruby-2.6.8 下
gem install xxx

# 查看已经安装的依赖包
gem list

# 卸载依赖包
gem uninstall xxx

bundle install
```

## Bundler

- https://bundled.io

```shell
bundle init
bundle install
```

## rbenv

```shell
rbenv install 3.2.2
rbenv global 3.2.2
rbenv local 3.2.2
```
