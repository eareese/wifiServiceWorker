var CACHE_NAME = 'v1';

var REQUIRED_FILES = [
  'index.html',
  'app.js'
];


self.addEventListener('install', function(event) {

    event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
      console.log('[install] Caches opened, adding core components to cache');
      return cache.addAll(REQUIRED_FILES);
    }).then(function() {
      console.log('[install] All resources cached, good to go');
      return self.skipWaiting();
    }));
});

self.addEventListener('activate', function(event) {
  console.log('[activate] Activating SW');
  console.log('[activate] Claiming SW');
  event.waitUntil(self.clients.claim());
});

