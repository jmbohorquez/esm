const path = require( 'path' )

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [ path.join( __dirname, 'styles' ) ]
    },
    webpack( config ) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    i18n: {
        locales: [ 'es', 'en' ],
        defaultLocale: 'es'
    }
}
