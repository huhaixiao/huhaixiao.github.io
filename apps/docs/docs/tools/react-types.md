# React Types

```ts
import { useState } from 'react'

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
```

```ts
import type { FC, VFC } from 'react'

type PropsWithChildren<P> = P & { children?: ReactNode };

interface FunctionComponent<P = {}> {
   (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
   propTypes?: WeakValidationMap<P>;
   contextTypes?: ValidationMap<any>;
   defaultProps?: Partial<P>;
   displayName?: string;
}

interface VoidFunctionComponent<P = {}> {
   (props: P, context?: any): ReactElement<any, any> | null;
   propTypes?: WeakValidationMap<P>;
   contextTypes?: ValidationMap<any>;
   defaultProps?: Partial<P>;
   displayName?: string;
}

type FC<P = {}> = FunctionComponent<P>;
type VFC<P = {}> = VoidFunctionComponent<P>;
```

```ts
import type { DOMAttributes } from 'react'

export type PropsWithOnClick<P, T> = P & Pick<DOMAttributes<T>, 'onClick'>;
```
