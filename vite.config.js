import {resolve} from 'node:path';
export default {base:'./',build:{rollupOptions:{input:Object.fromEntries(['index','collection','gallery','materials','studio','brief','dashboard'].map(p=>[p,resolve(import.meta.dirname,p+'.html')]))}}};
