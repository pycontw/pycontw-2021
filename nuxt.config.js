import axios from 'axios'
const DEFAULT_BASE_URL = 'https://tw.pycon.org/prs'
const DEFAULT_ROUTER_BASE = '/2025/'
const DEFAULT_BUILD_TARGET = 'static'
const DEFAULT_VUE_DEVTOOL = false

export default {
    generate: {
        async routes() {
            const config = {
                headers: {
                    authorization: `Token ${process.env.AUTH_TOKEN}`,
                },
            }
            const talks = await axios
                .get(
                    `${DEFAULT_BASE_URL}/api/events/speeches/?event_types=talk,sponsored`,
                    config,
                )
                .catch((error) => { // eslint-disable-line
                    return { data: [] }
                })
            const tutorials = await axios
                .get(
                    `${DEFAULT_BASE_URL}/api/events/speeches/?event_types=tutorial`,
                    config,
                )
                .catch((error) => { // eslint-disable-line
                    return { data: [] }
                })
            const getAllDetailTalks = async () => {
                const data = await Promise.all(
                    talks.data.map(async (talk) => {
                        return await axios
                            .get(
                                `${DEFAULT_BASE_URL}/api/events/speeches/${talk.event_type}/${talk.id}/`,
                                config,
                            )
                            .then((response) => response.data)
                    }),
                )
                return data
            }
            const getAllDetailTutorials = async () => {
                const data = await Promise.all(
                    tutorials.data.map(async (tutorial) => {
                        return await axios
                            .get(
                                `${DEFAULT_BASE_URL}/api/events/speeches/${tutorial.event_type}/${tutorial.id}/`,
                                config,
                            )
                            .then((response) => response.data)
                    }),
                )
                return data
            }

            const detailTalks = await getAllDetailTalks()
            const detailTutorials = await getAllDetailTutorials()

            const routes = [
                ...detailTalks.map((talk) => ({
                    route: `/conference/${talk.event_type}/${talk.id}`,
                    payload: talk,
                })),
                ...detailTutorials.map((tutorial) => ({
                    route: `/conference/${tutorial.event_type}/${tutorial.id}`,
                    payload: tutorial,
                })),
            ]
            return routes
        },
    },
    vue: {
        config: {
            devtools: process.env.VUE_DEVTOOL || DEFAULT_VUE_DEVTOOL,
        },
    },
    // Target (https://go.nuxtjs.dev/config-target)
    target: process.env.BUILD_TARGET || DEFAULT_BUILD_TARGET,

    // Re-route for GitHub Pages to serve with /assets
    router: {
        base: process.env.ROUTER_BASE || DEFAULT_ROUTER_BASE,
        // scroll behavior config for scroll to hash
        // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router#scrollbehavior
        // https://stackoverflow.com/questions/60952725/anchor-in-nuxt-component-not-working-on-same-page-the-anchor-is-included-on
        async scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = (hash, x = 0) => {
                return (
                    document.querySelector(hash) ||
                    new Promise((resolve) => {
                        if (x > 50) {
                            return resolve(document.querySelector('#app'))
                        }
                        setTimeout(() => {
                            resolve(findEl(hash, ++x || 1))
                        }, 100)
                    })
                )
            }

            if (to.hash) {
                const el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({
                        top: el.offsetTop,
                        behavior: 'smooth',
                    })
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }

            return { x: 0, y: 0 }
        },
    },
    // Global page headers (https://go.nuxtjs.dev/config-head)
    // Move to layout/default.vue due to gtm-module not support head function (https://github.com/nuxt-community/gtm-module/issues/56)
    head: {},

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~/plugins/iterator.js' },
        { src: '~/plugins/http.js' },
        { src: '~/plugins/strings.js' },
        { src: '~/plugins/vue-dompurify.js' },
        { src: '~/plugins/vue-awesome-swiper.js' },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: [{ path: '~/components/', extensions: ['vue'] }],

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        [
            '@nuxtjs/router',
            {
                path: 'configs',
                keepDefaultRouter: true,
            },
        ],
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxt/http',
        // https://github.com/nuxt-community/gtm-module
        '@nuxtjs/gtm',
        // https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module
        'nuxt-facebook-pixel-module',
        // https://i18n.nuxtjs.org/
        '@nuxtjs/i18n',
        [
            'nuxt-fontawesome',
            {
                component: 'fa',
                imports: [
                    {
                        set: '@fortawesome/free-brands-svg-icons',
                        icons: ['fab'],
                    },
                    {
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas'],
                    },
                    {
                        set: '@fortawesome/free-regular-svg-icons',
                        icons: ['far'],
                    },
                ],
            },
        ],
        // https://github.com/nuxt-community/markdownit-module
        '@nuxtjs/markdownit',
        // https://sitemap.nuxtjs.org/
        // This module must be at the end of the modules array
        '@nuxtjs/sitemap',
        // https://github.com/schlunsen/nuxt-leaflet
        'nuxt-leaflet',
    ],
    i18n: {
        strategy: 'prefix',
        locale: 'en-us',
        defaultLocale: 'en-us',
        fallbackLocale: 'en-us',
        locales: ['en-us', 'zh-hant'],
        detectBrowserLanguage: {
            redirectOn: 'root',
        },
    },

    // http module configuration (https://http.nuxtjs.org/options)
    http: {
        baseURL: process.env.BASE_URL || DEFAULT_BASE_URL,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    gtm: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
    },

    facebook: {
        track: 'PageView',
        pixelId: '164677453055289',
        autoPageView: true,
        disabled: false,
    },

    markdownit: {
        runtime: true,
        html: true,
        preset: 'default',
        linkify: true,
        breaks: true,
    },

    sitemap: {
        hostname: 'https://tw.pycon.org/',
        defaults: {
            priority: 1.0, // suggestion: decrease priority before archiving
        },
        gzip: true,
        i18n: true,
        exclude: [
            '**/ext/**', // exclude pages only for attendees
        ],
    },

    publicRuntimeConfig: {
        gtm: {
            id: process.env.GOOGLE_TAG_MANAGER_ID,
        },
    },
}
