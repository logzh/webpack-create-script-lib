# webpack-create-script-lib

You developed a library and want to distribute it in compiled/bundled versions (in addition to the modularized version). You want to allow the user to use it in a `<script>`-tag or with a [[amd]] loader (i. e. `require.js`). Or you depend on various precompilations and want to remove the pain for the user and distribute it as simple compiled [[commonjs]] module.

参考：
- Webpack 官方文档 [LIBRARY AND EXTERNALS](http://webpack.github.io/docs/library-and-externals.html)
- Webpack 官方文档 [output-librarytarget](http://webpack.github.io/docs/configuration.html#output-librarytarget)
- [Start your own JavaScript library using webpack and ES6](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6)