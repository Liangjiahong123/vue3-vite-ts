import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacyPlugin from "@vitejs/plugin-legacy";
import { createHtmlPlugin } from "vite-plugin-html";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  mode: mode,
  brotliSize: false,
  publicDir: "src/assets",
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
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: ['@import "./src/styles/transition.less";']
      }
    }
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    assetsInlineLimit: 1024,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
    minify: "terser",
    terserOptions: {
      compress: {
        pure_funcs: ["console.log"],
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetsInfo) => {
          const info = assetsInfo.name!.split(".");
          let extType = info[info.length - 1];
          if (/.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetsInfo.name!)) {
            extType = "img";
          }
          return `${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("tinymce")) return "tinymce_vendor";
            if (id.includes("echarts")) return "echarts_vendor";
            if (id.includes("@logicflow")) return "@logicflow_vendor";
            if (id.includes("lodash")) return "lodash_vendor";
            if (id.includes("element-plus")) return "element-plus_vendor";
            if (id.includes("brace")) return "brace_vendor";
            return "vendor";
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@img": fileURLToPath(new URL("./src/assets/img", import.meta.url)),
      "#": fileURLToPath(new URL("./types", import.meta.url))
    }
  }
}));
