/**
 * Otimiza as fotos das guitarras antes do commit, para manter o repositório leve.
 *
 * Uso: npm run fotos
 *
 * Percorre src/content/guitarras/** e, para cada .jpg/.jpeg com mais de
 * 2000px de largura/altura ou mais de 1.5 MB, redimensiona para o máximo de
 * 2000px e recomprime, substituindo o ficheiro original.
 *
 * Os .png NUNCA são tocados: são fotos recortadas de propósito (fundo
 * transparente, alta resolução) — o site mostra-as inteiras sobre o castanho
 * escuro e gera variantes webp otimizadas no build.
 */
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const RAIZ = path.resolve('src/content/guitarras');
const LADO_MAXIMO = 2000;
const TAMANHO_MAXIMO = 1.5 * 1024 * 1024; // 1.5 MB
const EXTENSOES = new Set(['.jpg', '.jpeg']);

async function* percorrer(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const caminho = path.join(dir, item.name);
    if (item.isDirectory()) yield* percorrer(caminho);
    else yield caminho;
  }
}

function formatar(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

let processadas = 0;
let poupanca = 0;

for await (const ficheiro of percorrer(RAIZ)) {
  const ext = path.extname(ficheiro).toLowerCase();
  if (!EXTENSOES.has(ext)) continue;

  const info = await stat(ficheiro);
  const meta = await sharp(ficheiro).metadata();
  const lado = Math.max(meta.width ?? 0, meta.height ?? 0);

  if (lado <= LADO_MAXIMO && info.size <= TAMANHO_MAXIMO) continue;

  const temporario = `${ficheiro}.tmp${ext}`;
  const pipeline = sharp(ficheiro).rotate().resize({
    width: LADO_MAXIMO,
    height: LADO_MAXIMO,
    fit: 'inside',
    withoutEnlargement: true,
  });

  await pipeline.jpeg({ quality: 84, mozjpeg: true }).toFile(temporario);

  const novo = await stat(temporario);
  if (novo.size < info.size) {
    await unlink(ficheiro);
    await rename(temporario, ficheiro);
    poupanca += info.size - novo.size;
    processadas++;
    console.log(
      `✓ ${path.relative(RAIZ, ficheiro)}: ${formatar(info.size)} → ${formatar(novo.size)}`
    );
  } else {
    await unlink(temporario);
  }
}

console.log(
  processadas === 0
    ? 'Nada a otimizar — todas as fotos estão dentro dos limites.'
    : `\n${processadas} foto(s) otimizada(s), ${formatar(poupanca)} poupados.`
);
