(this["webpackJsonpbgg-react"]=this["webpackJsonpbgg-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=n(6),i=n.n(a),l=n(4),j=n(7),o=n(2),u=(n(16),function(e){return fetch(e).then((function(e){return e.text()})).then((function(e){return(new o.DOMParser).parseFromString(e)}))}),b=function(e){var t=e.xml;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:Object(o.ValueOf)({xml:t,select:"image"}),style:{maxHeight:"200px"},alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.ValueOf,{xml:t,select:"name"})," ","(",Object(c.jsx)(o.ValueOf,{xml:t,select:"yearpublished"}),")"]})]})},d=function(e){var t=e.username,n=Object(j.a)("https://boardgamegeek.com/xmlapi2/collection?username=".concat(t),u,{revalidateOnFocus:!1,revalidateOnReconnect:!1,refreshWhenOffline:!1,refreshWhenHidden:!1,refreshInterval:0}),r=n.data,s=n.error;return r||s?s?(console.log(s),Object(c.jsx)("div",{children:" Error loading "})):Object(c.jsx)(o.ApplyTemplate,{xml:r,select:"//item",Component:b}):Object(c.jsx)("div",{children:" Loading... "})},O=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(),i=Object(l.a)(a,2),j=i[0],o=i[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("h1",{children:" BGG User "}),Object(c.jsx)("input",{value:n,onChange:function(e){return s(e.target.value)}})]}),Object(c.jsx)("div",{children:j?Object(c.jsx)(d,{username:j}):Object(c.jsxs)("button",{onClick:function(){return o(n)},children:["Load ",n]})})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8d3ba121.chunk.js.map