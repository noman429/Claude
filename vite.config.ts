import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the custom domain's root (public/CNAME), not a /<repo-name>/
// subpath, so no special base path is needed for the Pages deploy anymore.
export default defineConfig({
  plugins: [react()],
});
