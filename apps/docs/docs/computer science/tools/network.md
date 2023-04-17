---
title: 网络
date: 2021-02-24 18:27:08
tags: cs
---

# URL构成

`http://www.xxx.com/index.html?name=xxx`
协议 + 主机 + 路径 + 参数
Protocol + Host + Path + Query String

# OSI七层模型

1. 应用层
2. 表示层
3. 会话层
4. 传输层
5. 网络层
6. 数据链路层
7. 物理层

# TCP/IP四层模型

1. 应用层
2. 传输层
3. 网络层
4. 数据链路层

# HTTP头字段

## 通用头

- `Connection: keep-alive`
   1. HTTP长连接, 通过重用一个TCP连接来发送/接收多个HTTP请求, 来减少创建/关闭多个TCP连接的开销
   2. 服务端在返回response后不关闭TCP连接
   3. 客户端接收response后也不关闭
   4. HTTP/1.0 中请求头包含 `Connection: keep-alive` 代表开启
   5. HTTP/1.1 中默认开启除非 `Connection: close` 来关闭
   6. 服务器可以设置长连接的超时时间

## 请求头

1. `Accept`
2. `Accept-Encoding`
3. `Authorization`
4. `Host`
5. `If-XXX`
6. `Max-Forawrds`
7. `Referer`
8. `User-Agent`

## 响应头

1. `Age`
2. `Location`

## 实体头

# HTTP状态码

- 1XX - 请求正在处理
- 2XX - 成功-请求被成功处理完毕
  - 200 - OK - 请求成功, 响应头或数据体跟随此响应返回
  - 201 - Created
  - 202 - Accepted
- 3XX - 重定向-要完成的请求需要进行附加操作
  - 301 - Moved Permanently
  - 302 - Found
  - 304 - Not Modified
- 4XX - 客户端错误
  - 403 - Forbidden
  - 404 - Not Found
  - 405 - Method Not Allowed
- 5XX - 服务器端错误
  - 500 - 内部错误
  - 504 - Gateway Timeout
  - 505 - HTTP version not supported

# axios
```
npm i axios
```


