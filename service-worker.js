// Service Worker for Eaglercraft - Caching for better performance
const CACHE_NAME = 'eaglercraft-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/classes.js',
  '/fix-webm-duration.js',
  '/assets.epk',
  '/favicon.png'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          return response;
        }
        
        console.log('[Service Worker] Fetching from network:', event.request.url);
        return fetch(event.request).then((response) => {
          // Don't cache if not a success response
          if (!response || response.status !== 200 || !response.ok) {
            return response;
          }
          
          // Clone response as it can only be consumed once
          const responseToCache = response.clone();
          
          // Cache the new resource with error handling
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache).catch((err) => {
              console.error('[Service Worker] Cache put failed:', err);
            });
          }).catch((err) => {
            console.error('[Service Worker] Cache open failed:', err);
          });
          
          return response;
        });
      })
  );
});
