import styles from './my-skills-styles.js';

const skillsItem = [
  {
    icon: 'fas fa-code',
    title: 'HTML'
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'CSS'
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'JavaScript'
  },
  {
    icon: 'fab fa-react',
    title: 'ReactJS'
  },
  {
    icon: 'fab fa-git',
    title: 'Git'
  }
];

export function mySkills() {
  const skills = document.getElementById('skills');
  let skillsHTML = `<h2 style="${styles.skillsHeading}">My Skills</h2>`;

  skillsItem.forEach(item => {
    skillsHTML += `
      <div style="${styles.skill}">
        <i style="${styles.icon}" class="${item.icon}"></i>
        <h3 style="${styles.title}" >${item.title}</h3>
      </div>
    `;
  });

  skills.innerHTML = skillsHTML;
  Object.assign(skills.style, styles.skills);
}
