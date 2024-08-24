const styles = {
  header: {
    fontSize: '2rem',
    backgroundColor: 'var(--light-bg-subtle)',
    width: '100%',
    height: '80px',
    boxShadow: '0 0 4px 2px var(--light-shadow)',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',

    position: 'sticky',
    top: '0px',
    left: '0px',
    zIndex: '1000'
  },
  logo: `
    margin-left: 20px;
    font-weight: 1000;
    background-color: transparent;
  `,
  theme: `
    background-color: transparent;
    border-radius: 10px;
    padding: 5px 10px;
    border: 1px solid var(--light-border-subtle);
  `,
  icon: `
    background-color: transparent;
  `,
  navbar: `
    display: flex;
    position: relative;
    margin-left: auto;
    position: relative;
    background-color: transparent;
  `,
  navbarBtn: `
    margin-right: 20px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid var(--light-border-subtle);
  `,
  navlist: `
    display: none;
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: 50%;
    box-shadow: 0 0 4px 2px var(--light-shadow);
    border-radius: 10px;
    border: 0px solid var(--light-border-subtle);
    overflow: hidden;
    z-index: 999;
    width: max-content;
  `,
  navlistItem: `
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    font-weight: 300;
    padding: 10px  20px;
    background-color: var(--light-bg-subtle);
  `,
  icon: `
    pointer-events: none;
    touch-action: none;
  `
};

export default styles;
