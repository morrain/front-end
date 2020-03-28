const presets = [
  [
    '@babel/env',
    {
      debug: true,
      targets: {}
    }
  ]
]
const plugins = [
  '@babel/plugin-proposal-class-properties',
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: 3
    }
  ]
]

module.exports = { presets, plugins }
