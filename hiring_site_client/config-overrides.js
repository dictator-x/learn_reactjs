const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', { libraryName: 'antd', libraryDirectory: 'es', sytle: 'css' }),
  addLessLoader({
    modifyVars: {
      "@brand-primary": "#1CAE82",
      "@brand-primary-tap": "#1DA57A"
    }
  })
)
