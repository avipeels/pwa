// console.log('SW: registered');

//Service worker

// self.addEventListener('install', (e) => {
//     // console.log('SW: Install event');
//     // Tasks to install event
//     let installPromise = new Promise((resolve) => {
//         setTimeout(resolve, 3000);
//     });
//     e.waitUntil(installPromise);
// });

self.addEventListener('fetch', (e) => {
    // if (e.request.url.endsWith('styles.css')) {
    //     console.log('Fetch Event' + e.request.url);
    //     e.respondWith(fetch('/style2.css'));
    // }

    // if (e.request.url.endsWith('/greet')) {
    //     let headers = new Headers({ 'Content-type': 'text/html' });
    //     let customRes = new Response('<h1>Hello World</h1>', { headers: headers });
    //     e.responseWith(customRes);
    // }

    if (e.request.url.endsWith('/camera_feed.html')) {
        e.respondWith(
            fetch(e.request)
                .then(res => {
                    if (res.ok) return res;

                    return new Response('Camera feed currently unavailable');
                })
        )
    }
});