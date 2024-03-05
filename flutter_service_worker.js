'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "5c047fc61c5bfae06e526a533acd558b",
"/": "5c047fc61c5bfae06e526a533acd558b",
"main.dart.js": "48758a01aeca008775ecdf170cfe2387",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "62bbd9c7546199eafa22b33a718aed0c",
".git/objects/95/95fe9990f05b68fdc93cdd2de06549ddc13315": "73e567523ad429606edded9de31fc825",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3e/49bbf71309cc4b9f113029c822c33ff53e6c7e": "8b6f23c015b8dc4aa53d4e9ac66d2d2f",
".git/objects/6a/b103a10e5573bf696007e126ceb9b2d307eae9": "7a8291150103ebede6ace3cf18b65625",
".git/objects/0e/631458a236bfca178d6b30e2b7e655d48e337c": "879a4b35f1c8a9e283dccb3917af6166",
".git/objects/a4/f6091eb379936ae032df1faa149a2e8254b18e": "9b0d950a36375d78abd28fec21d2839a",
".git/objects/d9/db064025b6c13ff6e0e918cefd9094fef3df14": "17419f5acd3c365289c9f26ae60d270b",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/dfd7459e9693f28786ee58f39388fc12ebe1dd": "83bb6cc967bfd98c04e455e6fc4a8330",
".git/objects/a2/07f77e2f3d14a95d1c0a8e161f0e573f27a333": "48d121f772f6f326d32d0d72df0e8bd6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/3313998f88c7e9ed6d83cf8c684bb983234c1f": "619115af719bc00bfd4dc89cc72d2a3b",
".git/objects/d8/dd505232a7c18a18bcbc2bddb3d18204cf3fae": "04d88fb65e9040191f214bc29fdd6370",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/ee/5217400d4ad6986f58bce618cb8b4b97d9d540": "2e3f12ee88223417d4fd7804cceaa2ee",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/d48435be5f0054c80b76ef8c52ac3f98dac896": "b59a746ddacf55a4cd05f01c64c8cb8e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/8d8f1e2ca0668cc016c2ef5c9b98081755ae8e": "95c091ae1992af6b8b15424c2166e565",
".git/objects/4b/c35b9bd3815f5fcd1784eb39209a3ef5db7640": "a443062495c1616110f2c51f8196c621",
".git/objects/4b/9c03bb15281d5f84da7d089d10733c7969c1d7": "ea78e88cde297c935812f28373f958a6",
".git/objects/11/5dccbefe97337b398cf6d21fac98ba60997d19": "ae38cf44b6b53bf38ce0d7e406b510f9",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/f03d39834ec914adcac4e0e3e4084b5db8a718": "5ccf42de1cf8cb1c94fa27935041798d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/d58a2e5dcc6a3ad47c3eeb004001fc1275d710": "257d1e495a17a3a79b065dd034e8c3b5",
".git/objects/5e/7e14466a2b4516e73e6369695c735ee6cfeef3": "cbc626de31a7839fb64e689ff04f8db9",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/bf/751f724a7d26acfc03956a842442afacda547f": "ce1802bfedc07c3f8e95972cf8bf1814",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/e1b1c155597884b8dde0e7fcc4045d485e529c": "95c077706978970694762f1fb19cd6d4",
".git/objects/b6/95e70e462999c0daf1d4eb2f1730e85580d1e8": "e3314aee5bf2923fa6edcb66b9452e35",
".git/objects/aa/09a3fe67c2b5b50c3cbef39afc51cf1118751d": "3e6a0596b1f4f80621f27630a79d6a9d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/f002c40aa06a3be3a4cbd5592c2f630b0cc8a3": "ba615b2ef90172cc7306d99f38574161",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/059c12a02a406a95a89ff881e78bb01eff6419": "9fe70e1e78d6f0515d5f7442f192e73f",
".git/objects/c3/5014b29b514bfed04432dd36b794d6358babaf": "af94dc04cca3134b5f516912a2da033b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ff/f5a3cd338d1907f3d33d73a60d81cee7966d68": "cfc0de34e72c6213eb22a963e9e4659b",
".git/objects/e7/68b28bbaa56be993d9639ab212f01fd6bb0edf": "2e5171acad540d19e4f97f91acb16fc1",
".git/objects/46/b176890cd2d122de9193441ca0dd0c2363a4a8": "517764304a51178ff96eafefb5a79d6c",
".git/objects/41/612c60f68557db335dfd321d262f65c6efc5a0": "5a762a5133e37d75c8fd2426b44598ce",
".git/objects/24/894fe9000576a207961875cd25d3b22ae0837e": "e12b684d8bef316ccbca8bb6012e2016",
".git/objects/23/ef9072a5b92e85651ae44845226c20f1dd100d": "392b6d763a00d079aa153c8125e8dbf5",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8d/19030090c8d6ccd341d1bff7bef7d96ddf93bc": "e0c5d0e5beddf8078421492a4c7c9c20",
".git/objects/12/26ca9c345cb53c24130fb0241ae5b54bc7b208": "3c0a6aae15b875475abe70e78e4ab1e0",
".git/objects/85/d919f99c3d3577b8340ca63368dd0a195a4f08": "f38fade52e251910df19d93a25a24625",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/13/e5fecf440d6f82188f0dbf40d188cd84f3b29d": "e674838371439d9b7c2923f1779c9d2b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad6ee1116df93942935b776b87696a08",
".git/logs/refs/heads/main": "ae8c3d0ffb0344950c4844585cfe4ca4",
".git/logs/refs/remotes/origin/main": "0d77cd3124a55b4c1f5e73634e680842",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "81a9fedb9b4090455df5ba3ca978854c",
".git/refs/remotes/origin/main": "81a9fedb9b4090455df5ba3ca978854c",
".git/index": "3174c385195c427346e2a2e1164b7eca",
".git/COMMIT_EDITMSG": "e33e0105cf01509f12749536f9378214",
"assets/AssetManifest.json": "c2ff056a3432ed0ac87e6752af52a9c3",
"assets/NOTICES": "0c2a5451714540a7f180a14fac1b9ea7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "8bbeba6a6c96b3c6c2296fd5c219b0e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b397154b238f9fbff7f9b55410399f4f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6cfb78e5596cd0d302e26a95df1b4631",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/ebeachCover.png": "292248c059112df39c759eca1d0047ea",
"assets/assets/images/IMG_20220707_235526_990.jpg": "dfa9031ec2084f1946e0cc691f207a2a",
"assets/assets/images/passportimg.jpg": "b70c1244b5943ceb8ff20546084203cb",
"assets/assets/images/blog_image_1.png": "bd69148a00d8bfede377be5eecb6b2b6",
"assets/assets/images/ashaTripCover.png": "859fd1fe40021bc8d08f1fe995e0b5c8",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "ab9b8605641422ec29a99434f3c5e2d5",
"canvaskit/canvaskit.js.symbols": "4e6e9cb94178bb5bbe82867a529bf1cf",
"canvaskit/skwasm.wasm": "a57540484eaaf16cabc66dae4959e60d",
"canvaskit/chromium/canvaskit.js.symbols": "4a107a709d356e8c98df2d6a1dd3793e",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.wasm": "b5348b696a8243904761bc52959a4b29",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.wasm": "64cc1c11c34313697f61d40fa90dd69d",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
