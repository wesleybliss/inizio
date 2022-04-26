const path = require('path')

const initialAliases = {
    '@': path.resolve(__dirname, '../src'),
}

const aliases = [
    'styles',
    'lib',
    'store',
    'actions',
    'effects',
    'routes',
    'components',
    'constants',
    'assets',
    'workers',
    'messages',
].reduce((acc, it) => ({
    ...acc,
    [`@${it}`]: path.resolve(__dirname, '../src', it),
}), initialAliases)

module.exports = aliases
