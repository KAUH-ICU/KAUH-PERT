self.addEventListener("install", function(event) {
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET" || event.request.url.indexOf("script.google.com") !== -1) {
    return;
  }
  event.respondWith(fetch(event.request));
});
