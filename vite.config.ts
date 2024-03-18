import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacyPlugin from "@vitejs/plugin-legacy";
import { createHtmlPlugin } from "vite-plugin-html";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacyPlugin({ targets: ["defaults", "not IE 11"] }),
    createHtmlPlugin({ minify: true }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: "types/components.d.ts"
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"],
      eslintrc: { enabled: true },
      dts: "types/auto-imports.d.ts"
    })
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@img": fileURLToPath(new URL("./src/assets/img", import.meta.url)),
      "#": fileURLToPath(new URL("./types", import.meta.url))
    }
  }
});
