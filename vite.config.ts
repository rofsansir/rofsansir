import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    plugins: [react({
        // Disabled React Compiler for now - can be enabled later if needed
        // babel: {
        //     plugins: ['babel-plugin-react-compiler'],
        // },
    }), tailwindcss(), cloudflare()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            // Ensure React uses a single instance
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
});