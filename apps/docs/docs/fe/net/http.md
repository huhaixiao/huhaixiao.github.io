# HTTP有哪些方法？
- HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法
- HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT

# GET和POST有什么区别？
- 数据传输方式不同：GET请求通过URL传输数据，而POST的数据通过请求体传输。
- 安全性不同：POST的数据因为在请求主体内，所以有一定的安全性保证，而GET的数据在URL中，通过历史记录，缓存很容易查到数据信息。
- 数据类型不同：GET只允许 ASCII 字符，而POST无限制
- GET无害： 刷新、后退等浏览器操作GET请求是无害的，POST可能重复提交表单
- 特性不同：GET是安全（这里的安全是指只读特性，就是使用这个方法不会引起服务器状态变化）且幂等（幂等的概念是指同一个请求方法执行多次和仅执行一次的效果完全相同），而POST是非安全非幂等

# PUT和POST都是给服务器发送新增资源，有什么区别？
- PUT 和POST方法的区别是,PUT方法是幂等的：连续调用一次或者多次的效果相同（无副作用），而POST方法是非幂等的。
- 除此之外还有一个区别，通常情况下，PUT的URI指向是具体单一资源，而POST可以指向资源集合。

> 举个例子，我们在开发一个博客系统，当我们要创建一篇文章的时候往往用POST https://www.jianshu.com/articles，这个请求的语义是，在articles的资源集合下创建一篇新的文章，如果我们多次提交这个请求会创建多个文章，这是非幂等的。

而PUT https://www.jianshu.com/articles/820357430的语义是更新对应文章下的资源（比如修改作者名称等），这个URI指向的就是单一资源，而且是幂等的，比如你把『刘德华』修改成『蔡徐坤』，提交多少次都是修改成『蔡徐坤』

> ps: 『POST表示创建资源，PUT表示更新资源』这种说法是错误的，两个都能创建资源，根本区别就在于幂等性

# HTTP缓存

- 强缓存
- 协商缓存
- Cache-Control
- max-age
- no-cache
- no-store

网站的缓存设置一般是这样的：**入口设置 no-cache 其他资源设置 max-age，这样入口文件会缓存但是每次都协商，保证能及时更新，而其他资源不发请求，减轻服务端压力。**

memory cache 和 disk cache 不用做啥区分，只是刚开始是存在内存里的，关闭浏览器再打开就变成从磁盘加载的了。

入口 html 文件是绝对不能强缓存的，不然就更新不了了。

而强制刷新的实现原理就是设置了 Cache-Control 为 no-cache，这个行为被 Chrome DevTools 隐藏了，用 Charles 抓包就能看到。

还有个清空缓存并强制刷新的功能，那个是清掉本地的缓存再去协商，能保证一定是拿到最新的资源。

Hypertext Transfer Protocol

# Response headers

- `Access-Control-Allow-Credentials`
    - When a request's credentials mode is include, browsers will only expose the response to frontend JavaScript code if the `Access-Control-Allow-Credentials` value is `true`
    - Credentials are cookies, authorization headers or TLS client certificates.
    - `Access-Control-Allow-Credentials: true`
- `Access-Control-Allow-Origin`
    - indicates whether the response can be shared with requesting code from the given origin.
    - `Access-Control-Allow-Origin: *`
        - without credentials
    - `Access-Control-Allow-Origin: https://developer.mozilla.org:8088`
        - Only a single origin can be specified
    - 对于一个request，response已经返回了，但是header不合法的话，浏览器不会把response吐出来
- `Access-Control-Expose-Headers`
- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
    - 403 Forbidden
    - 404 Not Found
    - 502 Bad Gateway

# 安全攻击有哪些

# ARP攻击

# 对称加密和非对称加密的区别，非对称加密有哪些

# AES过程

# RSA和AES算法有什么区别

# DDoS有哪些，如何防范

# HTTP1.1: Method Definitions

[HTTP/1.1: Method Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)

- Safe Methods: GET, HEAD. It is not possible to ensure that the server does not generate side-effects, some dynamic resources consider that a feature.
- Idempotent Methods: GET, HEAD, PUT, DELETE, OPTIONS, TRACE.

LeetCode VIP 网络 TODO

[CORS](https://www.notion.so/CORS-c8d9910bc90245f588e040e03aa48e19)

[https://developer.mozilla.org/en-US/docs/Web/Security](https://developer.mozilla.org/en-US/docs/Web/Security)

- URL - `protocol//host:port/path`
- [https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP)
- [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

# RequestHeaders
- `Accept:*/*` - `<MIME_type>/<MIME_subtype>`
- `Accept-*`

# Same-origin policy

## Definition of an origin

--- 

Two URLs have the same origin if the protocol, port (if specified), and host are the same for both.

---

[compare - http://store.company.com/dir/page.html](https://www.notion.so/283fc3c688594ff3ac00fe4286c22cf4)
|Url|Outcome|Reason|
|:-:|:-:|:-:|
|http://store.company.com/dir2/other.html|Same origin|Only the path differs|
|http://store.company.com/dir/inner/another.html|Same origin|Only the path differs|
|https://store.company.com/page.html|Failure|Different protocol|
|http://store.company.com:81/dir/page.html|Failure|Different port|
|http://news.company.com/dir/page.html|Failure|Different host|

# Cross-Origin Resource Sharing

- CORS的本质让服务器通过新增响应头`Access-Control-Allow-Origin`
- `Access-Control-Allow-Credentials` 来控制是否允许Cookie的提交
- Response Headers 中的 `Access-Control-Allow-Credentials: true`的时候`Access-Control-Allow-Origin`不能为"*"通配符
- 简单跨域请求不会做发送`OPTIONS`
- Provisional headers are shown??

# XMLHttpRequest

[https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

[https://segmentfault.com/a/1190000014343759](https://segmentfault.com/a/1190000014343759)
