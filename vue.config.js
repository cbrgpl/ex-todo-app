const { defineConfig } = require( '@vue/cli-service' )
const path = require( 'path' )

module.exports = defineConfig( {
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/ex-todo-app/'
    : '/',
  
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@scss/utils/_utils.scss";',
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve( __dirname, 'src' ),

        '@icons': path.resolve( __dirname, 'src', 'assets', 'icons' ),
        '@images': path.resolve( __dirname, 'src', 'assets', 'images' ),
        '@scss': path.resolve( __dirname, 'src', 'assets', 'scss' ),


        '@general_components': path.resolve( __dirname, 'src', 'components', 'general' ),
        '@auth_components': path.resolve( __dirname, 'src', 'components', 'auth' ),
        '@todo_components': path.resolve( __dirname, 'src', 'components', 'todo' ),

        '@enums': path.resolve( __dirname, 'src', 'enums' ),
        '@layouts': path.resolve( __dirname, 'src', 'layouts' ),

        '@errors': path.resolve( __dirname, 'src', 'utils', 'errors' ),
        '@functions': path.resolve( __dirname, 'src', 'utils', 'functions' ),
        '@mixins': path.resolve( __dirname, 'src', 'utils', 'mixins' ),
        '@modules': path.resolve( __dirname, 'src', 'utils', 'modules' ),
        '@services': path.resolve( __dirname, 'src', 'utils', 'services' ),
        '@validators': path.resolve( __dirname, 'src', 'utils', 'validators' ),

        'js_utils': path.resolve( __dirname, 'src', 'utils', 'js_utils' ),
      }
    }
  }
} )
