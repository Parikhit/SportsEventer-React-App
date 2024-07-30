import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/', // Ensure this is set to '/' if your site is hosted at the root of your domain
    build: {
        outDir: 'dist',
    },
});
