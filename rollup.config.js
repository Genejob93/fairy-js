import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
    input: 'src/index.ts', // 打包入口a
    output: [
        // UMD
        {
            file: `dist/${pkg.name}.min.js`,
            format: 'umd',
            name: "fairyJS", // 全局的变量名
            esModule: false,
            exports: "named",
            sourcemap: true,
        },
        // ESM AND CJS
        {
            dir: "dist/esm",
            format: 'esm',
            exports: "named",
            sourcemap: true,
        },
        // ESM AND CJS
        {
            dir: "dist/cjs",
            format: 'cjs',
            exports: "named",
            sourcemap: true,
        },
    ],
    // output: { // 打包出口
    //   name: "fairyjs",
    //   file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
    //   format: 'cjs', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    // },
    plugins: [ // 打包插件
        resolve(), // 查找和打包node_modules中的第三方模块
        commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
        babel({
            exclude: "node_modules",
        }),
        typescript(), // 解析TypeScript
    ],
};