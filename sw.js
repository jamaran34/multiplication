/* Multiplication & Cie — service worker
   Met l'application en cache pour qu'elle fonctionne sans connexion.
   Après une modification du jeu, changez le numéro de version ci-dessous :
   les appareils récupéreront la nouvelle version à la prochaine ouverture. */

const VERSION = "mc-v2";
const FICHIERS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icone-192.png",
  "./icone-512.png",
  "./icone-512-maskable.png",
  "./icone-apple-180.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(VERSION).then(c=> c.addAll(FICHIERS)).then(()=> self.skipWaiting())
  );
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys()
      .then(cles => Promise.all(cles.filter(c=> c !== VERSION).map(c=> caches.delete(c))))
      .then(()=> self.clients.claim())
  );
});

self.addEventListener("fetch", e=>{
  if(e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(reponse=>{
      // on sert le cache tout de suite, et on rafraîchit en arrière-plan
      const reseau = fetch(e.request).then(r=>{
        if(r && r.status === 200 && r.type === "basic"){
          const copie = r.clone();
          caches.open(VERSION).then(c=> c.put(e.request, copie));
        }
        return r;
      }).catch(()=> reponse);
      return reponse || reseau;
    })
  );
});
