// @ts-check
import { defineConfig } from 'astro/config';

// Situs statis murni: bisa langsung di-deploy ke Vercel, Netlify, atau Cloudflare Pages.
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});
