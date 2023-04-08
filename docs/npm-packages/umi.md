# Routing

```tsx
// umirc.ts
import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      wrappers: [
        '@/wrappers/auth'
      ],
      routes: [
        {
          path: 'list',
          component: './list'
        },
        {
          path: 'admin',
          component: './admin'
        }
      ],
    },
    {
      path: '/user',
      component: './user',
      exact: true
    }
  ]
})
```

```tsx
// @/layouts/index.tsx
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export default ({ children }: IProps) => {
  return <div>{children}</div>;
};
```

```tsx
// @/wrappers/auth.tsx
import { Redirect } from 'umi'

export default (props) => {
  const { isLogin } = useAuth()
  if (isLogin) {
    return <div>{ props.children } < /div>;
  } else {
    return <Redirect to="/login" />;
  }
}
```

# Plugins

****@umijs/plugin-request****