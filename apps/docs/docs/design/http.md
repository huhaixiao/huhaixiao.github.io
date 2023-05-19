# Http
> 应用层协议

[Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
> Session management

## Session
> 服务端通过散列表查找session id维护与客户端的绘画, sessionId可以是在cookie中

## Response header

```
Set-Cookie: yummy=choco;Domain=aixuexi.com;Expires=Wed, 30-Dec-2020 06:36:27 GMT;
Set-Cookie: tasty=strawberry;Path=/;HttpOnly;SameSite=None;Secure;
```

## Request header

```
Cookie: yummy=choco; tasty=strawberry
```

## document.cookie

```javascript
// set cookie
document.cookie = 'name=value'
// get cookie
document.cookie
```

## [NodeJS `Set-Cookie`](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_response_setheader_name_value)

```javascript
response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript'])
```

## 属性
> Chrome控制台查看 - Application/Storage/Cookies

- `HttpOnly` - JS无法访问
- `Secure` - 非https无法放在header中

## 存储对比

- `localStorage`
- `sessionStorage`
- `IndexDB`

## High cohesion and low coupling

- https://docs.microsoft.com/en-us/archive/msdn-magazine/2008/october/patterns-in-practice-cohesion-and-coupling
- https://stackoverflow.com/questions/39946/coupling-and-cohesion
- https://www.codemag.com/article/1001061

## methods

- `GET`
- `POST`
- `OPTIONS`
- `PUT`
- `HEAD`
- `DELETE`
- `TRACE`
- `CONNECT`

## request-line
请求行

```
请求方法 统一资源标志符 HTTP协议版本
GET /562f25980001b1b106000338.jpg HTTP/1.1
```
