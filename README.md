# is-stackblitz

> Detect if your code is currently running on Stackblitz

```js
import isStackblitz from "is-stackblitz";

// true if ran in Stackblitz, false otherwise
console.log(isStackblitz());

process.env.STACKBLITZ = "1"; // Manually set STACKBLITZ

// true
console.log(isStackblitz());
```
