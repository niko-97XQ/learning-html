// 课件 Recap 2–4：同一个 load()，加载两个 HTML 片段（DRY）。
function load(file, target) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`${file}: ${response.status}`);
      return response.text();
    })
    .then(html => {
      const container = document.getElementById(target);
      container.innerHTML = html;
      // 在课件基础上补充当前页标记，帮助键盘和屏幕阅读器用户。
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
      note.textContent = '导航暂时无法加载。请使用 Live Server 打开并刷新。';
      const home = document.createElement('a');
      home.href = 'index.html';
      home.textContent = '返回首页';
      container.replaceChildren(note, home);
      console.error(error);
    });
}
load('nav.html', 'site-header');
load('footer.html', 'site-footer');
