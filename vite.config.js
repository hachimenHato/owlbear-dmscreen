import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // 核心：这里填你的GitHub仓库名，和实际完全一致（大小写敏感）
  base: '/',
  // 下面的原有配置（plugins等）保持不变
  server: {
    cors: {
      origin: "https://www.owlbear.rodeo",
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  preview: {
    cors: {
      origin: "https://www.owlbear.rodeo",
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
});