const {resolve} = require('path')
// const {  } = require("@craco/craco");

module.exports = {
    webpack: {
        /** @typedef {import('webpack').Configuration} */
        configure: {
            resolve: {
                conditionNames: ['require', 'node']
            }
        },
    }
};