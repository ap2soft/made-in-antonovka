// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.bunny.net',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.bunny.net/css?family=nunito:400,400i,600,600i,800,800i',
                },
            ],
            bodyAttrs: {
                class: 'bg-white',
            },
        },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [],
})
