(this["webpackJsonpchord-generator"]=this["webpackJsonpchord-generator"]||[]).push([[0],{16:function(t,n,e){},18:function(t,n,e){},20:function(t,n,e){"use strict";e.r(n);var c,r=e(1),a=e.n(r),o=e(9),i=e.n(o),s=(e(16),e(8)),u=e.n(s),j=e(10),d=e(5),l=e(4),h=e(2),f=e(11),b=(e(18),e(0)),O={C:"A",G:"E",D:"B",A:"F\u266f",E:"C\u266f",B:"G\u266f","F\u266f":"D\u266f","C\u266f":"A\u266f","G\u266d":"E\u266d","D\u266d":"B\u266d","A\u266d":"F","E\u266d":"C","B\u266d":"G",F:"D"},v=Object.keys(O),m=Object.values(O),p=["\u266d","\u266f"],g=["root position","1st inversion","2nd inversion"],x=(c=[]).concat.apply(c,Object(f.a)(["A","B","C","D","E","F","G"].map((function(t){return"B"===t||"E"===t?["".concat(t).concat(p[0]),"".concat(t)]:["".concat(t).concat(p[0]),"".concat(t),"".concat(t).concat(p[1])]})))).filter((function(t){return!["F\u266d","C\u266d","B\u266f","E\u266f"].includes(t)})),C=function(t,n,e){var c="maj"===n?4:3,r=e.length-1-e.indexOf(t);return r<c?e[c-r-1]:e[e.indexOf(t)+c]},F=function(t,n){var e=n.indexOf(t);return e!==n.length-1?n[e+1]:("D\u266f"===t&&console.log(n,n(0)),n[0])},B=function(t,n){return t.includes("\u266d")?n.filter((function(t){return!t.includes("\u266f")})):n.filter((function(t){return!t.includes("\u266d")}))},E=function(t,n){var e=t.root,c=t.fifth,r=t.third;return 0===n?"".concat(e," ").concat(r," ").concat(c):1===n?"".concat(r," ").concat(c," ").concat(e):2===n?"".concat(c," ").concat(e," ").concat(r):void 0},y=function(t,n){var e=Object.keys(t),c=e[Math.floor(Math.random()*e.length)];return{chord:"".concat(c).concat(t[c].quality),notes:E(t[c],n)}};var N=function(){var t=Object(r.useState)({chord:"Cmaj",notes:"C E G"}),n=Object(d.a)(t,2),e=n[0],c=n[1],a=Object(r.useState)(function(){var t=v.reduce((function(t,n){return Object(h.a)(Object(h.a)({},t),{},Object(l.a)({},n,{quality:"maj",root:n,fifth:F(n,v),third:C(n,"maj",B(n,x))}))}),{}),n=m.reduce((function(t,n){return Object(h.a)(Object(h.a)({},t),{},Object(l.a)({},n,{quality:"m",root:n,fifth:F(n,m),third:C(n,"m",B(n,x))}))}),{});return Object(h.a)(Object(h.a)({},n),t)}()),o=Object(d.a)(a,2),i=o[0],s=(o[1],Object(r.useState)(0)),f=Object(d.a)(s,2),O=f[0],p=f[1],E=Object(r.useState)(!1),N=Object(d.a)(E,2),k=N[0],w=N[1],D=function(){var t=Object(j.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Math.floor(Math.random()*g.length),t.next=3,p(n);case 3:c(y(i,n)),w(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"navbar",children:Object(b.jsx)("h1",{children:"Chord generator"})}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{className:"chord",children:e.chord}),Object(b.jsx)("p",{className:"inversion",children:g[O]}),Object(b.jsx)("button",{className:"generate",onClick:function(){return D()},children:"New chord"}),k?Object(b.jsxs)("p",{children:["notes: ",e.notes]}):Object(b.jsx)("button",{className:"generate",onClick:function(){w(!0)},children:"Show answer"})]})]})},k=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,21)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;e(t),c(t),r(t),a(t),o(t)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),k()}},[[20,1,2]]]);
//# sourceMappingURL=main.1fa94001.chunk.js.map