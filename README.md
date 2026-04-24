# DOS{Ono}

基于 `Astro` 的个人博客站点，当前用于：

- 部署到 `Cloudflare Pages`
- 承载公开博客内容
- 后续对接 `Obsidian` 写作流

## 本地开发

```bash
corepack pnpm install
```

需要先确保本机 Node 版本为 `22.12.0` 或更高。

```bash
pnpm install
pnpm run dev
```

## 构建

```bash
pnpm run build
```

构建产物目录为 `dist/`，并会同时生成 `Pagefind` 搜索索引。

## Cloudflare Pages

- Framework preset: `Astro`
- Build command: `pnpm run build`
- Output directory: `dist`
- Node.js: `22.12.0+`

## 内容目录

- 博客文章：`src/data/blog`
- 图集内容：`src/data/galleries`
- 站点配置：`src/config.ts`

## 当前状态

当前仓库已经完成第一轮初始化：

- 站点标识已切换为 `DOS{Ono}`
- 全站主要界面文案已汉化
- 原模板示例文章已移除
- 已保留一篇默认欢迎文章用于验证构建与部署链路
