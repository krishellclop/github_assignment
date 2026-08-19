const CACHE_NAME = "krishell-v1";
const FILES = [
  "index.html",
  "hobby.html",
  "change.html",
  "convertor.html",
  "distance.html",
  "grading.html",
  "style.css",
  "manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
