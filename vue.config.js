module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  pwa: {
    name: 'vuExxen',
    iconPaths: {
      favicon16: './favicon16.png',
      favicon32: './favicon32.png'
    },
    short_name: 'vuExxen',
    theme_color: '#feca07'
  }
};
