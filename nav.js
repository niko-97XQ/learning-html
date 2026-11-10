// Course Recap 2–4: one load() fetches both HTML fragments (DRY).
function load(file, target) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`${file}: ${response.status}`);
      return response.text();
    })
    .then(html => {
      const container = document.getElementById(target);
      container.innerHTML = html;
      // Beyond the course example: mark the current page to help keyboard and screen reader users.
      if (target === 'site-header') {
        const page = location.pathname.split('/').pop() || 'index.html';
        container.querySelectorAll('.links a').forEach(link => {
          if (link.getAttribute('href') === page) link.setAttribute('aria-current', 'page');
        });
      }
    })
    .catch(error => {
      const container = document.getElementById(target);
      const note = document.createElement('p');
      note.className = 'load-note';
      note.textContent = 'Navigation could not be loaded. Please open the site with Live Server and refresh.';
      const home = document.createElement('a');
      home.href = 'index.html';
      home.textContent = 'Back to home';
      container.replaceChildren(note, home);
      console.error(error);
    });
}
load('nav.html', 'site-header');
load('footer.html', 'site-footer');
