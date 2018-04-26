module.exports = (api, options, rootOptions) => {
    api.extendPackage({
        scripts: {
            'build-watch': 'vue-cli-service build-watch'
        }
    });
}