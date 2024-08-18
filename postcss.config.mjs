import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import purgecss from '@fullhuman/postcss-purgecss'

export default {
  plugins: [
    postcssImport,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecss({
            content: [
              './src/**/*.{html,js,vue}' // Adjust paths as needed
            ],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
          })
        ]
      : [])
  ]
}
