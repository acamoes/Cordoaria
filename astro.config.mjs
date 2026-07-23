// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Deploy no GitHub Pages:
 * - No GitHub Actions, o `site` e a `base` são derivados automaticamente do repositório
 *   (ex.: repo "camoes82/Cordoaria" → site https://camoes82.github.io, base /Cordoaria).
 * - Localmente usa-se a base '/Cordoaria' para o preview reproduzir o ambiente final.
 * - Se usares um domínio próprio no futuro, define `site` com esse domínio e `base: '/'`.
 */
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'Cordoaria';
const owner = process.env.GITHUB_REPOSITORY_OWNER;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: `/${repo}`,
  trailingSlash: 'ignore',
});
