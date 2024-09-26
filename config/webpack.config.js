const webpack = require('webpack');
const path = require('path');

// Run with ANALYZE ENV to show bundle size (only works with cjs)
// e.g.: ANALYZE=true npm run build
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { DuplicatesPlugin } = require('inspectpack/plugin');

const NODE_ENV_PRODUCTION = 'production';
const NODE_ENV_DEVELOPMENT = 'development';

const isAnalyze = !!process.env.ANALYZE;
const isProduction = process.env.NODE_ENV === NODE_ENV_PRODUCTION;

module.exports = {
  mode: isProduction ? NODE_ENV_PRODUCTION : NODE_ENV_DEVELOPMENT,
  entry: ['./src/index.ts'],
  output: {
    library: {
      name: 'StacksRpcClient',
      type: isAnalyze ? 'commonjs' : 'umd',
    },
    filename: 'index.js',
    path: path.resolve(process.cwd(), 'dist/umd'),
    globalObject: 'this', // recommended for umd bundles in webpack
  },
  plugins: [
    isAnalyze && new DuplicatesPlugin(),
    isAnalyze && new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ].filter(Boolean),
  optimization: {
    minimize: isProduction,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              target: 'es2017',
              tsconfig: 'tsconfig.build.json',
            },
          },
        ],
      },
    ],
  },
};
