import * as fs from 'fs';
import { CLASS_KEY } from './provider';
export function load(offsetDir:string) {
  const baseDir = `..`;
  const container = require(`./container`).Container.getInstance();
  const list = fs.readdirSync(offsetDir);
  for (const file of list) {
    if (/\.ts$/.test(file)) { // 扫描 ts 文件
      const exports = require(offsetDir + '/' + file);
      for (const m in exports) {
        const module = exports[m];
        if (typeof module === 'function') {
          const metadata = Reflect.getMetadata(CLASS_KEY, module);
          // 注册实例
          if (metadata) {
            container.register(
                metadata.id,
                module,
                metadata.args || []
            )
          }
        }
      }
    }
  }
}