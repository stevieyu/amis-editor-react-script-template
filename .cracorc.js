const {resolve} = require('path')
const { when } = require("@craco/craco");

module.exports = {
    webpack: {
        /** @typedef {import('webpack').Configuration} */
        configure: {
            output:{
                publicPath: when(process.env.npm_lifecycle_event === 'gh', () => '/amis-editor-react-script-template/', '/'),
            },
            resolve: {
                conditionNames: ['require', 'node']
            }
        },
    }
};