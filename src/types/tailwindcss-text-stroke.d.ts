import type { PluginsConfig } from "tailwindcss/types/config";

declare module "@designbycode/tailwindcss-text-stroke" {
  const plugin: PluginsConfig[number];
  export default plugin;
}
