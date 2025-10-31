function setTheme(mode) {
  const html = document.documentElement;
  if (mode === 'system') {
    html.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  } else {
    html.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }
}

// 初始化加载用户上次选择
const saved = localStorage.getItem('theme');
if (saved) setTheme(saved);
