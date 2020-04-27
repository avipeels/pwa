//progressive enhancement
if (navigator.serviceWorker) {
  //Reister the sw
  navigator.serviceWorker.register('./sw.js')
    .then(function (registration) {
      console.log('SW registered');
    });
}

fetch('camera_feed.html')
  .then(res => {
    return res.text();
  })
  .then(html => {
    document.getElementById('camid').innerHTML = html;
  })