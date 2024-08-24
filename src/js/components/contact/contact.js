import styles from './contact-styles.js';
import { handleContactForm } from './handle-contact-form.js';

export function contact() {
  const email = document.getElementById('email');
  const emailHTML = `
    <h2 style="${styles.contactHeading}" class="contact-heading">Contact</h2>
    <form style="${styles.contactForm}" id="contact-form">
      <label style="${styles.formLabel}" class="form-label" for="user-name">Name</label>
      <input
        required
        style="${styles.formInput}"
        class="form-input"
        type="text"
        id="user-name"
        name="user_name"
        placeholder="name..."
      />
      
      <label style="${styles.formLabel}" class="form-label" for="user_email">Email</label>
      <input
        required
        style="${styles.formInput}"
        class="form-input"
        type="email"
        id="user_email"
        name="user_email"
        placeholder="email..."
      />
      
      <label style="${styles.formLabel}" class="form-label" >Message</label>
      <textarea 
        required 
        style="${styles.formTextarea}" 
        class="form-textarea" 
        name="message"
        placeholder="message..."
      ></textarea>
      <button style="${styles.formBtn}" class="form-btn" type="submit">Send Message</button>
    </form>
  `;

  email.innerHTML = emailHTML;
  Object.assign(email.style, styles.email);

  handleContactForm('contact-form');
}
