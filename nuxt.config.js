export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portalverse',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap-reboot.min.css',
    'bootstrap/dist/css/bootstrap-grid.min.css',
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-rfg-icon',
    '@nuxtjs/manifest',
    'nuxt-gsap-module',
    [
      'nuxt-social-meta',
      {
        url: 'https://portalverse.net',
        title: 'Portalverse',
        site_name: 'Portalverse',
        description:
          'Portalverse is a decentralized cloud gaming network for open & highly immersive virtual worlds. Enabling players with low threshold computing power to enter the Metaverse.',
        img: '/meta.jpg',
        img_size: { width: '1200', height: '630' },
        locale: 'en_US',
        twitter: '@user',
        twitter_card: '/meta.jpg',
        theme_color: '#d5d7ce',
      },
    ],
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
