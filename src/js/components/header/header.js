import styles from './header-styles.js';

export function header() {
  const header = document.querySelector('.header-main');
  let currentTheme = document.documentElement.getAttribute('data-theme');
  let icon = currentTheme === 'Light' ? 'sun' : 'moon';

  const headerHTML = `
    <a href="index.html" style="${styles.logo}">Beriamir</a>
    <button style="${styles.theme}" class="btnHover" data-toggle="theme"><i style="${styles.icon}" class="fas fa-${icon}"></i></button>
    <div style="${styles.navbar}" class="navbar">
      <button style="${styles.navbarBtn}" class="navbar-btn btnHover" data-toggle='navlist'><i class="fas fa-bars"></i></button>
      <nav style="${styles.navlist}" class="navlist">
        <a href="hero" style="${styles.navlistItem}"class="navlist-item"><i style="${styles.icon}" class="fas fa-home"></i>Home</a>
        <a href="about" style="${styles.navlistItem}" class="navlist-item"><i style="${styles.icon}" class="fas fa-info-circle"></i>About</a>
        <a href="projects" style="${styles.navlistItem}" class="navlist-item"><i style="${styles.icon}" class="fas fa-project-diagram"></i>Project</a>
        <a href="skills" style="${styles.navlistItem}" class="navlist-item"><i style="${styles.icon}" class="fas fa-star"></i>Skills</a>
        <a href="email" style="${styles.navlistItem}" class="navlist-item"><i style="${styles.icon}" class="fas fa-envelope"></i>Email</a>
      </nav>
    </div>
  `;

  header.innerHTML = headerHTML;
  Object.assign(header.style, styles.header);

  function toggleTheme(e) {
    let theme = '';
    const themeBtnIcon = document.documentElement.querySelector(
      '[data-toggle="theme"] > i'
    );
    currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'Light') {
      theme = 'Dark';
      icon = 'moon';
    } else {
      theme = 'Light';
      icon = 'sun';
    }

    document.documentElement.setAttribute('data-theme', theme);
    themeBtnIcon.setAttribute('class', `fas fa-${icon}`);
  }

  document
    .querySelector('[data-toggle="theme"]')
    .addEventListener('click', toggleTheme);

  const navlistItem = document.querySelectorAll('.navlist > .navlist-item');
  navlistItem.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      if (targetId) {
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    });
  });
}
