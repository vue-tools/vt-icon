var path = require('path')

module.exports = {
    port: 9999,
    webpack: {
        resolve: {
            alias: {
                'vt-icon': path.join(__dirname, 'src')
            }
        }
    },
    md: { dir: './' },
    vue: { dir: './docs' }
}