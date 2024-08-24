import styles from './project-styles.js';

const projectItems = [
  {
    href: 'index.html',
    imgSrc: 'https://via.placeholder.com/300x200',
    title: 'ReactJS-Bootstrap: Amazon Prime Clone.',
    description: `A brief description of your project. Highlight key features and
      technologies used.
    `
  },
  {
    href: 'index.html',
    imgSrc: 'https://via.placeholder.com/300x200',
    title: 'ReactJS: Messaging App.',
    description: `A brief description of your project. Highlight key features and
      technologies used.
    `
  },
  {
    href: 'index.html',
    imgSrc: 'https://via.placeholder.com/300x200',
    title: 'Vanilla JavaScript: UI/UX Designs.',
    description: `A brief description of your project. Highlight key features and
      technologies used.
    `
  },
  {
    href: 'index.html',
    imgSrc: 'https://via.placeholder.com/300x200',
    title: 'ReactTS-Bootstrap-PHP: Fully Working Shopping App.',
    description: `A brief description of your project. Highlight key features and
      technologies used.
    `
  }
];

export function projects() {
  const project = document.getElementById('projects');
  let projectHTML = `<h3 style="${styles.projectHeading}">Projects</h3>`;

  projectItems.forEach(item => {
    projectHTML += `
      <a href="${item.href}" style="${styles.project}">
        <img
          class="photo"
          src="${item.imgSrc}"
          alt="Project 1"
        />
        <div style="${styles.container}">
          <h3 style="${styles.title}">${item.title}</h3>
          <p style="${styles.description}">
            ${item.description}
          </p>
        </div>
      </a>
    `;
  });

  project.innerHTML = projectHTML;
  Object.assign(project.style, styles.projects);
}
