import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],

  optimizeDeps: {
    include: ['react-pdf', 'pdfjs-dist'],

    esbuildOptions: {
        define: {
            global: "window",
            "process.env": "{}", // ✅ Fixes process is not defined
        },
        plugins: [
            NodeGlobalsPolyfillPlugin({
                buffer: true,
                process: true,
            }),
        ],
    },
},


resolve: {
    alias: {
      'pdfjs-dist/build/pdf.worker.mjs': 'pdfjs-dist/build/pdf.worker.min.js',

        process: "process/browser", // ✅ Ensures `process` is recognized
        alias: {
          util: "util/", // ✅ Alias `util` module
      },
    },
},
  server: {
    host: '0.0.0.0', // Allow access from other devices on the network
    port: 3000, // You can specify any port, or leave it as default (3000)
    strictPort: true,

    hmr:{
      overlay: false
    }
  },
  
})
