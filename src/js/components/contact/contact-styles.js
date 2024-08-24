const styles = {
  email: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    width: '100%',
    maxWidth: '1200px',
    padding: '10% 0',
    backgroundColor: 'var(--light-bg-subtle)'
  },
  contactHeading: `
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 20px;
    background-color: transparent;
  `,
  contactForm: `
    width: 400px;
    padding: 20px;
    box-shadow: 0 0 6px 2px var(--light-shadow);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background-color: var(--light);
  `,
  formLabel: `
    width: 100%;
    display: block;
    padding: 10px 0;
    background-color: transparent;
  `,
  formInput: `
    background-color: transparent;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--light-border-subtle);
  `,
  formTextarea: `
    background-color: transparent;
    width: 100%;
    border-radius: 10px;
    height: 200px;
    height: 100px;
    padding: 10px;
  `,
  formBtn: `
    padding: 10px 20px;
    width: 100%;
    background-color: var(--primary);
    color: var(--color-100);
    border: none;
    border-radius: 10px;
    margin-top: 20px;
  `
};

export default styles;
