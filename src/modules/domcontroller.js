export default (() => {
  const hide = (el) => {
    el.classList.add('hidden');
  };

  const show = (el) => {
    el.classList.remove('hidden');
  };

  const fadeIn = (el) => {
    el.classList.add('transition');
    el.classList.remove('fade-out');
  };

  const fadeOut = (el) => {
    el.classList.add('fade-out', 'transition');
  };

  const cascade = async (elems) => {
    for (let i = 0; i < elems.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop, no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 100));
      fadeIn(elems[i]);
    }
  };

  return {
    hide,
    show,
    fadeIn,
    fadeOut,
    cascade,
  };
})();
