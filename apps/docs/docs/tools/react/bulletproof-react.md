# Bulletproof React

## React Component Structure

```tsx
// 1. Imports - Prefer destructuring imports to minimize writen code
import React, { PropsWithChildren, useState, useEffect } from "react";

// 2. Types
type ComponentProps = {
  someProperty: string;
};

// 3. Styles - with @mui use styled API or sx prop of the component
const Wrapper = styled("div")(({ theme }) => ({
  color: theme.palette.white
}));

// 4. Additional variables
const SOME_CONSTANT = "something";

// 5. Component
function Component({ someProperty }: PropsWithChildren<ComponentProps>) {
  // 5.1 Definitions
  const [state, setState] = useState(true);
  const { something } = useSomething();

  // 5.2 Functions
  function handleToggleState() {
    setState(!state);
  }

  // 5.3 Effects
  // ❌
  React.useEffect(() => {
    // ...
  }, []);

  // ✅
  useEffect(() => {
    // ...
  }, []);

  // 5.5 Additional destructures
  const { property } = something;

  return (
    <div>
      {/* Separate elements if not closed on the same line to make the code clearer */}
      {/* ❌ */}
      <div>
        <div>
          <p>Lorem ipsum</p>
          <p>Pellentesque arcu</p>
        </div>
        <p>Lorem ipsum</p>
        <p>Pellentesque arcu</p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
          arcu. Et harum quidem rerum facilis est et expedita distinctio.
        </p>
        <p>Pellentesque arcu</p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
          arcu. Et harum quidem rerum facilis est et expedita distinctio.
        </p>
      </div>

      {/* ✅ */}
      <Wrapper>
        <div>
          <p>Lorem ipsum</p>
          <p>Pellentesque arcu</p>
        </div>

        <p>Lorem ipsum</p>
        <p>Pellentesque arcu</p>
      </Wrapper>

      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Pellentesque arcu. Et harum quidem rerum facilis est et expedita
            distinctio.
          </p>

          <p>Pellentesque arcu</p>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Pellentesque arcu. Et harum quidem rerum facilis est et expedita
            distinctio.
          </p>
        </div>
      </div>
    </div>
  );
}

// 6. Exports
export { Component };
export type { ComponentProps };
```
