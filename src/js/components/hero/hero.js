import styles from './hero-styles.js';

export function hero() {
  const hero = document.getElementById('hero');
  const heroHTML = `
    <div style="${styles.darkenBg}"></div>
    <h1 style="${styles.bold}">Hello, I'm Beriamir Camal</h1>
    <p style="${styles.lit}">Aspiring Web Developer</p>
    <a href="https://Wa.me/+639501470879" style="${styles.getInTouch}" class="get-in-touch">Get in touch</a>
  `;

  hero.innerHTML = heroHTML;
  Object.assign(hero.style, styles.hero);
}
