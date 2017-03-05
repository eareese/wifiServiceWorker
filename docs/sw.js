var CACHE_NAME = 'demo-v1';

var FILES = [
  'index.html',
  'offline.html',
  'app.js'
];


self.addEventListener('install', function(event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    return cache.addAll(FILES);
  }).then(function() { return self.skipWaiting(); }));
});

self.addEventListener('fetch', function(event) {
  if (event.request.mode == 'navigate') {
    event.respondWith(fetch(event.request).catch(function(error) {
      return caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('offline.html');
      });
    }));
  }
});
