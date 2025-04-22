Hooks.once('init', () => {
  if (typeof Babele !== 'undefined') {
    game.babele.register({
      module: 'lang-pl-sf2e', // Identyfikator twojego modułu
      lang: 'pl', // Język
      dir: 'translation/pl/compendium', // Katalog z tłumaczeniami
    });
  }
});