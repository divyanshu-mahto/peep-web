import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Other server options you might have (e.g., port, open)
    allowedHosts: [
      'c28d-2409-40e0-3e-3e99-a093-6d0d-eb31-bc75.ngrok-free.app',
    ],
  },
})
