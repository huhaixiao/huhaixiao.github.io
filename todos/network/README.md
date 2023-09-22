- ISP
    1. Internet Service Provider
- 路由器
    1. 路由器（Router）是连接两个或多个网络的[硬件](https://baike.baidu.com/item/%E7%A1%AC%E4%BB%B6/479446)设备
- 网关

502 Bad Gateway

网关：

1. 网间连接器
2. 协议转换器
3. 用于广域网互联
4. 用于局域网互联

- monorepo
    - a software development strategy where code for many projects is stored in the same repository
- bios

HTTP access control (CORS)
Cross-Origin Resource Sharing

- http name case-insensitive.
- http name followed by a colon(`:`), then by its value.
- Whitespace before the value is ignored.

# General Header

# Request Header

- `Host`
    
    
- `User-Agent`
    
    

# Response Header

[RFC 6648 - Deprecating the "X-" Prefix and Similar Constructs in Application Protocols](https://datatracker.ietf.org/doc/html/rfc6648)

RFC6648 - Deprecating the “X-” Prefix and Similar Constructs in Application Protocols

# 百科

- Entity header
    
    [Entity header - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Entity_header)
    
    - An entity header describes the payload of an HTTP message.
    - include:
        - `Content-Length`
        - `Content-Language`
        - `Content-Encoding`
        - `Content-Type`
        - `Expires`
    - Entity header may be present in both HTTP request and response messages.
- Representation header
    
    [Representation header - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header)
    
- Content negotiation
    
    [Content negotiation - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
    

Best Current Practice (BCP)

Request for Comments (RFC)

Internet Engineering Task Force (IETF)

consesus

# Same-origin policy

[Same-origin policy - Web security | MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

Definition of an origin

scheme/host/port tuple

- Intranet 内部网
- comparison with `http://store.company.com/dir/page.html`
    
    
    | URL | Outcome | Reason |
    | --- | --- | --- |
    | http://store.company.com/dir2/other.html | Same origin | Only path differs |
    | http://store.company.com/dir/inner/another.html | Same origin | Only path differs |
    | https://store.company.com/page.html | Failure | Different protocol |
    | https://store.company.com:81/dir/page.html | Failure | Different port |
    | http://news.company.com/dir/page.html | Failure | Different host |
