import isStackBlitz from "./index";

console.log(isStackBlitz());

process.env.STACKBLITZ = "1";

console.log(isStackBlitz());
