const fs = require('fs');
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 5600,
    server: {
      type: 'https',
      options: {
        key: fs.readFileSync('./certs/cert.key'),
        cert: fs.readFileSync('./certs/cert.crt'),
        ca: fs.readFileSync('./certs/ca.crt'),
      },
    },
  },
  pwa: {
    name: 'frontend_ifood', // Nome da sua PWA
    short_name: 'ifood', // Nome curto
    themeColor: '#ffffff', // Cor do tema
    msTileColor: '#ffffff', // Cor da tile no Windows
    startUrl: '/', // URL inicial
    display: 'standalone', // Modo de exibição
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
