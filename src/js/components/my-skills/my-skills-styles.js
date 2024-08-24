const styles = {
  skills: {
    width: '100%',
    maxWidth: '1200px',
    padding: '5% 0',
    backgroundColor: 'transparent',

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: '20px'
  },
  skillsHeading: `
    font-size: 3rem;
    font-weight: 1000;
    text-align: center;
    width: 100%;
    display: block;
    padding: 20px 0;
  `,
  skill: `
    width: 200px;
    height: 200px;
    background-color: var(--light-bg-subtle);
    font-size: 2rem;
    font-weight: 800;
    border-radius: 10px;
    border: 1px solid var(--light-border-subtle);
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,
  icon: `
    color: var(--primary);
    font-size: 4rem;
    background-color: transparent;
  `,
  title: `
    background-color: transparent;
  `
};

export default styles;
