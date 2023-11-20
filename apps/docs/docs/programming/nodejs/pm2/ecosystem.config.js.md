# ecosystem.config.js

- PM2 的生态系统配置文件是 `ecosystem.config.js`
- PM2 不应该在生产环境执行 ts

```js
module.exports = {  
  apps : [{  
    name: "my-app",  
    script: "./app.js",  
    instances: "max",  
    autorestart: true,  
    watch: false,  
    max_memory_restart: "1G",  
    env: {  
      NODE_ENV: "development",  
      PORT: 3000  
    },  
    env_production: {  
      NODE_ENV: "production",  
      PORT: 8080  
    }  
  }]  
};
```
