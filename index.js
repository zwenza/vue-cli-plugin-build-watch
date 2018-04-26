const { log } = require('@vue/cli-shared-utils')

module.exports = (api) => {
    api.registerCommand('build-watch', (...args) => {
        log('Starting webpack in watch mode...');
        api.configureWebpack(webpackConfig => {
            webpackConfig.watch = true
        });

        api.service.run('build', ...args);
    });
};