import styles from './footer-styles.js';

export function footer() {
  const footerMain = document.querySelector('.footer-main');
  const footerMainHTML = `
    <div style="${styles.links}">
      <a
        href="https://github.com/Beriamir/My-first-portfolio-"
        target="blank"
      >
        <i class="fab fa-github"></i>
      </a>
      <a href="https://Wa.me/+639501470879" target="blank">
        <i class="fab fa-whatsapp"></i>
      </a>
      <a href="" target="blank">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="" target="blank">
        <i class="fas fa-file-alt"></i>
      </a>
    </div>
    <p style="${styles.copy}"><i style="${styles.copyIcon}">&copy;</i> 2024 Beriamir. All rights reserved.</p>
  `;

  footerMain.innerHTML = footerMainHTML;
  Object.assign(footerMain.style, styles.footerMain);
}
