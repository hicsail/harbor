export {};

declare global {
  interface Window {
    // ⚠️ notice that "Window" is capitalized here
    _env_: any;
  }
}
