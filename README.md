# match.ts

TypeScript match(switch-case) library inspired by Rust.

# How to Use

## Simple

```typescript
import match from 'match.ts';

const status = 'ArrowUp';
match(status, {
  ArrowUp: () => {
    handleUp();
  }, // called!!
  ArrowDown: () => {
    handleDown();
  },
  _: () => console.log(status),
});
```

## With rewrite

```typescript
import match from 'match.ts';

const status = 'KeyJ';
match(
  status,
  {
    UP: () => {
      handleUp();
    },
    DOWN: () => handleDown(), // called!!
    _: () => console.log(status),
  },
  {
    ArrowDown: 'DOWN',
    KeyJ: 'DOWN',
    ArrowUp: 'UP',
    KeyK: 'UP',
  }
);
```
