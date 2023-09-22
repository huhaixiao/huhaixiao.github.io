# styled-components

```tsx
const CardContainer = styled.div<{ isFloat?: boolean }>`
  position: ${(props) => (props.isFloat ? 'fixed' : 'absolute')};
  bottom: ${(props) => (props.isFloat ? '46px' : '0')};
  left: 0;
  width: 100%;
  height: 80px;
`;
```

```json
{
  "resolutions": {
    "styled-components": "^5"
  }
}
```

****[Extending Styles](https://styled-components.com/docs/basics#extending-styles)****

****[Adapting based on props](https://styled-components.com/docs/basics#adapting-based-on-props)****

[Pseudoelements, pseudoselectors, and nesting](https://styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting)

```js
import styled, { css } from 'styled-components'

const publicStyle = css`
 color: red;
`

const StyledComponent = styled.div`
 ${publicStyle}
`
```
