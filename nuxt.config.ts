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
            htmlAttrs: {
                class: 'h-full',
            },
            bodyAttrs: {
                class: 'h-full bg-white',
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
    modules: [
        [
            'yandex-metrika-module-nuxt3',
            {
                id: '92270729',
                webvisor: true,
            }
        ]
    ],
    nitro: {
        preset: 'netlify',
    }
})
