## tauicons

[![npm version](https://img.shields.io/npm/v/tauicons.svg?style=flat-square)](https://www.npmjs.com/package/tauicons)
[![npm downloads](https://img.shields.io/npm/dm/tauicons.svg?style=flat-square)](https://www.npmjs.com/package/tauicons)

### What is tauicons?
`tauicons` is a package that provides essential icons, extended from
[Vercel's design system](https://vercel.com/design/icons). Currently
the base `tauicons` package provides the icons only as react
components. This may or may not change in the future.

### Installation
    pnpm i tauicons

### Usage
```typescript jsx
import { VercelTriangle, Smile } from "tauicons";

const App = () => {
  return (
    <>
      <VercelTriangle />
      <Smile />
    </>
  );
};

export default App;
```

Icons can be configured with inline props:
```typescript jsx
<VercelTriangle color="#79ffe1" size={48} />
```
