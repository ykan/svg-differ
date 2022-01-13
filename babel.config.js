module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/proposal-object-rest-spread', { loose: true }],
    // '@babel/plugin-transform-runtime',
  ]
}
