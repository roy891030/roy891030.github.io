(function () {
  function loadDriveVideo(container) {
    if (!container || container.classList.contains('is-loaded')) return;

    var src = container.getAttribute('data-drive-src');
    if (!src) return;

    var iframe = document.createElement('iframe');
    iframe.src = src + (src.indexOf('?') === -1 ? '?' : '&') + 'autoplay=1';
    iframe.title = container.getAttribute('data-drive-title') || 'Google Drive video';
    iframe.allow = 'autoplay; fullscreen';
    iframe.allowFullscreen = true;

    container.classList.add('is-loaded');
    container.innerHTML = '';
    container.appendChild(iframe);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-drive-src]').forEach(function (container) {
      var trigger = container.querySelector('.drive-video-trigger');
      var poster = container.querySelector('.drive-video-poster');
      if (!trigger) return;

      if (poster) {
        poster.addEventListener('error', function () {
          poster.hidden = true;
        });
      }

      trigger.addEventListener('click', function () {
        loadDriveVideo(container);
      });
    });
  });
})();
