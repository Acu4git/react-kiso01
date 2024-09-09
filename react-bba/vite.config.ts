import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(),AutoImport({
    include: [/\.[tj]sx?$/], // .ts, .tsx, .js, .jsx
    imports: ['react'],
    dts: './src/auto-imports.d.ts'
  })]
})
