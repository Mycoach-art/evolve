/* Evolve : appli rapide. La page vient du réseau (toujours la dernière version), les images, vidéos et voix restent dans le téléphone. */
const BUILD = "8ba4bbf597";
const H = {"img/avatar-holo.webp":"a392841c6d","img/avatar.webp":"a657b20a97","img/b-ankle.webp":"b69f5b7417","img/b-bridge.webp":"88de34dcda","img/b-broad.webp":"bc9e48f2de","img/b-cmj.webp":"8bf4ac5d45","img/b-front.webp":"85844b31eb","img/b-hipflex.webp":"27b08f12a0","img/b-horse.webp":"0c2306cd8c","img/b-sb.webp":"4342ef9998","img/b-side.webp":"3730ecf0ae","img/b-sls.webp":"d59d574ef7","img/b-squat.webp":"a2753c6382","img/k-abdcouche.webp":"4bf98adce5","img/k-abdelastique.webp":"6934186c8c","img/k-espagnol.webp":"0486c44a66","img/k-hipthrust.webp":"caf535cf43","img/k-mollet1j.webp":"6e4042cf57","img/k-nordic1.webp":"11f3b10c90","img/k-nordic2.webp":"f7c8b96e70","img/k-nordic3.webp":"a9d2ce738a","img/k-pont1j.webp":"74dc61ddb1","img/k-receptsaut.webp":"3561a068ec","img/k-squat1j.webp":"e79f60498b","img/m-backext.webp":"9a2abc9cb7","img/m-chestpress.webp":"452cdfd1e5","img/m-couche.webp":"ebebadcd8f","img/m-crunchpoulie.webp":"b0e7132a0e","img/m-curl.webp":"92690adf50","img/m-curlincline.webp":"d37f5c1dde","img/m-curlmarteau.webp":"c88caacd25","img/m-elevlat.webp":"a725e1b1e7","img/m-elevlatpoulie.webp":"26cf341651","img/m-epaules.webp":"762e36c8d1","img/m-facepull.webp":"5dc93ac063","img/m-hack.webp":"9c01c9808b","img/m-hipthrust.webp":"966dbd4004","img/m-incline.webp":"2fe6f94316","img/m-legcurl.webp":"6e4fc41fdd","img/m-legext.webp":"e3f922bbf8","img/m-mollets.webp":"18f8ba0b32","img/m-molletsassis.webp":"00f97374a6","img/m-poulie.webp":"d1ce7147c0","img/m-presse.webp":"230e556ea6","img/m-relevejambes.webp":"7a438c0459","img/m-rowingassis.webp":"bbebd125fe","img/m-rowingbarre.webp":"403f0823ce","img/m-sdt.webp":"94b47d6635","img/m-squat.webp":"458ac4de78","img/m-tractions.webp":"0f8c416a91","img/m-tricepsnuque.webp":"e4fef6ac87","img/p-1jambe.webp":"b9791ec283","img/p-bonds.webp":"620d78bc3c","img/p-bonds1j.webp":"a2c6a30954","img/p-caisse.webp":"ffc0afe54f","img/p-caisse1j.webp":"ffe2de822d","img/p-cheville.webp":"e921d8143b","img/p-descente.webp":"6b5bf6ffca","img/p-drop1.webp":"03fa869ab6","img/p-drop2.webp":"2a250ef9c8","img/p-drop3.webp":"a2054fc93c","img/p-fentes.webp":"42b4516846","img/p-haies.webp":"1f2cbf0f5e","img/p-lateral.webp":"e6bf6d13fd","img/p-longueur.webp":"a1e1b34b57","img/p-mur.webp":"9693488df3","img/p-squatjump.webp":"3ab1973846","img/r-accel.webp":"f0d6f531bc","img/r-cote.webp":"96dc967213","img/r-facile.webp":"cc1d41e4bc","img/r-marche.webp":"d941c3c243","img/run-hero.webp":"020a9b958a","img/run-runner.webp":"659e3ce929","img/s-canape-m.webp":"f14a232c65","img/s-canape.webp":"5d8fba3aa7","img/s-cheville-m.webp":"8f574a178b","img/s-cheville.webp":"66f4faff7f","img/s-chiot-m.webp":"bf5a99d46f","img/s-chiot.webp":"14f9beb55b","img/s-demiecart-m.webp":"c724f23487","img/s-demiecart.webp":"d5edabafcb","img/s-kickav-m.webp":"d487b9d6f8","img/s-kickav.webp":"fa0375bfa6","img/s-kicklat-m.webp":"a49fb161ac","img/s-kicklat.webp":"cc90c4c356","img/s-mollet-m.webp":"74a21be89d","img/s-mollet.webp":"b9ce3fb4b2","img/s-pancake-m.webp":"6f98793221","img/s-pancake.webp":"b09c3f6e89","img/s-papillon-m.webp":"77e7c908da","img/s-papillon.webp":"a6e0a2b0b3","img/s-pigeon-m.webp":"5698fa13d8","img/s-pigeon.webp":"0bb0c13b5e","img/s-rotint-m.webp":"e894c29dc0","img/s-rotint.webp":"f22a31b1da","img/s-rouleau-m.webp":"ae1858b971","img/s-rouleau.webp":"d4d4ff8484","img/s2-canape.webp":"2e4f94d431","img/s2-demiecart.webp":"af315f1160","img/s2-lezard.webp":"80a569e946","img/s2-pancake.webp":"3da0e12953","img/s2-papillon.webp":"9a8f84265a","img/s2-pigeon.webp":"5734473bc3","img/s2-pinceassise.webp":"9de6a49a10","img/s2-pincedebout.webp":"ba5e0a2b58","img/w-chasse.webp":"c6744d2199","img/w-direction.webp":"ba7893ef27","img/w-equilibre.webp":"032356372b","img/w-fente.webp":"283bf0f6d4","img/w-hipin.webp":"956fc7b07b","img/w-hipout.webp":"078b6246bd","img/w-planche.webp":"124590299d","img/w-pointes.webp":"f18360313c","img/x-adducteur.webp":"d5dfe11b73","img/x-birddog.webp":"30fbb89d42","img/x-bras.webp":"23b0efab96","img/x-bras2.webp":"2603ac3f46","img/x-canape.webp":"6b30985578","img/x-cavalier.webp":"f6e9749ab6","img/x-charniere.webp":"6f52e0a894","img/x-chat.webp":"87acd9d029","img/x-cheville.webp":"528e76e126","img/x-chiot.webp":"ea1f125747","img/x-cosaque.webp":"96e3bde27a","img/x-cosaqueleste.webp":"f111a6894e","img/x-cou.webp":"d03e321e23","img/x-curlup.webp":"c17de7a5cf","img/x-demiecart.webp":"650795623d","img/x-ecart.webp":"4306050174","img/x-ecartblocs.webp":"5e792d38ec","img/x-facialsol.webp":"e25c0edfa0","img/x-fente.webp":"ed303d1332","img/x-goodmorning.webp":"0b692b5c99","img/x-hanches.webp":"bff95a9eb3","img/x-hanches2.webp":"457517fac7","img/x-isofacial.webp":"35fd2e5787","img/x-kickarr.webp":"ff0b85d943","img/x-kickav.webp":"d93c5dd9ac","img/x-kicklat.webp":"cb69292b37","img/x-mollet.webp":"12c90bab72","img/x-pancake.webp":"2505b1e8e7","img/x-papillon.webp":"f6f6295a06","img/x-pigeon.webp":"b97ad3ca8e","img/x-pont.webp":"f983ab7597","img/x-pontbox.webp":"4e0e7b2a21","img/x-pontfessier.webp":"c76d79adc4","img/x-rotint.webp":"541dd7a885","img/x-rouleau.webp":"5a4cf8625c","img/x-sidebridge.webp":"815c9aa7b7","img/x-sidebridgek.webp":"5bacf49a14","img/x-squat.webp":"cfce15e7c1","img/x-squatlent.webp":"b78da59a6c","img/x-thoracique.webp":"3dcbd1943d","img/x-vache.webp":"975f844466","img/x-wgs.webp":"f97eb623ec","vid/s-kickav.jpg":"9169098143","vid/s-kickav.mp4":"49a645b250","vid/s-kicklat.jpg":"70c1b6e996","vid/s-kicklat.mp4":"e290b2a326","vid/s2-canape.jpg":"11e0beb85e","vid/s2-demiecart.jpg":"df13015874","vid/s2-lezard.jpg":"a237ae7e57","vid/s2-pancake.jpg":"df5fc5885f","vid/s2-papillon.jpg":"8ee59e4812","vid/s2-pigeon.jpg":"8c1ea2efd4","vid/s2-pinceassise.jpg":"ad7e7ca188","vid/s2-pincedebout.jpg":"fe722b0f8e","vid/x-birddog.jpg":"d0cca00bd3","vid/x-birddog.mp4":"88ae6d91ed","vid/x-bras.jpg":"6528284cb9","vid/x-bras.mp4":"bb4489a051","vid/x-bras2.jpg":"02c5addf6f","vid/x-chat.jpg":"f7ed813089","vid/x-chat.mp4":"3d3f8fd426","vid/x-cou.jpg":"5c1118fd35","vid/x-cou.mp4":"9bb1789b74","vid/x-curlup.jpg":"fcc805b0b7","vid/x-curlup.mp4":"00d3393831","vid/x-hanches.jpg":"a9063c652c","vid/x-hanches.mp4":"53200ff110","vid/x-hanches2.jpg":"486a9f79cc","vid/x-kickarr.jpg":"e3c1e8867e","vid/x-sidebridge.jpg":"db19891a02","vid/x-sidebridge.mp4":"b601e1edb4","vid/x-sidebridgek.jpg":"84550a6f57","vid/x-sidebridgek.mp4":"63498a7491","vid/x-squat.jpg":"ff8a310969","vid/x-thoracique.jpg":"89d785af6e","vid/x-thoracique.mp4":"25e09f72fe","vid/x-wgs.jpg":"ef362a4d79","vid/x-wgs.mp4":"0457f296f2","voix/0b43f44f.mp3":"dcad62c2fa","voix/0f51e766.mp3":"5822a4a042","voix/2845051b.mp3":"16fad55575","voix/33a56102.mp3":"6542b22e27","voix/39ebc4a6.mp3":"3c408ffe09","voix/3f8909c8.mp3":"0bc1e098d4","voix/56a2bb54.mp3":"8b79d4d105","voix/60be2a79.mp3":"9f11401469","voix/65a5f127.mp3":"2134c26b53","voix/6f184485.mp3":"d6c9c2a277","voix/7560eb22.mp3":"8976014aa3","voix/75808c06-2.mp3":"91aad45783","voix/75808c06.mp3":"91aad45783","voix/775c4e58.mp3":"f807f5353e","voix/7b3eefa8.mp3":"646263fc67","voix/7cf24ee9.mp3":"ad3e9d1452","voix/827785d5.mp3":"58130b3332","voix/87a7915a.mp3":"dea126f989","voix/8d0f4d6c.mp3":"96022c82d6","voix/8ec24248.mp3":"ef6dbe881a","voix/970e8620.mp3":"c2ae93809d","voix/9740b376.mp3":"a13de4cf24","voix/97de4435.mp3":"ee8450070b","voix/9e8b71b6.mp3":"f34891d999","voix/9ecabfc1.mp3":"f7c6aee742","voix/9f3f0c95.mp3":"951f57057d","voix/b324d4f4.mp3":"7ce7e3ff10","voix/ba84935e.mp3":"a226c033ba","voix/bda8c658.mp3":"f318d8adb0","voix/bec685de.mp3":"54433ba7b5","voix/cue-encore.mp3":"04fa6c2a46","voix/cue-expire.mp3":"aa5865179b","voix/cue-inspire.mp3":"e17e690335","voix/cue2-encore.mp3":"04fa6c2a46","voix/cue2-expire.mp3":"aa5865179b","voix/cue2-inspire.mp3":"e17e690335","voix/d8463d3b.mp3":"e099d520ea","voix/dc183898.mp3":"3448e1d5f2","voix/dd415d79.mp3":"042778ba0f","voix/e12a61fd.mp3":"359ae334d6","voix/e4719401.mp3":"22960ac34e","voix/e4bdbd43.mp3":"6501563faa","voix/f0269a50.mp3":"3639c5da01","voix/fb48ca3e.mp3":"ff5638030f","voix/fcaac3bb.mp3":"3afe4df722","voix/ff0a7820.mp3":"bca2dea4cc"};            // chemin -> empreinte du fichier
const CORE = "evolve-core-" + BUILD, MEDIA = "evolve-media", FONTS = "evolve-fonts";
const SCOPE = new URL(self.registration.scope);
const BASE = SCOPE.pathname;
const keyOf = p => new URL(p + "?h=" + H[p], SCOPE).href;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CORE).then(c => c.addAll(["./", "manifest.webmanifest", "icon-180.png", "icon-192.png"])).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("evolve-core-") && k !== CORE) await caches.delete(k);
    const c = await caches.open(MEDIA), keep = new Set(Object.keys(H).map(keyOf));
    for (const r of await c.keys()) if (!keep.has(r.url)) await c.delete(r);
    await self.clients.claim();
  })());
});
let warming = null;
async function warm() {
  const c = await caches.open(MEDIA);
  for (const p of Object.keys(H)) {
    const k = keyOf(p);
    if (await c.match(k)) continue;
    try { const r = await fetch(k, { cache: "no-cache" }); if (r.ok) await c.put(k, r); } catch (e) { return }
  }
}
self.addEventListener("message", e => { if (e.data === "warm") { warming = warming || warm().finally(() => { warming = null }); e.waitUntil(warming) } });

