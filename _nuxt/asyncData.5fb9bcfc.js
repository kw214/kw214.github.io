import{z as _,r as h,A as g,B as P,C as m,m as x,u as b,D as w,E as C}from"./entry.4319d224.js";const k=()=>null;function O(...r){const f=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(f);let[a,c,t={}]=r;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof c!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??k,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const e=_(),l=()=>e.isHydrating?e.payload.data[a]:e.static.data[a],d=()=>l()!==void 0;e._asyncData[a]||(e._asyncData[a]={data:h(l()??t.default()),pending:h(!d()),error:g(e.payload._errors,a)});const n={...e._asyncData[a]};n.refresh=n.execute=(i={})=>{if(e._asyncDataPromises[a]){if(i.dedupe===!1)return e._asyncDataPromises[a];e._asyncDataPromises[a].cancelled=!0}if((i._initial||e.isHydrating&&i._initial!==!1)&&d())return l();n.pending.value=!0;const u=new Promise((s,o)=>{try{s(c(e))}catch(v){o(v)}}).then(s=>{if(u.cancelled)return e._asyncDataPromises[a];let o=s;t.transform&&(o=t.transform(s)),t.pick&&(o=z(o,t.pick)),n.data.value=o,n.error.value=null}).catch(s=>{if(u.cancelled)return e._asyncDataPromises[a];n.error.value=s,n.data.value=b(t.default())}).finally(()=>{u.cancelled||(n.pending.value=!1,e.payload.data[a]=n.data.value,n.error.value&&(e.payload._errors[a]=w(n.error.value)),delete e._asyncDataPromises[a])});return e._asyncDataPromises[a]=u,e._asyncDataPromises[a]};const y=()=>n.refresh({_initial:!0}),D=t.server!==!1&&e.payload.serverRendered;{const i=C();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const s=i._nuxtOnBeforeMountCbs;i&&(P(()=>{s.forEach(o=>{o()}),s.splice(0,s.length)}),m(()=>s.splice(0,s.length)))}D&&e.isHydrating&&d()?n.pending.value=!1:i&&(e.payload.serverRendered&&e.isHydrating||t.lazy)&&t.immediate?i._nuxtOnBeforeMountCbs.push(y):t.immediate&&y(),t.watch&&x(t.watch,()=>n.refresh());const u=e.hook("app:data:refresh",s=>{if(!s||s.includes(a))return n.refresh()});i&&m(u)}const p=Promise.resolve(e._asyncDataPromises[a]).then(()=>n);return Object.assign(p,n),p}function E(...r){const f=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(f);const[a,c,t]=r;return O(a,c,{...t,lazy:!0},null)}function z(r,f){const a={};for(const c of f)a[c]=r[c];return a}export{E as u};
