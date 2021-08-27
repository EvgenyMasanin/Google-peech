// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',
              '@disabled-color': '#777',
              '@border-color-base': '#777',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