function ranged(buf, type, range) {
  const size = buf.byteLength, m = /bytes=(\d*)-(\d*)/.exec(range || "");
  let s = 0, en = size - 1;
  if (m) { if (m[1] === "" && m[2] !== "") { s = Math.max(0, size - Number(m[2])) } else { s = Number(m[1] || 0); if (m[2] !== "") en = Math.min(size - 1, Number(m[2])) } }
  if (s >= size) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  return new Response(buf.slice(s, en + 1), { status: 206, headers: { "Content-Type": type, "Content-Range": `bytes ${s}-${en}/${size}`, "Content-Length": String(en - s + 1), "Accept-Ranges": "bytes" } });
}
async function media(req, p) {
  const c = await caches.open(MEDIA), k = keyOf(p);
  let r = await c.match(k);
  if (!r) {
    try { r = await fetch(k, { cache: "no-cache" }); if (r.ok) await c.put(k, r.clone()); else return r }
    catch (e) { return fetch(req) }
  }
  const range = req.headers.get("range");
  if (range) return ranged(await r.arrayBuffer(), r.headers.get("Content-Type") || "video/mp4", range);
  return r;
}
async function page(req) {
  const c = await caches.open(CORE);
  try {
    const net = await Promise.race([fetch(req, { cache: "no-cache" }), new Promise((_, no) => setTimeout(() => no(new Error("lent")), 2500))]);
    if (net && net.ok) { await c.put("./", net.clone()); return net }
  } catch (e) {}
  return (await c.match("./")) || fetch(req);
}
async function fonts(req) {
  const c = await caches.open(FONTS), hit = await c.match(req);
  const net = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()); return r }).catch(() => hit);
  return hit || net;
}
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.origin === SCOPE.origin && u.pathname.startsWith(BASE)) {
    const p = decodeURIComponent(u.pathname.slice(BASE.length));
    if (H[p]) { e.respondWith(media(req, p)); return }
    if (req.mode === "navigate" || p === "" || p === "index.html") { e.respondWith(page(req)); return }
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req)));
    return;
  }
  if (u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com") e.respondWith(fonts(req));
});
