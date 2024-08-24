import styles from './about-styles.js';

export function about() {
  const about = document.getElementById('about');
  const aboutHTML = `
    <h2 style="${styles.title}"" class="title">About Me</h2>
    <p style="${styles.content}" class="content">
      Hello! I'm a passionate and aspiring web developer. I enjoy creating
      beautiful and functional websites. My goal is to continuously learn
      and improve my skills to build amazing web applications.
    </p>
  `;

  about.innerHTML = aboutHTML;
  Object.assign(about.style, styles.about);
}
