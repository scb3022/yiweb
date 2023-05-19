'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4ab58f8c0b515c87db61e4156f01ac70",
"assets/assets/font/BlackHanSans-Regular.ttf": "9405d86b7f277decfffed374fcc0f9bb",
"assets/assets/image/%25EA%25B0%2580%25EB%25B0%25B0%25EB%258F%2584%25EC%2582%25BC%25EC%25B2%25AD.jpg": "a8c5428b76d34eb019799760473ca9b8",
"assets/assets/image/%25EA%25B3%25A0%25ED%258A%25B8%25EB%258D%25B8%25EB%25A6%25AC%25EC%2584%259C%25EC%25B4%258C.jpg": "e274bc2e9dd43697254825f20a69c7c8",
"assets/assets/image/%25EA%25B4%2591%25ED%2599%2594%25EB%25AC%25B8%25EA%25B4%2591%25EC%259E%25A5.jpg": "924456711d499513a9380d7ff826307c",
"assets/assets/image/%25EA%25B5%25AD%25EB%25A6%25BD%25EB%25AF%25BC%25EC%2586%258D.jpg": "6e7a2010383fa1c11159921ceefe50b9",
"assets/assets/image/%25EA%25B5%25AD%25EB%25A6%25BD%25ED%2598%2584%25EB%258C%2580%25EB%25AF%25B8%25EC%2588%25A0%25EA%25B4%2580.jpg": "7b498ab36d40d2857165959d2271bc06",
"assets/assets/image/%25EA%25B7%25BC%25EC%25A0%2595%25EC%25A0%2584.jpg": "99a0f994a53161ec1cf1089b46deb8af",
"assets/assets/image/%25EA%25B9%25A1%25ED%2586%25B5%25EB%25A7%258C%25EB%2591%2590.jpg": "0b721e4978adfa404379e1993ab15f2c",
"assets/assets/image/%25EB%2582%2599%25EC%2582%25B0%25EA%25B3%25B5%25EC%259B%2590.jpg": "d41a211ba505feae0bf4505dd978fcd6",
"assets/assets/image/%25EB%258D%2594%25ED%2582%25A4%25EC%25B9%259C750.jpg": "082c3a22dd882d3359c96c3a9335a0b5",
"assets/assets/image/%25EB%258F%2588%25EC%25B2%259C%25EB%258F%2599%25EC%258B%259D%25EB%258B%25B9.jpg": "f11dbdffb95e035932cc8d83fb5aef4f",
"assets/assets/image/%25EB%258F%2599%25ED%2599%2594%25EB%25A7%2588%25EC%259D%2584.jpg": "8d1ae0d2a828b67362f3c00bdf3c843d",
"assets/assets/image/%25EB%2594%2594%25EB%25A7%2588%25EB%2596%25BC%25EC%2598%25A4.jpg": "b8be0d22ba807f731488c07145b04b86",
"assets/assets/image/%25EB%259F%25B0%25EB%258D%2598%25EB%25B2%25A0%25EC%259D%25B4%25EA%25B8%2580.jpg": "9e48072298cba061acd5d57089d4507b",
"assets/assets/image/%25EB%25A7%2588%25EB%25A1%259C%25EB%258B%2588%25EC%2597%2590%25EA%25B3%25B5%25EC%259B%2590.jpg": "5a7418b606a36bab593a049c0e3f93b1",
"assets/assets/image/%25EB%25B0%25B1%25EC%259D%25B8%25EC%25A0%259C%25EA%25B0%2580%25EC%2598%25A5.jpg": "5749d6d2d8a4126338f453dc99093bd6",
"assets/assets/image/%25EB%25B6%2580%25EB%25B9%2599.jpg": "c7b6fe15350ac998b7fc979af0affa9d",
"assets/assets/image/%25EB%25B6%2581%25EC%25B4%258C%25ED%2595%259C%25EC%2598%25A5%25EB%25A7%2588%25EC%259D%2584.jpg": "edb877d7714f701c2053b80e8d906498",
"assets/assets/image/%25EB%25B9%2584%25EC%258A%25A4%25ED%258A%25B8%25EB%25A1%259C%25EC%25B9%259C%25EC%25B9%259C.jpg": "c43e4f6dfb58a2be77c864c16be04a69",
"assets/assets/image/%25EC%2588%2598%25EC%2599%2580%25EB%259E%2598.jpg": "1880bbee88977d1a15e969b71240b15f",
"assets/assets/image/%25EC%258A%25A4%25ED%258E%2599%25ED%2584%25B0.jpg": "c46050e19a7a238cc6cb3c0c497ac205",
"assets/assets/image/%25EC%2597%25B0%25EA%25B1%25B4%25EC%25BA%25A0%25ED%258D%25BC%25EC%258A%25A4.jpg": "a7db90e3fe751d6d6e120db4e1400f7b",
"assets/assets/image/%25EC%2597%25B0%25EA%25B2%25BD.jpg": "6e0e043d9f9c1350edeb90b186eca3f1",
"assets/assets/image/%25EC%259B%2594%25EB%25AF%25B8%25EB%258F%2584%25ED%2585%258C%25EB%25A7%2588%25ED%258C%258C%25ED%2581%25AC.jpg": "6d4709d7d4855d49f3d64d62b16b7a2d",
"assets/assets/image/%25EC%259C%25A4%25EB%258F%2599%25EC%25A3%25BC.jpg": "8a5efb604b6f2dfb4a669dec68d6765a",
"assets/assets/image/%25EC%259D%25B4%25ED%2599%2594%25EB%258F%2599%25EB%25B2%25BD%25ED%2599%2594%25EB%25A7%2588%25EC%259D%2584.jpg": "ea068d12cadcee7f30a2b9386e16c379",
"assets/assets/image/%25EC%25B0%25A8%25EC%259D%25B4%25EB%2582%2598%25ED%2583%2580%25EC%259A%25B4.jpg": "f2748951b123df6695febce10607a623",
"assets/assets/image/%25EC%25B9%25B4%25ED%258E%2598%25EC%259D%25B8%25EB%259C%25A8%25EB%259D%25BD.jpg": "5e2d47186890ddc8f6906f6fc9df8af8",
"assets/assets/image/%25EC%25BD%2594%25EC%2595%25BC%25EC%25BD%2594.jpg": "92fe78fda9fa8368dfd220f3a786e116",
"assets/assets/image/%25ED%2582%25B9.jpg": "4055f9c470a3d1420101e237e0d685f3",
"assets/assets/image/%25ED%2595%2598%25EC%259D%25B4%25EB%2594%2594%25EB%25A6%25AC%25EC%2598%25A4.jpg": "41ca408f9f6c312cd43e135cdd1e8883",
"assets/assets/image/%25ED%2595%259C%25EC%25A7%2580%25EB%25AC%25B8%25ED%2599%2594%25EC%2584%25BC%25ED%2584%25B0.jpg": "5b141f14477399cd67ec1b04bb6e8a37",
"assets/assets/image/%25ED%2596%25A5%25EC%259B%2590%25EC%25A0%2595.jpg": "94351f979304adbb975bf08db1bee38b",
"assets/assets/image/%25ED%2598%25B8%25ED%2598%25B8%25EC%258B%259D%25EB%258B%25B9.jpg": "56e4a4f89f1b325ea5f36f2b9cf85638",
"assets/assets/image/app_icon.png": "31c723e7c37a0830c7d826784ea6d5ef",
"assets/assets/image/chanbin.jpg": "da5b71fd8f7dd1a9fe030c825a754620",
"assets/assets/image/landing.png": "ac8c6f4ab349eb5bd9d51b74527a6597",
"assets/assets/image/onground.jpg": "2d63621213014e277773dfcccb54841b",
"assets/assets/image/profile.png": "b6da96439630a6e1f6fbd687dbc192ca",
"assets/FontManifest.json": "4c1cdf5fca09a211b89774055734ebaf",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4fdbaebce54a6ddec3a1ec2507ab53f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b46adc868e7a4db9f6523703cc6b320f",
"/": "b46adc868e7a4db9f6523703cc6b320f",
"main.dart.js": "17dd59a8c823308a1a817d24a10e6883",
"manifest.json": "e0881a5f32cb6ab3f32655ea8439b07a",
"version.json": "9ad6859c513ca3ac05c73beec04db147"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
