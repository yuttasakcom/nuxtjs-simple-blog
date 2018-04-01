const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
     ** Headers of the page
     */
  head: {
    title: 'Simple Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css'
      }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.min.js' },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js'
      }
    ]
  },

  /*
     ** Customize the progress-bar color
     */
  loading: { color: '#3B8070' },

  /*
     ** Global CSS
     */
  css: [],

  /*
     ** Plugins to load before mounting the App
     */
  plugins: [
    '~plugins/core-components.js'
  ],

  /*
     ** Nuxt.js modules
     */
  modules: [
    '@nuxtjs/axios'
  ],

  /*
    ** Axios config
    */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    credentials: false
  },

  /*
     ** Build configuration
     */
  build: {
    /*
         ** You can extend webpack config here
         */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
