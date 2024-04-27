const fs = require('fs');
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0',
    port: process.env.$PORT || 8080,
    allowedHosts: [
      'localhost',
      'frontendhifood-production.up.railway.app'
    ],
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws'
    }
  },
  pwa: {
    name: 'frontend_ifood',
    short_name: 'ifood', 
    themeColor: '#ffffff', 
    msTileColor: '#ffffff', 
    startUrl: '/', 
    display: 'standalone', 
    icons: [
      {
        src: './public/img/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: './public/img/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
});
