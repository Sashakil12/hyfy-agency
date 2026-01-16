import react from '@vitejs/plugin-react'
import { defineConfig, mergeConfig } from 'vitest/config'

import baseConfig from './base'

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: ['@testing-library/jest-dom'],
    },
  })
)
