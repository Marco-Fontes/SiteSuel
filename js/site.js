(function () {
  var menosMovimento = false;
  try {
    menosMovimento = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {}

  /* Quem pede menos animação no sistema não recebe vídeo em reprodução automática. */
  if (menosMovimento) {
    try {
      document.querySelectorAll('.reel video').forEach(function (v) {
        v.removeAttribute('autoplay');
        v.pause();
      });
    } catch (e) {}
  }
})();
