const {resolve} = require('path')
const {  } = require("@craco/craco");

module.exports = {
    webpack: {
        alias:{
            'amis$': resolve('src/alias/amis.js'),
            'amis-ui$': resolve('src/alias/amis-ui.js'),
            'amis-core$': resolve('src/alias/amis-core.js'),
        },
        /** @typedef {import('webpack').Configuration} */
        configure: {
            resolve: {
                conditionNames: ['require', 'node']
            }
        },
    }
};