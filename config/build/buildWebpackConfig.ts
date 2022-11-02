import { Configuration } from 'webpack';
import { buildDevServer } from './buildDevServer'

import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

// const bundleName = 'mda-kek-lol-jiza';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev} = options;

  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      // chunkFilename: '[name].bundle.js?h=[chunkhash]',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
