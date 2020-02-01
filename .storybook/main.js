module.exports = {
  stories: ['../src/**/*.stories.js'],
  loaders: [require.resolve('@storybook/source-loader')],
enforce: 'pre',
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
  ],
};
