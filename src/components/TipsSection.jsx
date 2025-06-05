useEffect(() => {
  const container = booksRef.current;
  if (!container) return;

  if (window.innerWidth > 767) return;

  let scrollAmount = 0;
  const scrollStep = 280 + 16;
  let intervalId;

  const startAutoScroll = () => {
    intervalId = setInterval(() => {
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      if (scrollAmount + scrollStep >= maxScroll) {
        scrollAmount = 0;
        container.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      scrollAmount += scrollStep;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 3000);
  };

  const delayTimeout = setTimeout(() => {
    startAutoScroll();
  }, 500);

  const handleUserScroll = () => {
    clearInterval(intervalId);
    clearTimeout(delayTimeout);
  };

  container.addEventListener('touchstart', handleUserScroll);
  container.addEventListener('wheel', handleUserScroll);

  return () => {
    clearInterval(intervalId);
    clearTimeout(delayTimeout);
    container.removeEventListener('touchstart', handleUserScroll);
    container.removeEventListener('wheel', handleUserScroll);
  };
}, []);
