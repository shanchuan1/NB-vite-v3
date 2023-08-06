import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
// import viteCompression from "vite-plugin-compression";
// import importToCDN from "vite-plugin-cdn-import";
// import viteImagemin from "vite-plugin-imagemin"; //图片压缩

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // 将根路径换成相对路径
  plugins: [
    vue(),
    /* 打包分析资源 */
    // visualizer({
    //   emitFile: false,
    //   file: "states.html",
    //   open: true,
    // }),
    //开启gzip
    // viteCompression({
    //   //生成压缩包gz
    //   verbose: true,
    //   disable: false,
    //   threshold: 10240,
    //   algorithm: "gzip",
    //   ext: ".gz",
    // }),
    // importToCDN({
    //   modules: [
    //     {
    //       name: "vue",
    //       var: "Vue",
    //       path: "https://unpkg.com/vue@next",
    //     },
    //     // {
    //     //   name: "element-plus",
    //     //   var: 'ElementPlus',
    //     //   path: "https://unpkg.com/element-plus",
    //     //   css: "https://unpkg.com/element-plus/dist/index.css"
    //     // }
    //   ],
    // }),
    //图片压缩
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,
    //     interlaced: false,
    //   },
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   mozjpeg: {
    //     quality: 20,
    //   },
    //   pngquant: {
    //     quality: [0.8, 0.9],
    //     speed: 4,
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: "removeViewBox",
    //       },
    //       {
    //         name: "removeEmptyAttrs",
    //         active: false,
    //       },
    //     ],
    //   },
    // }),
  ],
  server: {
    // port: 8080,
    https: false,
    proxy: {
      "/api": {
        target: "http://backend-api-01.newbee.ltd/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 设置别名
    },
  },
  build: {
    //移除生产环境log
    // minify: "terser",
    // terserOptions: {
    //   compress: {
    //     //生产环境时移除console
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // },
    // //rollup打包后的静态资源名称格式
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: 'static/js/[name]-[hash].js',
    //     entryFileNames: 'static/js/[name]-[hash].js',
    //     assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
    //   },
    // }
    /* 如果不同模块使用的插件基本相同那就尽可能打包在同一个文件中，减少http请求，
    如果不同模块使用不同插件明显，那就分成不同模块打包。这是一个矛盾体 */
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes("node_modules")) {
    //         // 让每个插件都打包成独立的文件
    //         return id .toString() .split("node_modules/")[1] .split("/")[0] .toString(); 
    //       }
    //     }
    //   }
    // }
    
  },
  //移除生产环境log
  esbuild: {
    drop: ['console', 'debugger'] 
  }
});
