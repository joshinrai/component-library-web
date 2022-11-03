import { defineConfig } from 'dumi';

let base: any = '/component-library-web';
let publicPath: any = '/component-library-web/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

/* export default {
  title: 'component-library-web',
  history: { type: 'hash' },
  favicon: './marioBro.ico',
  logo: './marioBro.ico',
  resolve: {
    includes: ['example'],
  },
  publicPath: './',
  outputPath: 'docs',
}; */
export default defineConfig({
    title: 'component-library-web',
    history: { type: 'hash' },
    favicon: './marioBro.ico',
    logo: './marioBro.ico',
    resolve: {
      includes: ['example', 'src'],
    },
    publicPath: './',
    outputPath: 'docs',
    mode: 'site',
    // outputPath: 'doc-site',
    exportStatic: {},
    dynamicImport: {},
    webpack5: {},
    mfsu: {},
    base,
    // publicPath,
  });
