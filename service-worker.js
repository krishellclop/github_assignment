const CACHE_NAME = "github-assignment-v1";

const filesToCache = [
    "./",
    "./index.html",
    "./converter.html",
    "./distance.html",
    "./grading.html",
    "./hobby.html",
    "./change.html",
    "./manifest.json"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});