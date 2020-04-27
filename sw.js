console.log('SW: registered');

//Service worker

self.addEventListener('install', (e) => {
    // console.log('SW: Install event');
    // Tasks to install event
    let installPromise = new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    e.waitUntil(installPromise);
});

self.addEventListener('activate', (e) => {
    console.log('SW2 Activated');
});