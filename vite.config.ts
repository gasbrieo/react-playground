/// <reference types="vitest/config" />

import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    viteTsconfigPaths(),
    visualizer({
      filename: 'dist/stats.html',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/testing/setupTests.ts',
    coverage: {
      reporter: ['lcov', 'html'],
      include: ['src'],
      exclude: ['src/main.tsx', 'src/testing'],
    },
  },
});
