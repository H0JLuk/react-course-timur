import { RuleSetRule } from 'webpack'

export function buildLoaders(): RuleSetRule[] {

  // если не юзаем ts - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    typescriptLoader,
  ];
}
