const presets = [
  [
    '@babel/env',
    {
      debug: true,
      targets: {
        chrome: '58'
      }
    }
  ]
]
const plugins = ['@babel/plugin-proposal-class-properties']

module.exports = { presets, plugins }
