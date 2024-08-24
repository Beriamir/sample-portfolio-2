const styles = {
  projects: {
    width: '100%',
    maxWidth: '1200px',
    padding: '5% 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5%',
    backgroundColor: 'transparent'
  },
  projectHeading: `
    font-size: 3rem;
    font-weight: 1000;
    width: 100%;
    text-align: center;
    padding: 20px 0;
  `,
  project: `
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 350px;
    margin: 20px 0;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 6px 4px var(--light-shadow);
  `,
  container: `
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  title: `
    font-size: 2rem;
    font-weight: 800;
  `,
  description: `
    font-size: 1.8rem;
    font-weight: 400;
  `
};

export default styles;
