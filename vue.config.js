const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/nsac2022-frontend/',
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ]
})
