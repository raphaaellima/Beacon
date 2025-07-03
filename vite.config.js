import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: './Index.html',
        },
    },
    server: {
        open: '/Index.html',
    },
});
