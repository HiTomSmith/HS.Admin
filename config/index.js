'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
// const serverUrl="http://user.djiplant.com";
const serverUrl="http://user.djiplant.com";
module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api-a':{//此处并非一定和url一致。
        target: serverUrl + '',
        changeOrigin:true,//允许跨域
        pathRewrite:{
          '^/api-a': ''
        }
      },
      '/api-u':{//此处并非一定和url一致。
        target: serverUrl + '/api-u',
        changeOrigin:true,//允许跨域
        pathRewrite:{
          '^/api-u': ''
        }
      },
      '/api-b':{//此处并非一定和url一致。
        target:serverUrl + '/api-b',
        changeOrigin:true,//允许跨域
        pathRewrite:{
          '^/api-b': ''
        }
      },
      '/api-o':{//此处并非一定和url一致。
        target:serverUrl + '/api-o',
        changeOrigin:true,//允许跨域
        pathRewrite:{
          '^/api-o': ''
        }
      },
      '/api-d': {//此处并非一定和url一致。
        target: serverUrl + '/api-d',
        changeOrigin: true,//允许跨域
        pathRewrite: {
          '^/api-d': ''
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8090, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}