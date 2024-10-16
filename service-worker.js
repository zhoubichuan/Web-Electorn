/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "96cc496ad3cd24f632e1363e9eed9f04"
  },
  {
    "url": "assets/css/0.styles.08088c70.css",
    "revision": "120d95446c8fa90a410c3d9c68bf93a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.25a67af1.js",
    "revision": "3d2d5e3daf4186cadacc4bba382a4e1e"
  },
  {
    "url": "assets/js/10.fb919f93.js",
    "revision": "51597a7f287109a4c829abff17278bbf"
  },
  {
    "url": "assets/js/11.52cf10e0.js",
    "revision": "f4538393d1d614ce205976df666b6f27"
  },
  {
    "url": "assets/js/12.ae115e72.js",
    "revision": "286d14664b37b6c045b001e4a9c38a88"
  },
  {
    "url": "assets/js/13.a9f17132.js",
    "revision": "4eb3ff7fe3b03d750a7f24ec371d0f4d"
  },
  {
    "url": "assets/js/14.0467a0cb.js",
    "revision": "4f7992e3ce4556af3442b358f4a3b43d"
  },
  {
    "url": "assets/js/15.1ffe0529.js",
    "revision": "bad78b69dfad519e08e4d475741fe7b6"
  },
  {
    "url": "assets/js/16.fb40166e.js",
    "revision": "55a30ba4f461675c372034b6f00a79a9"
  },
  {
    "url": "assets/js/17.24c17daa.js",
    "revision": "87cb663af29f796b79b01413c25136c4"
  },
  {
    "url": "assets/js/18.e778f005.js",
    "revision": "a5dabee723dcffba517f37fad466eebb"
  },
  {
    "url": "assets/js/19.caf246d2.js",
    "revision": "99874c36ae0ac4a0b25b64fca385fa40"
  },
  {
    "url": "assets/js/2.d6f3f833.js",
    "revision": "8876a614819320c0f4900a29a521b8c3"
  },
  {
    "url": "assets/js/20.0156e043.js",
    "revision": "acfc0da18fe6cde498ea7cb7a44031cd"
  },
  {
    "url": "assets/js/21.99ce1862.js",
    "revision": "5a7d4136602b21ec268f78f578881e94"
  },
  {
    "url": "assets/js/22.0b868ac0.js",
    "revision": "af28750ba184966ab9c2ff6164f196f8"
  },
  {
    "url": "assets/js/23.8da8697c.js",
    "revision": "245a37a456fd76d03f96275495df0922"
  },
  {
    "url": "assets/js/24.b141c370.js",
    "revision": "3edb55c7f363fcf847450cff1ca33835"
  },
  {
    "url": "assets/js/25.81726e7b.js",
    "revision": "78aea6fef47a0153da00374ed68db515"
  },
  {
    "url": "assets/js/26.a24f3be2.js",
    "revision": "546599663c42fd2d03f14a97dd43accd"
  },
  {
    "url": "assets/js/27.9287e13c.js",
    "revision": "86ce0327a35229bc491e261e30ba2d1e"
  },
  {
    "url": "assets/js/28.0634cf62.js",
    "revision": "7fc431561f80b9bf26755473b27c4126"
  },
  {
    "url": "assets/js/29.55192392.js",
    "revision": "7222cb49a28ed68e7c359b3cfeb96cf3"
  },
  {
    "url": "assets/js/3.e590bb49.js",
    "revision": "45524cf88c3df7507edac7e0e9cc51f5"
  },
  {
    "url": "assets/js/30.0f146738.js",
    "revision": "6b537f8574e625ac6c1ceb6a92d809eb"
  },
  {
    "url": "assets/js/31.47cec15d.js",
    "revision": "734f796bcaace84bf969c9ba4a4f4aff"
  },
  {
    "url": "assets/js/32.3c5395a2.js",
    "revision": "731ee7d2a2e1f15f5d7315ff3122c49d"
  },
  {
    "url": "assets/js/33.e16f764f.js",
    "revision": "fabc9e203392c9af8d541b63f559a7ef"
  },
  {
    "url": "assets/js/34.3f3bef09.js",
    "revision": "69ec1e83323206c4f9821f60bae7b830"
  },
  {
    "url": "assets/js/35.319cae51.js",
    "revision": "87a4ee911be25e63d83a7b1ca51b7dcb"
  },
  {
    "url": "assets/js/36.d758c72e.js",
    "revision": "05603c17f2fc1ffba55da17657601d98"
  },
  {
    "url": "assets/js/37.c00712d1.js",
    "revision": "553bb34bbf982b8863752bfe95c9bd59"
  },
  {
    "url": "assets/js/38.0559500d.js",
    "revision": "6ad203536cfb717a45a3e7a706e973f5"
  },
  {
    "url": "assets/js/39.e51b23e3.js",
    "revision": "60767e5cb3c43337b278649ff4ebf0ff"
  },
  {
    "url": "assets/js/4.3f9d2a85.js",
    "revision": "0e8ebdb4235c69b1926fbe379c615217"
  },
  {
    "url": "assets/js/40.1362479d.js",
    "revision": "2d7b93145ce3bcc8f308ab9fae31f0b3"
  },
  {
    "url": "assets/js/41.221f2e7b.js",
    "revision": "5da02e51842e2378314ef1b1f47e82cb"
  },
  {
    "url": "assets/js/42.6eff1e09.js",
    "revision": "20192d5f1b4b2eb7778f5ef680aa3261"
  },
  {
    "url": "assets/js/43.84ea0430.js",
    "revision": "d93fc5703f5b15b4ba88a96fb4434887"
  },
  {
    "url": "assets/js/44.8ef171e2.js",
    "revision": "0f9a06a46b428b8d5463c54f44a32c7e"
  },
  {
    "url": "assets/js/45.da017711.js",
    "revision": "1845d87d01108e4a7be49ddc05560f7a"
  },
  {
    "url": "assets/js/46.6e391b4d.js",
    "revision": "28c7750547e05f703b439f422b252c38"
  },
  {
    "url": "assets/js/47.7d1144af.js",
    "revision": "3cf4576b12a83743b2da9500adb10787"
  },
  {
    "url": "assets/js/48.7f05f728.js",
    "revision": "411814f132f867d13173a57cd69fe79c"
  },
  {
    "url": "assets/js/49.d4abd079.js",
    "revision": "ff8781dcb935c27844e6cfb4761b8560"
  },
  {
    "url": "assets/js/5.c7cb9d27.js",
    "revision": "6946fde7b533853614c9ec664b168044"
  },
  {
    "url": "assets/js/50.e05b4418.js",
    "revision": "9cdbf53e2959cfe0df6da9991d7e35e2"
  },
  {
    "url": "assets/js/51.675cc117.js",
    "revision": "079ea0625f529b36bdbd9b60d3896c6c"
  },
  {
    "url": "assets/js/52.fd04e7e6.js",
    "revision": "7ae2f5b05794c2dbd479bef99f9a169c"
  },
  {
    "url": "assets/js/53.abc4fe68.js",
    "revision": "d222c3f4c290b98a3a4f2c9a43f4da23"
  },
  {
    "url": "assets/js/54.37f7b8ed.js",
    "revision": "3167a2c73f535a87d4b9de8ce35117f0"
  },
  {
    "url": "assets/js/55.c48b66f1.js",
    "revision": "3e8bd89be92d6451d779ad8d6f9b5aad"
  },
  {
    "url": "assets/js/56.c7b509d5.js",
    "revision": "9bbd719e48089048e94a0a6b0f6d19d0"
  },
  {
    "url": "assets/js/57.c484feb6.js",
    "revision": "4f156f1da5e7c559972c89d66faaeee1"
  },
  {
    "url": "assets/js/58.980687dd.js",
    "revision": "14c780f4425920bf8f5afac98b09155b"
  },
  {
    "url": "assets/js/59.e53be778.js",
    "revision": "4b73c8bc82e62bf45e419f0de79bd19a"
  },
  {
    "url": "assets/js/6.0be4e157.js",
    "revision": "40e71cdc62c687fddbd23b61a8b52437"
  },
  {
    "url": "assets/js/60.98d657bb.js",
    "revision": "e5af7506acc531aaa98a59929766bc9c"
  },
  {
    "url": "assets/js/61.86251f78.js",
    "revision": "f37b8e7a9e551468be03cc19ed2c1900"
  },
  {
    "url": "assets/js/62.21d2fa2c.js",
    "revision": "3a7ec8f8cb361fe3a68c1641e796443d"
  },
  {
    "url": "assets/js/63.aac0f1fa.js",
    "revision": "6e5395621481adac18b982102fcb9917"
  },
  {
    "url": "assets/js/64.f9f1fe8f.js",
    "revision": "bc03c59b465d48a642c9a5d3c9864201"
  },
  {
    "url": "assets/js/65.8aa0fd8f.js",
    "revision": "645f69ed33f8378dfb718c46a40edb4b"
  },
  {
    "url": "assets/js/66.b43d7671.js",
    "revision": "1372f9c6aa958d0ad5df495daaadc308"
  },
  {
    "url": "assets/js/67.43a24117.js",
    "revision": "c72d757574418ad0f58e786ec6ae4253"
  },
  {
    "url": "assets/js/68.0b60d082.js",
    "revision": "9a207e694ae5aed9897a8f62adaa4ce2"
  },
  {
    "url": "assets/js/7.94bf6868.js",
    "revision": "9050b93df1abc13e95170de10d31a3f3"
  },
  {
    "url": "assets/js/app.fa43bf20.js",
    "revision": "fb9a510fc2b8cb35227c8d748751489b"
  },
  {
    "url": "assets/js/vendors~docsearch.d3844009.js",
    "revision": "35736f6febdf8d4b98599806c297b51c"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "9c5da4e404877d9a2c0ee246ff18e38b"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "895967322d6ae2e1b4baa549ead57c50"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "065bf22de76091f509a0dbfb7ac79aa1"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "d1ac6586359d52a746288c6825b7a524"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "51c3d23be6c11bcc46a839a2e9c3ecef"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "98eedc01dd6ec67b96204557b82b6904"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "e5370175c07d327a3f5488ad812668b8"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "5d57f556f20880afdc3889f49761ca4f"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "04e4eb8d807ce7b461b96c4df51adb43"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "506ea80ece2294e4d16b74385ffce61b"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "f76fbd6ee78dc5f81aa51e10a390c2df"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "f73a963aa0101c196fcf57e403d2ae3b"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "3e293d17fc3870770e97d0a40ed49ad6"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "b197c794a0384590dfb2b374f40dcf12"
  },
  {
    "url": "base/practice/1.index.html",
    "revision": "88ef72d9715b9189bd3ee08c401021d3"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "8ca166ec969b91edcd72f5ccdb205278"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "ff347a6edc9f407ce4ea3f474d95fac5"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "8fad186f9010c358a86800821718d4f9"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "b2fb169be99cd5636a5ad2d49e724f69"
  },
  {
    "url": "base/practice/test.html",
    "revision": "16205583d96e29fb1c1868fc2725a543"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "e830cf33a1e304efe89fea02862c83d6"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "849359baa15bdc4a9e83025ec9191d5a"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "80b00697e1dfc852b5bed0babc809fc4"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "5f31e9b0d5a220bbf43562b7c4ea79b8"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "5766c3a16aeb1b3dd35f1a11ad785e4f"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "136dd1030263a8e76e9c19df7812a01b"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "8acac734fd14349c0e632db662e9f690"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "fc8276c6089f57800673464399162a81"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "5ee29f45536dc0f729df94842de7d94a"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "3a1329cfc0bdc795dca5180bb3554b35"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "a058eeb0e7369911a4b21a1ec40559f6"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "5f7e0fd017b256cf7acf8e5ca7db0a2a"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "1adbad6ddebe0b9f14ceabcf0fbd6a0e"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "fb726d824b430aff13e3dd0c662adc21"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "e028160ff460b9fc4fae2fa25e95bce4"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "f2b38958b353fba759679f5e2aefc1af"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "d87be7b030a38aa9d654700489984b64"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "92fad44f4d22eb1d0b1c7cc035d37907"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "2bde80db1bb0642841f9414bc4e15df1"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "97d1a4623f5ad87d80054e655af8497d"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "177320eb47e7fe15e50e203927e1042e"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "56e7d51d23d6c873a15380446a99a052"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "c6c8af0061c38b4b078da28c48954b01"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "0950aca96d42285190d237e2387a8b8d"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "0aae7ad477dfdb69d0647df10dc50c28"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
