import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru-RU'
            },
        },
    },
    modules: [
        '@nuxt/image-edge',
    ],
    css: ["@/assets/styles/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_variables.scss" as *;',
                },
            },
        },
    },
})
