import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {

  // если не юзаем ts - нужен babel-loader
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const sassLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      // 'style-loader', // create style node from js strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader', // translates css into CommonJS
        options: {
          modules: {
            auto: /\.module\.s[ac]ss$/i,
            localIdentName: isDev ? '[path][name]_[local]-[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],

  };

  return [
    typescriptLoader,
    sassLoader,
  ];
}
