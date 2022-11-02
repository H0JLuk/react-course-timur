// in case you run into any typescript error when configuring `devServer`
import path from 'path'
import 'webpack-dev-server';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config'

const paths: BuildPaths = {
  build: path.resolve(__dirname, 'dist'),
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

export default (env: BuildEnv) => {
  const mode = env.mode;
  const isDev = mode === 'development';
  const port = +env.PORT || 3000;

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
  
  return config;
};
