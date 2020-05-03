const cacheName = "siteCache";

const assets = [
    '/atiempo/',
    '/atiempo/index.php',
    '/atiempo/js/app.js',
    '/atiempo/sw.js'
];

self.addEventListener("install", event => {
    //console.log("SW instalado");
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets);
        }).catch((error) =>{
            console.log("NO GUARDADO");
        })
    );
})

self.addEventListener("activate", event => {
    console.log("SW activado");
})

self.addEventListener("fetch", event => {
    //console.log("SW FETCH", event);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }).catch((error) => {
            console.log("ERROR");
        })
    );
})