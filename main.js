// Two small motions, both skipped when the system's reduced-motion setting is on.
// 1. Hero: the "?" exits fade in last (pure CSS, see styles.css).
// 2. First study: the diagram's stations rise in, 120 ms apart, then the
//    sample loop draws, the first time the diagram scrolls into view.
(function () {
  if (!window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;
  document.querySelectorAll('#study .pipeline').forEach(function (fig) {
    fig.classList.add('pl-anim');
    fig.querySelectorAll('svg').forEach(function (svg) {
      svg.querySelectorAll('.pl-station').forEach(function (g, i) { g.style.transitionDelay = (i * 120) + 'ms'; });
      svg.querySelectorAll('.pl-loop').forEach(function (p) {
        if (!p.getTotalLength) return;
        var len = p.getTotalLength();
        p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
      });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        fig.classList.add('in-view');
        fig.querySelectorAll('.pl-loop').forEach(function (p) { p.style.strokeDashoffset = 0; });
        io.disconnect();
      });
    }, { threshold: 0.35 });
    io.observe(fig);
  });
})();
