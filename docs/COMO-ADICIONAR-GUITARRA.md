# Como adicionar uma guitarra

Cada guitarra é **uma pasta** dentro de `src/content/guitarras/`. O nome da pasta
torna-se o URL da página (ex.: a pasta `fender-telecaster` fica em
`/guitarras/fender-telecaster/`).

## Passo a passo

1. **Cria a pasta** — usa letras minúsculas e hífenes, sem acentos:

   ```
   src/content/guitarras/gibson-les-paul/
   ```

2. **Copia as fotos para a pasta.** As 4 primeiras são obrigatórias; podes
   juntar quantas extra quiseres. Os nomes dos ficheiros são livres — o que
   conta é o que declarares no `index.md`.

3. **Cria o ficheiro `index.md`** dentro da pasta, com este template:

   ```markdown
   ---
   nome: Nome da Guitarra
   marca: Gibson              # opcional
   modelo: Les Paul Standard  # opcional
   tipo: elétrica             # elétrica | acústica | clássica | baixo | outra
   anoAquisicao: 2023
   fotos:
     foto1: ./foto-1.jpg
     foto2: ./foto-2.jpg
     foto3: ./foto-3.jpg
     foto4: ./foto-4.jpg
   extras:                    # opcional — apaga a secção se não houver
     - ./extra-1.jpg
     - ./extra-2.jpg
   specs:                     # tudo opcional — só aparece o que preencheres
     corpo: Mogno
     tampo: Ácer flamejado
     braco: Mogno
     escala: Pau-rosa
     captadores: Humbuckers 57 Classic
     pais: EUA
     numeroSerie: "00123456"
   ordem: 4                   # opcional — posição na galeria (menor = primeiro)
   ---

   A descrição vem aqui, depois do bloco `---`. Escreve à vontade — podes usar
   **negrito**, *itálico*, listas e vários parágrafos. É o espaço para a
   história da guitarra.
   ```

4. **Pré-visualiza** com `npm run dev` → abre `http://localhost:4321/Cordoaria/`.

5. **Otimiza as fotos** (recomendado se vierem direto da câmara/telemóvel):

   ```
   npm run fotos
   ```

6. **Publica**:

   ```
   git add .
   git commit -m "Adiciona a Gibson Les Paul"
   git push
   ```

   O GitHub Actions trata do resto — em 1–2 minutos o site está atualizado.

## Regras e truques

- **As 4 fotos são obrigatórias.** Se faltar alguma (ou o caminho estiver mal
  escrito), o build falha com uma mensagem a indicar o ficheiro e o campo — o
  site publicado nunca fica quebrado.
- **`tipo`** tem de ser um de: `elétrica`, `acústica`, `clássica`, `baixo`,
  `outra`. Qualquer outro valor é rejeitado com a lista dos válidos.
- **Rascunhos**: uma pasta começada por `_` (ex.: `_em-preparacao/`) é ignorada
  pelo site. Útil para preparar uma guitarra com calma antes de a publicar.
- **Ordenação da galeria**: usa `ordem` para controlo manual. Sem `ordem`, as
  guitarras aparecem por ano de aquisição (mais recentes primeiro).
- **`numeroSerie` entre aspas** se começar por zero, para não perder o zero.
- A **foto1 é a capa**: aparece no cartão da galeria e em destaque no mosaico.
