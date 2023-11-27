# Nuxt - Code de conduite
## Installation
Voir [documentation officielle](https://nuxt.com/docs/getting-started/installation).
```bash
# Installation du projet
npx nuxi@latest init [NOM_DU_PROJET]

#❯ Which package manager would you like to use?
#○ npm
#○ pnpm
#● yarn
#○ bun

#▹▹▹▹▹ Installation in progress... ☕

yarn add -D @nuxt/eslint-config eslint
```

## Configuration
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  pages: true,
  srcDir: 'src',
  debug: !!process.env.DEBUG,
  devtools: {
    enabled: process.env.NODE_ENV === 'development',
    timeline: {
      enabled: true,
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  //...
})
