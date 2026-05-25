function initRendorixImages(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-rx-image-wrap]').forEach((wrap) => {
    if (wrap.dataset.rxInit === 'true') return;

    const img = wrap.querySelector('img');
    if (!img) return;

    wrap.dataset.rxInit = 'true';

    const markLoaded = () => {
      wrap.classList.add('is-loaded');
    };

    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
      return;
    }

    img.addEventListener('load', markLoaded, { once: true });
    img.addEventListener('error', markLoaded, { once: true });
  });
}

function onReady() {
  initRendorixImages();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onReady);
} else {
  onReady();
}

document.addEventListener('astro:page-load', () => {
  initRendorixImages();
});
