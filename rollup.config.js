/**
 * Rollup 安装命令：
 * npm install rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript @rollup/plugin-babel @babel/preset-react @babel/preset-typescript @rollup/plugin-terser --save-dev
 * CSS/SCSS 处理插件安装命令：
 * npm install rollup-plugin-postcss --save-dev
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';

export default {
  // 入口文件，指定从哪个文件开始打包
  input: 'src/pages/Log/index.tsx',
  // 输出配置
  output: {
    // 输出文件路径和名称，打包到根目录下的 rollup 文件夹
    file: 'rollup/log.js',
    // 输出格式，umd 格式兼容多种环境（浏览器、Node.js、AMD、CommonJS）
    format: 'umd',
    // UMD 格式下，模块的全局变量名
    name: 'LogComponent',
    // 外部依赖的全局变量映射，告诉 Rollup 'react' 对应全局的 React 变量
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    // 替换插件，用于替换代码中的字符串，这里用来处理 process.env.NODE_ENV
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    // 解析 Node.js 模块
    resolve(),
    // 将 CommonJS 模块转换为 ES6 模块
    commonjs(),
    // 处理 TypeScript 文件
    typescript(),
    // 使用 Babel 进行代码转译，处理 React JSX 和 TypeScript 语法
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    // 处理 CSS/SCSS 文件，并提取到单独的文件
    postcss({
      extract: 'log.css',
      // modules: true,
      use: ['sass']
    }),
    // 压缩输出的 JS 代码
    terser()
  ],
  // 外部依赖，这些模块不会被打包到输出文件中，期望在运行时由外部提供
  external: ['react', 'react-dom']
}; 