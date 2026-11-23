# SiteSuel

Site da **FisioHand**, marca da fisioterapeuta Suel Vilar (Olinda e Recife), publicado no GitHub Pages.

Endereço: https://marco-fontes.github.io/SiteSuel/

## Estrutura

```
index.html            página única (todas as seções)
404.html              página de erro
css/site.css          estilos e tokens do design system FisioHand
js/site.js            pausa os vídeos para quem pede menos animação no sistema
assets/img/           selo, wordmark, foto do herói, ícones e imagem de compartilhamento
assets/video/         trechos dos reels do Instagram (mp4 + pôster)
robots.txt, sitemap.xml, .nojekyll
```

Site estático puro: sem build, sem dependências. Basta editar e fazer push na `main`.

## Design system

Os tokens em `css/site.css` (`:root` e os temas `[data-theme="escuro"]` e `[data-theme="laranja"]`) seguem o design system FisioHand v2. Para trocar o fundo de uma seção, use `data-theme` na `<section>`; superfície, tinta e filete mudam sozinhos. Regras principais:

- Laranja (`--brand`) é preenchimento; laranja em texto é sempre `--brand-text`.
- Texto sobre laranja é `--on-brand` (tinta escura), nunca branco.
- Raio máximo de 6px, sem sombra (exceto o botão flutuante do celular), sem gradiente de marca no site.
- Nunca duas seções seguidas com o mesmo fundo.

## Como editar

- **WhatsApp**: todos os botões usam `https://wa.me/5581986102943?text=...`. Para trocar o número, substitua `5581986102943` em `index.html` e `404.html`.
- **Depoimentos**: copie um bloco `.depoimento`, troque `.depo-fala` e `.depo-nome`. Publicar somente com autorização por escrito do paciente, sem promessa de resultado e sem antes e depois (Resolução COFFITO nº 532/2021).
- **Reels**: troque os arquivos em `assets/video/` e o link do Instagram no `<a class="reel">` correspondente. Mantenha os vídeos curtos e leves (até ~1 MB).
- **Ícone do WhatsApp**: os botões usam um ícone de conversa genérico (`svg.ico-wpp`). Para usar o oficial, baixe do kit de marca do WhatsApp e substitua esses `<svg>`.

## Domínio próprio

Para usar um domínio (ex.: `fisiohand.com.br`), crie um arquivo `CNAME` com o domínio, configure o DNS conforme a documentação do GitHub Pages e atualize as URLs absolutas em `index.html` (canonical, `og:url`, `og:image` e o JSON-LD), `404.html` (prefixo `/SiteSuel/`), `robots.txt` e `sitemap.xml`.
