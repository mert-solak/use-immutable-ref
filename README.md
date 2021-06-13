## Use Immutable Ref

It sets the element in immutable way.

![npm](https://img.shields.io/npm/v/@mertsolak/use-immutable-ref)
![license](https://img.shields.io/npm/l/@mertsolak/use-immutable-ref)
![size](https://img.shields.io/bundlephobia/min/@mertsolak/use-immutable-ref)
![issue](https://img.shields.io/github/issues/mert-solak/use-immutable-ref)

## Installation

Use node package manager to install @mertsolak/use-immutable-ref.

```bash
npm i @mertsolak/use-immutable-ref
```

## Usage

```typescript
import { useImmutableRef } from '@mertsolak/use-immutable-ref';

const App = () => {
  const [element, setRef] = useImmutableRef<HTMLDivElement>();

  return <div ref={setRef} />;
};

export default App;
```
