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

  return {
    hide,
    show,
    fadeIn,
    fadeOut,
  };
})();
