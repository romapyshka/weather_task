(this.webpackJsonpralab_task=this.webpackJsonpralab_task||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(6),o=n.n(r),s=(n(11),n(3)),u=n.n(s),i=n(5),h=n(2),p=(n(13),n(1)),f="2d71286bb9d4a67971e9ff6e1c293ad3",j="https://api.openweathermap.org/data/2.5/";var b=function(){var t=Object(c.useState)(""),e=Object(h.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)({}),o=Object(h.a)(r,2),s=o[0],b=o[1],l=Object(c.useState)(""),d=Object(h.a)(l,2),O=d[0],g=d[1],m=Object(c.useState)(!1),v=Object(h.a)(m,2),w=v[0],x=v[1],y=Object(c.useState)(!1),S=Object(h.a)(y,2),k=S[0],C=S[1];function E(){return(E=Object(i.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:!0===w&&!1===k&&fetch("".concat(j,"weather?q=").concat(O,"&appid=").concat(f)).then((function(t){return t.json()})).then((function(t){b(t),C(!0)}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!1===w&&function(){var t=Object(i.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://ipapi.co/json/",{method:"GET"}).then((function(t){return t.json()})).then((function(t){g(t.city),x(!0)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),setTimeout((function(){return E.apply(this,arguments)}),1),console.log(O),console.log(s),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h2",{children:[" ",s.name]}),Object(p.jsx)("div",{className:"search",children:Object(p.jsx)("input",{type:"text",className:"search_input",placeholder:"Search",onChange:function(t){return a(t.target.value)},value:n,onKeyPress:function(t){"Enter"===t.key&&fetch("".concat(j,"weather?q=").concat(n,"&appid=").concat(f)).then((function(t){return t.json()})).then((function(t){a(""),b(t)}))}})})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.d6e5e1eb.chunk.js.map