(function () {
  var menosMovimento = false;
  try {
    menosMovimento = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {}

  /* Menu do celular */
  var nav = document.querySelector('.nav');
  var botao = nav && nav.querySelector('.nav-menu');
  if (botao) {
    botao.hidden = false;
    var fechar = function () {
      nav.classList.remove('aberta');
      botao.setAttribute('aria-expanded', 'false');
    };
    botao.addEventListener('click', function () {
      var aberta = nav.classList.toggle('aberta');
      botao.setAttribute('aria-expanded', aberta ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav-links a').forEach(function (a) { a.addEventListener('click', fechar); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('aberta')) { fechar(); botao.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) fechar();
    });
  }

  /* Vídeos dos reels: só baixam e tocam quando aparecem na tela.
     Quem pede menos animação no sistema vê apenas a imagem de capa. */
  var videos = document.querySelectorAll('.reel video');
  if (menosMovimento || !videos.length) return;

  if (!('IntersectionObserver' in window)) {
    videos.forEach(function (v) { v.play().catch(function () {}); });
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (en) {
      var v = en.target;
      if (en.isIntersecting) {
        v.play().catch(function () {});
      } else {
        v.pause();
      }
    });
  }, { rootMargin: '200px 0px', threshold: 0.01 });

  videos.forEach(function (v) { observador.observe(v); });
})();
