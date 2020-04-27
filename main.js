//progressive enhancement
if (navigator.serviceWorker) {
  //Reister the sw
  navigator.serviceWorker.register('./sw.js')
    .then(function (registration) {
      console.log('SW registered');
    });
}