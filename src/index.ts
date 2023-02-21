/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export default function isStackBlitz(): boolean {
  return (
    process.env.GIT_PROXY?.includes("stackblitz") ??
    process.env.SHELL?.includes("jsh") ??
    "STACKBLITZ" in process.env
  );
}
