if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const o=e=>s(e,c),d={module:{uri:c},exports:t,require:o};i[c]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-ebe9daa4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/style.css",revision:"eecb48d89505960f196d9a0ab16f995f"},{url:"images/plane-128.png",revision:"d33cc097313fdc5acde297c5348f9137"},{url:"images/plane-16.png",revision:"164930d5481e8cdb61707785beb7dc84"},{url:"images/plane-512.png",revision:"226aa1a021ad15c91cba4218584a72a2"},{url:"index.html",revision:"b3427d201d01ef1d349a151b8abb34e9"},{url:"manifest.json",revision:"8492691a988b01f9cba538c3debc902d"},{url:"script.js",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map