module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)', '../src/components/**/story.mdx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs'
  ],
};
