import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Cada guitarra é uma pasta em src/content/guitarras/<slug>/ com um index.md.
 * Pastas começadas por "_" são ignoradas (rascunhos).
 * O schema abaixo valida os campos e a existência das 4 fotos obrigatórias —
 * se algo faltar, o build falha com uma mensagem a apontar o ficheiro.
 */
const guitarras = defineCollection({
  loader: glob({
    pattern: ['*/index.md', '!_*/**'],
    base: './src/content/guitarras',
    // O id (e o URL) é o nome da pasta: guitarras/<pasta>/
    generateId: ({ entry }) => entry.split('/')[0]!,
  }),
  schema: ({ image }) =>
    z.object({
      nome: z.string().min(1, 'A guitarra precisa de um nome.'),
      marca: z.string().optional(),
      modelo: z.string().optional(),
      tipo: z.enum(['elétrica', 'acústica', 'clássica', 'baixo', 'outra'], {
        errorMap: () => ({
          message:
            'Tipo inválido. Usa um de: elétrica, acústica, clássica, baixo, outra.',
        }),
      }),
      anoAquisicao: z
        .number({ invalid_type_error: 'anoAquisicao deve ser um número (ex.: 2019).' })
        .int()
        .min(1900)
        .max(2100),
      fotos: z.object(
        {
          foto1: image(),
          foto2: image(),
          foto3: image(),
          foto4: image(),
        },
        { required_error: 'As 4 fotos (foto1..foto4) são obrigatórias.' }
      ),
      extras: z.array(image()).default([]),
      specs: z
        .object({
          corpo: z.string().optional(),
          tampo: z.string().optional(),
          braco: z.string().optional(),
          escala: z.string().optional(),
          captadores: z.string().optional(),
          pais: z.string().optional(),
          numeroSerie: z.string().optional(),
        })
        .default({}),
      ordem: z.number().int().optional(),
    }),
});

export const collections = { guitarras };
