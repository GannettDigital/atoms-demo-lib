/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='gannett-atoms-components']"));
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t){let n,o,l=null,s=!1,i=!1,r=arguments.length;for(;r-- >2;)$.push(arguments[r]);for(;$.length>0;){let t=$.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)$.push(t[r]);else"boolean"==typeof t&&(t=null),(i="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(i=!1)),i&&s?l[l.length-1].vtext+=t:null===l?l=[i?{vtext:t}:t]:l.push(i?{vtext:t}:t),s=i}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&$.push(r);t.class=$.join(" "),$.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],g):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,l:!1}}const l="$",s={},i=(t,n,o,s)=>{let i=o.t+l,r=o[i];if((2===o.s||1===o.s&&!t.u.i)&&(s["s-sc"]=r?e(o,s.mode):e(o)),r){let e=n.p.head;if(n.i)if(1===o.s)e=s.shadowRoot;else{const t=s.getRootNode();t.host&&(e=t)}let l=t.m.get(e);if(l||t.m.set(e,l={}),!l[i]){let t;{t=r.content.cloneNode(!0),l[i]=!0;const o=e.querySelectorAll("[data-styles]");n.v(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},a=e=>null!=e,f=e=>e.toLowerCase(),u=(e,t,n,o,l,s)=>{if("class"!==n||s)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!s&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.M(t);o&&o.g&&o.g[n]?m(t,n,l):"ref"!==n&&(m(t,n,null==l?"":l),null!=l&&!1!==l||e.u.k(t,n))}else null!=l&&"key"!==n?((e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",f(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS("http://www.w3.org/1999/xlink",f(t),n):e.setAttribute(t,n))})(t,n,l):(s||e.u.C(t,n)&&(null==l||!1===l))&&e.u.k(t,n);else n=f(n)in t?f(n.substring(2)):f(n[2])+n.substring(3),l?l!==o&&e.u.j(t,n,l):e.u.W(t,n);else if(o!==l){const e=p(o),n=p(l),s=e.filter(e=>!n.includes(e)),i=p(t.className).filter(e=>!s.includes(e)),r=n.filter(t=>!e.includes(t)&&!i.includes(t));i.push(...r),t.className=i.join(" ")}},p=e=>null==e||""===e?[]:e.trim().split(/\s+/),m=(e,t,n)=>{try{e[t]=n}catch(e){}},v=(e,t,n,o,l)=>{const i=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||s,a=n.vattrs||s;for(l in r)a&&null!=a[l]||null==r[l]||u(e,i,l,r[l],void 0,o,n.l);for(l in a)l in r&&a[l]===("value"===l||"checked"===l?i[l]:r[l])||u(e,i,l,r[l],a[l],o,n.l)};let b=!1;const y=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{y(e,t)}))},M=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),s=!1!==e.asyncQueue,i=Promise.resolve(),r=[],a=[],f=[],c=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(m))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},m=()=>{n++,p(a);const t=s?l()+7*Math.ceil(n*(1/22)):Infinity;d(f,t),d(c,t),f.length>0&&(c.push(...f),f.length=0),(o=a.length+f.length+c.length>0)?e.raf(m):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&i.then(()=>p(r))},read:u(a),write:u(f)}}},$=[],g={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},k=(e,t,n)=>{const[o,l,,s,i,r]=e,a={color:{N:"color"}};if(s)for(t=0;t<s.length;t++)a[(n=s[t])[0]]={S:n[1],O:!!n[2],N:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{t:o,T:l,g:Object.assign({},a),s:i,R:r?r.map(C):void 0}},C=e=>({L:e[0],D:e[1],q:!!e[2],B:!!e[3],I:!!e[4]}),j=(e,t)=>a(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,W=(e,t,n)=>{e.P.add(t),e.F.has(t)||(e.F.set(t,!0),e.H?e.queue.write(()=>N(e,t,n)):e.queue.tick(()=>N(e,t,n)))},N=async(e,n,l,s,i,r)=>{if(e.F.delete(n),!e.U.has(n)){if(!(i=e.Z.get(n))){if((r=e.G.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{N(e,n,l)});i=A(e,n,e.J.get(n),l)}((e,n,l,s)=>{try{const i=n.K.host,r=n.K.encapsulation,a="shadow"===r&&e.u.i;let f,c=l;if(a&&(c=l.shadowRoot),!l["s-rn"]){e.V(e,e.u,n,l);const o=l["s-sc"];o&&(e.u.X(l,t(o,!0)),"scoped"===r&&e.u.X(l,t(o)))}if(s.render||s.hostData||i||f){e.Y=!0;const t=s.render&&s.render();let n;e.Y=!1;const i=o(null,n,t),f=e._.get(l)||{};f.o=c,e._.set(l,e.render(l,f,i,a,r))}l["s-rn"]=!0,l["s-rc"]&&(l["s-rc"].forEach(e=>e()),l["s-rc"]=null)}catch(t){e.Y=!1,e.ee(t,8,l,!0)}})(e,e.M(n),n,i),n["s-init"]()}},S=(e,t,n,o,l,s,i,r,f)=>{if(t.type){const c=e.te.get(n);!t.attr||void 0!==c[l]&&""!==c[l]||(r=s&&s.ne)&&a(f=r[t.attr])&&(c[l]=j(t.type,f)),n.hasOwnProperty(l)&&(void 0===c[l]&&(c[l]=j(t.type,n[l])),"mode"!==l&&delete n[l]),o.hasOwnProperty(l)&&void 0===c[l]&&(c[l]=o[l]),O(o,l,function c(t){return(t=e.te.get(e.oe.get(this)))&&t[l]},function u(n,o){(o=e.oe.get(this))&&t.mutable&&E(e,o,l,n,i)})}},E=(e,t,n,o,l,s,i)=>{(i=e.te.get(t))||e.te.set(t,i={}),o!==i[n]&&(i[n]=o,e.Z.get(t)&&!e.Y&&t["s-rn"]&&W(e,t,l))},O=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},A=(e,t,n,o,l,s)=>{try{l=new(s=e.M(t).K),((e,t,n,o,l,s)=>{e.oe.set(o,n),e.te.has(n)||e.te.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,i])=>{S(e,i,n,o,t,l,s)})})(e,s,t,l,n,o)}catch(n){l={},e.ee(n,7,t,!0)}return e.Z.set(t,l),l},T=(e,t,n,o,l,s)=>{if(e.P.delete(t),(l=e.G.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.G.delete(t)),e.le.length&&!e.P.size)for(;s=e.le.shift();)s()},R=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.S&&O(n,t,function n(){return(e.te.get(this)||{})[t]},function n(s){E(e,this,t,j(l.A,s),o)})})},L=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.U.delete(n),e.se.has(n)||(e.ie=!0,e.P.add(n),e.se.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.re(n);)if(e.ae(n)){e.fe.has(t)||(e.G.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.J.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.ce(n)),n["s-cr"]||e.ue(n,"ssrv")||e.i&&1===t.s||(n["s-cr"]=e.pe(""),n["s-cr"]["s-cn"]=!0,e.v(n,n["s-cr"],e.de(n)[0])),1===t.s&&e.i&&!n.shadowRoot&&e.me(n,{mode:"open"}),o={ne:{}},t.g&&Object.keys(t.g).forEach(s=>{(l=t.g[s].N)&&(o.ne[l]=e.ue(n,l))}),o))(e.u,t,n)),e.ve(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.be&&((e,t)=>{for(;t;){if(!e.he(t))return 9!==e.ye(t);t=e.he(t)}})(e.u,t)&&(e.U.set(t,!0),T(e,t),y(e._.get(t),!0),e.u.W(t),e.we.delete(t),[e.G,e.Me,e.J].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,s)=>{if(e.Z.get(t)&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.fe.set(t,!0),e.$e.has(t)||(e.$e.set(t,!0),t["s-ld"]=void 0,e.u.X(t,n));try{y(e._.get(t)),(s=e.Me.get(t))&&(s.forEach(e=>e(t)),e.Me.delete(t))}catch(n){e.ee(n,4,t)}T(e,t)}})(e,this,o)},n.forceUpdate=function(){W(e,this,l)},t.g){const o=Object.entries(t.g);{let e={};o.forEach(([t,{N:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[f(n)];l&&(t[l]=o)})(e,this,t,o)}}R(e,o,n,l)}};((e,t,n,s,r,c,u)=>{const p=n.performance,d={html:{}},m=n[e]=n[e]||{},h=((e,t,n)=>{const o=new WeakMap,l={p:n,i:!!n.documentElement.attachShadow,ge:!1,ye:e=>e.nodeType,ke:e=>n.createElement(e),Ce:(e,t)=>n.createElementNS(e,t),pe:e=>n.createTextNode(e),je:e=>n.createComment(e),v:(e,t,n)=>e.insertBefore(t,n),We:e=>e.remove(),Ne:(e,t)=>e.appendChild(t),X:(e,t)=>{e.classList.add(t)},de:e=>e.childNodes,he:e=>e.parentNode,Se:e=>e.nextSibling,xe:e=>e.previousSibling,Ee:e=>f(e.nodeName),Oe:e=>e.textContent,Ae:(e,t)=>e.textContent=t,ue:(e,t)=>e.getAttribute(t),Te:(e,t,n)=>e.setAttribute(t,n),k:(e,t)=>e.removeAttribute(t),C:(e,t)=>e.hasAttribute(t),ce:t=>t.getAttribute("mode")||(e.Context||{}).mode,Re:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?l.re(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,j:(t,n,s,i,r,a,f,c,u)=>{let p=t,d=s,m=o.get(t);u=n,m&&m[u]&&m[u](),"object"==typeof a&&(p=a),p&&(f=l.ge?{capture:!!i,passive:!!r}:!!i,e.ael(p,n,d,f),m||o.set(t,m={}),m[u]=(()=>{p&&e.rel(p,n,d,f),m[u]=null}))},W:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},Le:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),re:(e,t)=>(t=l.he(e))&&11===l.ye(t)?t.host:t,De:(e,t,n,o)=>e.setAttributeNS(t,n,o),me:(e,t)=>e.attachShadow(t)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),l})(m,n,s),y=h.p.documentElement,w=n["s-defined"]=n["s-defined"]||{},$=(e,t)=>{n.customElements.get(e.t)||(L(g,d[e.t]=e,t.prototype,c,p),t.observedAttributes=Object.values(e.g).map(e=>e.N).filter(e=>!!e),n.customElements.define(e.t,t))},g={u:h,qe:$,M:e=>d[h.Ee(e)],Be:e=>t[e],isClient:!0,ae:e=>!(!w[h.Ee(e)]&&!g.M(e)),ee:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=M(m,n),ve:(e,t)=>{{const n=e.T,o=!h.i;let s=r+n+(o?".sc":"")+".entry.js";import(s).then(n=>{try{e.K=n[(e=>f(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.t)],function o(e,t,n,s,i){if(s){const n=t.t+(i||l);if(!t[n]){const o=e.ke("template");t[n]=o,o.innerHTML=`<style>${s}</style>`,e.Ne(e.p.head,o)}}}(h,e,e.s,e.K.style,e.K.styleMode),W(g,t,p)}catch(t){console.error(t),e.K=class{}}},e=>console.error(e,s))}},Y:!1,H:!1,be:!1,V:i,G:new WeakMap,m:new WeakMap,se:new WeakMap,we:new WeakMap,$e:new WeakMap,fe:new WeakMap,oe:new WeakMap,J:new WeakMap,Z:new WeakMap,U:new WeakMap,F:new WeakMap,Me:new WeakMap,Ie:new WeakMap,_:new WeakMap,te:new WeakMap,P:new Set,le:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=s,t.resourcesUrl=t.publicPath=r,m.h=o,m.Context=t,m.onReady=(()=>new Promise(e=>g.queue.write(()=>g.P.size?g.le.push(e):e()))),g.render=((e,t)=>{let n,o,l,s,i,r,f;const c=(l,p,d,m,h,y,w,M,$)=>{if(M=p.vchildren[d],n||(s=!0,"slot"===M.vtag&&(o&&t.X(m,o+"-s"),M.vchildren?M.Pe=!0:M.Fe=!0)),a(M.vtext))M.o=t.pe(M.vtext);else if(M.Fe)M.o=t.pe("");else{if(y=M.o=b||"svg"===M.vtag?t.Ce("http://www.w3.org/2000/svg",M.vtag):t.ke(M.Pe?"slot-fb":M.vtag),e.ae(y)&&e.fe.delete(f),b="svg"===M.vtag||"foreignObject"!==M.vtag&&b,v(e,null,M,b),a(o)&&y["s-si"]!==o&&t.X(y,y["s-si"]=o),M.vchildren)for(h=0;h<M.vchildren.length;++h)(w=c(l,M,h,y))&&t.Ne(y,w);"svg"===M.vtag&&(b=!1)}return M.o["s-hn"]=r,(M.Pe||M.Fe)&&(M.o["s-sr"]=!0,M.o["s-cr"]=i,M.o["s-sn"]=M.vname||"",($=l&&l.vchildren&&l.vchildren[d])&&$.vtag===M.vtag&&l.o&&u(l.o)),M.o},u=(n,o,l,i)=>{e.be=!0;const a=t.de(n);for(l=a.length-1;l>=0;l--)(i=a[l])["s-hn"]!==r&&i["s-ol"]&&(t.We(i),t.v(y(i),i,h(i)),t.We(i["s-ol"]),i["s-ol"]=null,s=!0),o&&u(i,o);e.be=!1},p=(e,n,o,l,s,i,f,u)=>{const p=e["s-cr"];for((f=p&&t.he(p)||e).shadowRoot&&t.Ee(f)===r&&(f=f.shadowRoot);s<=i;++s)l[s]&&(u=a(l[s].vtext)?t.pe(l[s].vtext):c(null,o,s,e))&&(l[s].o=u,t.v(f,u,h(n)))},d=(e,n,o,s)=>{for(;n<=o;++n)a(e[n])&&(s=e[n].o,l=!0,s["s-ol"]?t.We(s["s-ol"]):u(s,!0),t.We(s))},m=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),h=e=>e&&e["s-ol"]?e["s-ol"]:e,y=e=>t.he(e["s-ol"]?e["s-ol"]:e),w=(n,o,l)=>{const s=o.o=n.o,i=n.vchildren,r=o.vchildren;b=o.o&&a(t.re(o.o))&&void 0!==o.o.ownerSVGElement,b="svg"===o.vtag||"foreignObject"!==o.vtag&&b,a(o.vtext)?(l=s["s-cr"])?t.Ae(t.he(l),o.vtext):n.vtext!==o.vtext&&t.Ae(s,o.vtext):("slot"!==o.vtag&&v(e,n,o,b),a(i)&&a(r)?((e,n,o,l,s,i,r,f)=>{let v=0,b=0,M=n.length-1,$=n[0],g=n[M],k=l.length-1,C=l[0],j=l[k];for(;v<=M&&b<=k;)if(null==$)$=n[++v];else if(null==g)g=n[--M];else if(null==C)C=l[++b];else if(null==j)j=l[--k];else if(m($,C))w($,C),$=n[++v],C=l[++b];else if(m(g,j))w(g,j),g=n[--M],j=l[--k];else if(m($,j))"slot"!==$.vtag&&"slot"!==j.vtag||u(t.he($.o)),w($,j),t.v(e,$.o,t.Se(g.o)),$=n[++v],j=l[--k];else if(m(g,C))"slot"!==$.vtag&&"slot"!==j.vtag||u(t.he(g.o)),w(g,C),t.v(e,g.o,$.o),g=n[--M],C=l[++b];else{for(s=null,i=v;i<=M;++i)if(n[i]&&a(n[i].vkey)&&n[i].vkey===C.vkey){s=i;break}a(s)?((f=n[s]).vtag!==C.vtag?r=c(n&&n[b],o,s,e):(w(f,C),n[s]=void 0,r=f.o),C=l[++b]):(r=c(n&&n[b],o,b,e),C=l[++b]),r&&t.v(y($.o),r,h($.o))}v>M?p(e,null==l[k+1]?null:l[k+1].o,o,l,b,k):b>k&&d(n,v,M)})(s,i,o,r):a(r)?(a(n.vtext)&&t.Ae(s,""),p(s,null,o,r,0,r.length-1)):a(i)&&d(i,0,i.length-1)),b&&"svg"===o.vtag&&(b=!1)},M=(e,n,o,l,s,i,r,a)=>{for(l=0,s=(o=t.de(e)).length;l<s;l++)if(n=o[l],1===t.ye(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,i=0;i<s;i++)if(o[i]["s-hn"]!==n["s-hn"])if(a=t.ye(o[i]),""!==r){if(1===a&&r===t.ue(o[i],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Oe(o[i]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,s,i,r,a,f,c,u)=>{for(i=0,r=(n=t.de(e)).length;i<r;i++){if((o=n[i])["s-sr"]&&(s=o["s-cr"]))for(f=t.de(t.he(s)),c=o["s-sn"],a=f.length-1;a>=0;a--)(s=f[a])["s-cn"]||s["s-nr"]||s["s-hn"]===o["s-hn"]||((3===(u=t.ye(s))||8===u)&&""===c||1===u&&null===t.ue(s,"slot")&&""===c||1===u&&t.ue(s,"slot")===c)&&($.some(e=>e.He===s)||(l=!0,s["s-sn"]=c,$.push({Qe:o,He:s})));1===t.ye(o)&&g(o)}};return(a,c,u,p,d,m,v,b,h,y,k,C)=>{if(f=a,r=t.Ee(f),i=f["s-cr"],n=p,o=f["s-sc"],s=l=!1,w(c,u),s){for(g(u.o),v=0;v<$.length;v++)(b=$[v]).He["s-ol"]||((h=t.pe(""))["s-nr"]=b.He,t.v(t.he(b.He),b.He["s-ol"]=h,b.He));for(e.be=!0,v=0;v<$.length;v++){for(b=$[v],k=t.he(b.Qe),C=t.Se(b.Qe),h=b.He["s-ol"];h=t.xe(h);)if((y=h["s-nr"])&&y&&y["s-sn"]===b.He["s-sn"]&&k===t.he(y)&&(y=t.Se(y))&&y&&!y["s-nr"]){C=y;break}(!C&&k!==t.he(b.He)||t.Se(b.He)!==C)&&b.He!==C&&(t.We(b.He),t.v(k,b.He,C))}e.be=!1}return l&&M(u.o),$.length=0,u}})(g,h),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=(()=>{g.fe.set(y,m.loaded=g.H=!0),h.Le(n,"appload",{detail:{namespace:e}})}),u.map(k).forEach(e=>$(e,class extends HTMLElement{})),g.ie||y["s-init"](),((e,t,n,o,l,s)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.M(t);if(o)if(e.fe.has(t))n(t);else{const o=e.Me.get(t)||[];o.push(n),e.Me.set(t,o)}return!!o}),l){for(s=l.length-1;s>=0;s--)t.componentOnReady(l[s][0],l[s][1])&&l.splice(s,1);for(s=0;s<o.length;s++)if(!n[o[s]].componentOnReady)return;for(s=0;s<l.length;s++)l[s][1](null);l.length=0}})(g,m,n,n["s-apps"],n["s-cr"]),m.initialized=!0,g})(n,x,w,d,r,h,c);
})(window,document,{},"GannettAtomsComponents","hydrated",[["gannett-atoms-component-bar-cp-wrapper","okgbnxjg",1,0,1],["gannett-atoms-component-bar-uw-wrapper","mlcxdskg",1,0,1],["gannett-atoms-component-demo-entry","duvfiwc6",1,[["description",1,0,1,2]],1],["gannett-atoms-component-demo-head","7eumeok1",1,[["text",1,0,1,2]]],["gannett-atoms-component-demo-links","stlo4g1s",1,0,1],["gannett-atoms-component-demo-wrapper","1a4zmz90",1,[["compName",1,0,"comp-name",2],["isIndex",1,0,"is-index",4]],1],["gannett-atoms-component-ui-button","stlo4g1s",1,[["bgColor",1,0,"bg-color",2],["target",1,0,1,2],["textColor",1,0,"text-color",2],["url",1,0,1,2]],1]]);