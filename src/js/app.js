import { header } from './components/header/header.js';
import { hero } from './components/hero/hero.js';
import { about } from './components/about/about.js';
import { projects } from './components/project/projects.js';
import { mySkills } from './components/my-skills/my-skills.js';
import { contact } from './components/contact/contact.js';
import { footer } from './components/footer/footer.js';

(function App() {
  header();
  hero();
  about();
  projects();
  mySkills();
  contact();
  footer();
})();
