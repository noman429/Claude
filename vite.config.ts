import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves a project repo (not a *.github.io repo) from
// /<repo-name>/ rather than the domain root, so asset/script URLs need that
// prefix only for the Pages deploy — local dev and other build targets stay
// at the root.
export default defineConfig({
  plugins: [react()],
  base: process.env.GH_PAGES === 'true' ? '/Claude/' : '/',
});
