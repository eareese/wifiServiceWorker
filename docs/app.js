if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: '.' })
    .then(function(reg) {
      console.log('Registered service worker ', reg);
    });
}
