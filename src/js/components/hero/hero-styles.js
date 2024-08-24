const styles = {
  hero: {
    background:
      "url('./src/assets/hero-bg-img.jpg') no-repeat center center/cover",
    color: 'var(--color-100)',
    width: '100vw',
    height: '500px',
    textAlign: 'center',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',

    position: 'relative'
  },
  darkenBg: `
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100%;
    height: 100%;
    background-color: #1111118b;
    z-index: 1 !important;
  `,
  bold: `
    font-size: 5rem;
    font-weight: 1000;
    z-index: 2;
    text-shadow: 0px 0px 12px var(--light-shadow);
  `,
  lit: `
    z-index: 2;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
  `,
  getInTouch: `
    z-index: 2;
    font-size: 2rem;
    border-radius: 10px;
    border: none;
    background-color: var(--orange);
    color: var(--color-100);
    padding: 10px 20px;
  `
};

export default styles;
