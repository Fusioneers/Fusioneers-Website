import{S as re,i as ie,s as ce,e as m,t as H,c as g,a as p,h as G,d as h,b as r,g as U,F as o,j as ee,G as W,H as ue,k as N,m as V,I as he,J as fe,K as _e,q as ve,o as de,L as te,M as me}from"../chunks/vendor-a0826462.js";import{s as ge}from"../chunks/store-46ef8514.js";function se(n,e,l){const a=n.slice();return a[3]=e[l],a}function le(n,e,l){const a=n.slice();return a[3]=e[l],a}function ae(n){let e,l=n[3].attributes.title+"",a,i;return{c(){e=m("a"),a=H(l),this.h()},l(c){e=g(c,"A",{href:!0,class:!0});var u=p(e);a=G(u,l),u.forEach(h),this.h()},h(){r(e,"href",i="../"+n[3].attributes.title.toLowerCase()),r(e,"class","svelte-2qmt50")},m(c,u){U(c,e,u),o(e,a)},p(c,u){u&1&&l!==(l=c[3].attributes.title+"")&&ee(a,l),u&1&&i!==(i="../"+c[3].attributes.title.toLowerCase())&&r(e,"href",i)},d(c){c&&h(e)}}}function ne(n){let e,l=n[3].attributes.title+"",a,i,c,u;return{c(){e=m("a"),a=H(l),this.h()},l(f){e=g(f,"A",{href:!0,class:!0});var q=p(e);a=G(q,l),q.forEach(h),this.h()},h(){r(e,"href",i="../"+n[3].attributes.title.toLowerCase()),r(e,"class","svelte-2qmt50")},m(f,q){U(f,e,q),o(e,a),c||(u=W(e,"click",oe),c=!0)},p(f,q){q&1&&l!==(l=f[3].attributes.title+"")&&ee(a,l),q&1&&i!==(i="../"+f[3].attributes.title.toLowerCase())&&r(e,"href",i)},d(f){f&&h(e),c=!1,u()}}}function pe(n){let e,l,a,i,c,u,f,q,E,S,J,F,K,P,M,k,I,z,O,y,Q,C,R,X,D=n[0],_=[];for(let s=0;s<D.length;s+=1)_[s]=ae(le(n,D,s));let j=n[0],v=[];for(let s=0;s<j.length;s+=1)v[s]=ne(se(n,j,s));const T=n[2].default,b=ue(T,n,n[1],null);return{c(){e=m("div"),l=m("div"),a=m("div"),i=m("h1"),c=H("Fusioneers"),u=N(),f=m("nav");for(let s=0;s<_.length;s+=1)_[s].c();q=N(),E=m("div"),S=m("span"),J=N(),F=m("span"),K=N(),P=m("span"),M=N(),k=m("div"),I=m("a"),z=H("\xD7"),O=N(),y=m("div");for(let s=0;s<v.length;s+=1)v[s].c();Q=N(),b&&b.c(),this.h()},l(s){e=g(s,"DIV",{class:!0});var d=p(e);l=g(d,"DIV",{class:!0,id:!0});var t=p(l);a=g(t,"DIV",{class:!0});var w=p(a);i=g(w,"H1",{class:!0});var Y=p(i);c=G(Y,"Fusioneers"),Y.forEach(h),w.forEach(h),u=V(t),f=g(t,"NAV",{class:!0});var Z=p(f);for(let A=0;A<_.length;A+=1)_[A].l(Z);Z.forEach(h),q=V(t),E=g(t,"DIV",{class:!0});var L=p(E);S=g(L,"SPAN",{class:!0}),p(S).forEach(h),J=V(L),F=g(L,"SPAN",{class:!0}),p(F).forEach(h),K=V(L),P=g(L,"SPAN",{class:!0}),p(P).forEach(h),L.forEach(h),t.forEach(h),M=V(d),k=g(d,"DIV",{id:!0,class:!0});var B=p(k);I=g(B,"A",{href:!0,class:!0});var $=p(I);z=G($,"\xD7"),$.forEach(h),O=V(B),y=g(B,"DIV",{class:!0});var x=p(y);for(let A=0;A<v.length;A+=1)v[A].l(x);x.forEach(h),B.forEach(h),Q=V(d),b&&b.l(d),d.forEach(h),this.h()},h(){r(i,"class","title svelte-2qmt50"),r(a,"class","title-bar svelte-2qmt50"),r(f,"class","navigation svelte-2qmt50"),r(S,"class","line svelte-2qmt50"),r(F,"class","line svelte-2qmt50"),r(P,"class","line svelte-2qmt50"),r(E,"class","hamburger svelte-2qmt50"),r(l,"class","toolbar svelte-2qmt50"),r(l,"id","toolbar"),r(I,"href","javascript:void(0)"),r(I,"class","closebtn svelte-2qmt50"),r(y,"class","overlay-content svelte-2qmt50"),r(k,"id","mobile-nav"),r(k,"class","overlay svelte-2qmt50"),r(e,"class","site svelte-2qmt50")},m(s,d){U(s,e,d),o(e,l),o(l,a),o(a,i),o(i,c),o(l,u),o(l,f);for(let t=0;t<_.length;t+=1)_[t].m(f,null);o(l,q),o(l,E),o(E,S),o(E,J),o(E,F),o(E,K),o(E,P),o(e,M),o(e,k),o(k,I),o(I,z),o(k,O),o(k,y);for(let t=0;t<v.length;t+=1)v[t].m(y,null);o(e,Q),b&&b.m(e,null),C=!0,R||(X=[W(E,"click",be),W(I,"click",oe)],R=!0)},p(s,[d]){if(d&1){D=s[0];let t;for(t=0;t<D.length;t+=1){const w=le(s,D,t);_[t]?_[t].p(w,d):(_[t]=ae(w),_[t].c(),_[t].m(f,null))}for(;t<_.length;t+=1)_[t].d(1);_.length=D.length}if(d&1){j=s[0];let t;for(t=0;t<j.length;t+=1){const w=se(s,j,t);v[t]?v[t].p(w,d):(v[t]=ne(w),v[t].c(),v[t].m(y,null))}for(;t<v.length;t+=1)v[t].d(1);v.length=j.length}b&&b.p&&(!C||d&2)&&he(b,T,s,s[1],C?_e(T,s[1],d,null):fe(s[1]),null)},i(s){C||(ve(b,s),C=!0)},o(s){de(b,s),C=!1},d(s){s&&h(e),te(_,s),te(v,s),b&&b.d(s),R=!1,me(X)}}}const Ie=async({fetch:n})=>{const a=(await(await n("/site")).json()).site.data.attributes.pages.data;return ge.update(()=>a),{props:{pages:a}}};function be(){console.log("Nav"),document.getElementById("mobile-nav").style.width="100%"}function oe(){console.log("Close"),document.getElementById("mobile-nav").style.width="0%"}function qe(n,e,l){let{$$slots:a={},$$scope:i}=e,{pages:c=[]}=e;return n.$$set=u=>{"pages"in u&&l(0,c=u.pages),"$$scope"in u&&l(1,i=u.$$scope)},[c,i,a]}class we extends re{constructor(e){super();ie(this,e,qe,pe,ce,{pages:0})}}export{we as default,Ie as load};
