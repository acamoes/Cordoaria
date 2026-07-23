import type { CollectionEntry } from 'astro:content';

/** Prefixa um caminho interno com a base do site (ex.: /Cordoaria no GitHub Pages). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Ordena guitarras: `ordem` manual primeiro; depois ano de aquisição desc; depois nome. */
export function ordenarGuitarras(guitarras: CollectionEntry<'guitarras'>[]) {
  return [...guitarras].sort((a, b) => {
    const oa = a.data.ordem ?? Number.POSITIVE_INFINITY;
    const ob = b.data.ordem ?? Number.POSITIVE_INFINITY;
    if (oa !== ob) return oa - ob;
    if (a.data.anoAquisicao !== b.data.anoAquisicao) {
      return b.data.anoAquisicao - a.data.anoAquisicao;
    }
    return a.data.nome.localeCompare(b.data.nome, 'pt');
  });
}

/** Rótulos de apresentação para os tipos de guitarra. */
export const TIPO_LABEL: Record<string, string> = {
  'elétrica': 'Elétrica',
  'acústica': 'Acústica',
  'clássica': 'Clássica',
  'baixo': 'Baixo',
  'outra': 'Outra',
};
