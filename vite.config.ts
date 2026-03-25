import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import contactHandler from './api/contact.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function apiMockPlugin() {
  return {
    name: 'api-mock',
    configureServer(server: any) {
      server.middlewares.use('/api/contact', async (req: any, res: any, next: any) => {
        if (req.method === 'POST') {
          try {
            await contactHandler(req, res);
          } catch (e: any) {
            console.error(e);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        } else {
          next();
        }
      });
    }
  }
}

export default defineConfig({
  root: __dirname,
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    apiMockPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
      'figma:asset': path.resolve(__dirname, './assets'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp', '**/*.avif'],
})
