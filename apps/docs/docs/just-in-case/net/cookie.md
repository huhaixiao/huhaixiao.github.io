# Cookie

## document.cookie

## Cookie

```http
Cookie: name=value; name2=value; name3=value3;
```

## Set-Cookie

-  Cookies are session cookies by default
-  A cookie for a domain that does not include the server that set it should be rejected by the user agent.

```http
Set-Cookie: name=value; Domain=.github.com;
Set-Cookie: name2=value2; Path=/;
Set-Cookie: name3=value3; Secure;
Set-Cookie: name4=value4: Max-Age=2592000;
Set-Cookie: name5=value5; HttpOnly;
Set-Cookie: name6=value6; SameSite=None;
```

```js
// Node.js
reponse.setHeader('Set-Cookie', ['name=value', 'name2=value2'])
```
