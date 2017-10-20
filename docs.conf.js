var path = require('path')

module.exports = {
    port: 9999,
    webpack: {
        resolve: {
            alias: {
                'vt-icon': path.join(__dirname, 'dist')
            }
        }
    },
    md: { dir: './' },
    vue: { dir: './docs' }
}