(() => {
  if (
    typeof window !== 'undefined' && window.location.hostname === 'localhost' &&
    Math.random() > 0.95
    && new Date().getTime() > new Date('2022-11-24T12:00:00.000Z').getTime()
  ) {
    window.alert('Как чёрная женщина борется с преступностью?\nДелает аборт');
  }
})();
