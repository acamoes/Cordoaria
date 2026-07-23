# Cordoaria

Galeria web pessoal de guitarras. Site 100% estático (Astro), publicado no
GitHub Pages — os dados vivem como ficheiros neste repositório.

## Comandos

| Comando           | O que faz                                              |
| ----------------- | ------------------------------------------------------ |
| `npm install`     | Instala as dependências                                |
| `npm run dev`     | Servidor local em `http://localhost:4321/Cordoaria/`   |
| `npm run build`   | Build de produção para `dist/`                         |
| `npm run preview` | Pré-visualiza o build de produção                      |
| `npm run fotos`   | Otimiza fotos grandes (reduz para máx. 2000px, ~84%)   |

## Adicionar uma guitarra

Cada guitarra é uma pasta em `src/content/guitarras/<slug>/` com um `index.md`
(campos + descrição) e as fotos (4 obrigatórias + extras opcionais).

**Guia completo com template:** [docs/COMO-ADICIONAR-GUITARRA.md](docs/COMO-ADICIONAR-GUITARRA.md)

O build valida tudo: se faltar uma foto ou um campo obrigatório, falha com uma
mensagem clara em vez de publicar um site quebrado.

## Publicar (primeira vez)

1. Cria um repositório **público** no GitHub chamado `Cordoaria` e faz push:

   ```
   git remote add origin https://github.com/<o-teu-utilizador>/Cordoaria.git
   git push -u origin main
   ```

2. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

3. O workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) corre
   a cada push ao `main`. O site fica em:

   ```
   https://<o-teu-utilizador>.github.io/Cordoaria/
   ```

A partir daí, publicar = `git push`. O `site` e a `base` do Astro são derivados
automaticamente do repositório no CI (ver [astro.config.mjs](astro.config.mjs)):
se deres outro nome ao repositório, funciona na mesma; se um dia usares domínio
próprio, define `site` e `base: '/'` manualmente.

## Estrutura

```
src/
  content/guitarras/<slug>/   ← uma pasta por guitarra (index.md + fotos)
  content.config.ts           ← schema de validação (zod)
  pages/index.astro           ← galeria com filtro por tipo
  pages/guitarras/[slug].astro← página de detalhe (mosaico 4 fotos + lightbox)
  layouts/Base.astro          ← layout "moldura" + animações de entrada
  styles/global.css           ← design system (tokens do PRD)
docs/COMO-ADICIONAR-GUITARRA.md
scripts/fotos.mjs             ← otimizador de fotos
```

## Design

Design system definido em [firstPRD.md](firstPRD.md): paleta vintage quente
(castanho `#342A22` + creme `#F2EFD9`), Bebas Neue para títulos, Inter para
texto, animações de entrada subtis (com respeito por `prefers-reduced-motion`).
