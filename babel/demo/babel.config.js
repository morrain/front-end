const presets = [
  [
    '@babel/env',
    {
      debug: true,
      useBuiltIns: 'usage',
      corejs: 3,
      targets: {}
    }
  ]
]
const plugins = ['@babel/plugin-proposal-class-properties']

module.exports = { presets, plugins }
