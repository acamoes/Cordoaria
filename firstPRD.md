## Cordoaria

Quero uma app que me ajudes a registar as guitarras que tenho.

O propósito é mesmo uma galeria com as minhas guitarras registadas para as mostrar a partir de web.

### Campos
- Nome da Guitarra
- Descrição (bastante texto)
- Ano de aquisição
- Foto 1
- Foto 2
- Foto 3
- Foto 4
- Outras fotos

Como podes ver na imagem, existem 4 fotos a serem mostradas. Para todas as guitarras registadas, essas primeiras 4 fotos têm sempre de aparecer para garantir coerencia. Se quiser introduzir mais fotos posso fazê-lo.

Podes sugerir mais campos se necessário.

### UI/UX

Como podes calcular, esta app terá que ter uma componente muito forte de UI/UX. Colocarei de seguida o design system a ser utilizado. Quero que apareçam animações de entrada quando mostras as fotos.

Design System
Cores
Background
Nome	Hex	Uso
Background Primary	#F2EFD9	Fundo principal
Background Dark	#342A22	Fundo exterior (substitui o verde)
Surface	#FBF9EF	Cards e elementos claros

O castanho #342A22 mantém praticamente o mesmo contraste do verde, mas acrescenta uma sensação mais quente e artesanal.

Neutros
Nome	Hex
Black	#1E1D20
Charcoal	#3B3935
Medium Gray	#7C776F
Border	#D5CFBE
Light Border	#E8E3D6
Cores de Destaque

Inspiradas no próprio acabamento da guitarra.

Nome	Hex
Vintage Red	#78170D
Tobacco Orange	#C17723
Deep Brown	#4A2418
Cream	#F3E9C7
Navy Accent	#31558D
Tipografia
Headings

Bebas Neue

ou

Oswald

Características

Condensada
Bold
Tracking muito ligeiro
Caixa alta

Escala

H1
64px
700

H2
48px
700

H3
32px
700
Body

Inter

ou

Suisse International

Body Large
20px

Body
18px

Small
16px

Caption
14px

Peso

Regular 400
Medium 500
Espaçamento

Base 8px.

4
8
16
24
32
48
64
80
96
Border Radius
Small
12px

Medium
20px

Large
28px

Pill
999px
Botões
Primary

Fundo

#1E1D20

Texto

#FFFFFF

Radius

999px

Padding

18px 32px

Hover

#342A22
Secondary
Background
transparent

Border
1px solid #1E1D20

Text
#1E1D20
Inputs

Background

#FBF9EF

Border

#D5CFBE

Radius

14px

Focus

2px solid #C17723
Sombras

Muito subtis.

0 8px 30px rgba(0,0,0,.08)

ou

0 12px 40px rgba(0,0,0,.12)
Layout

Grid

12 colunas

Max Width
1440px

Margin
64px

Gutter
32px
Hierarquia
Logo

↓

Menu

↓

Categoria

↓

Título

↓

Opções

↓

Descrição

↓

Preço

↓

CTA

↓

Galeria
Ícones
Stroke de 2px
Minimalistas
Apenas outline
Cor preta
Componentes
Product Card
Fundo creme
Radius 24px
Imagem dominante
Muito espaço negativo
Color Picker
36x36px

Border
2px solid branco

Estado ativo

Sombra exterior suave
Thumbnail
180x180

Radius
24px

Hover

scale(1.03)

Border
2px solid #342A22
Nova Paleta Principal
--background: #F2EFD9;
--background-dark: #342A22;
--surface: #FBF9EF;

--text: #1E1D20;
--text-secondary: #5C5953;

--primary: #1E1D20;
--secondary: #C17723;

--accent-red: #78170D;
--accent-blue: #31558D;

--border: #D5CFBE;
--shadow: rgba(0,0,0,.10);

Esta versão mantém a estética vintage da referência, mas o castanho escuro em vez do verde cria uma atmosfera mais quente, elegante e coerente com produtos em madeira, couro e instrumentos musicais. O contraste continua elevado e a identidade visual ganha um caráter mais premium e intemporal.
