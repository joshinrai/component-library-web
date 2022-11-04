<!--
 * @Author: joshinrai joshinrai@163.com
 * @Date: 2022-11-03 19:30:43
 * @LastEditors: joshinrai joshinrai@163.com
 * @LastEditTime: 2022-11-04 17:13:02
 * @FilePath: /component-library-web/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
🚆 本地预览

**[文档地址](https://joshinrai.github.io/component-library-web)**

```bash
git clone http://github.com/joshinrai/component-library-web.git
cd component-library-web
yarn
yarn start
```

按顺序执行完命令后，即可在 localhost:3000 端口看到以下内容：

## 概览

本系列文章主要包含以下内容：

- 项目初始化: 组件库前期开发准备工作。`eslint`/`commit lint`/`typescript`等等；
- 开发阶段: 使用 [dumi](https://d.umijs.org/zh-CN) 进行开发调试以及文档编写；
- 打包阶段: 输出~~`umd`~~/`cjs`/`esm`产物并支持按需加载；
- 组件测试: 使用`@testing-library/react`及其相关生态进行组件测试；
- 发布 npm: 编写脚本完成发布或直接使用 [np](https://www.npmjs.com/package/np) 发布；
