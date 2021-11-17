(this["webpackJsonpomdb-review"]=this["webpackJsonpomdb-review"]||[]).push([[0],{66:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(11),i=c.n(r),l=(c(41),c(68)),s=c(69),o=c(70),j=c.p+"static/media/logo.6ce24c58.svg",d=c(1);function u(){return Object(d.jsx)(l.a,{children:Object(d.jsx)(s.a,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)("img",{src:j,width:"40px",alt:"OMDb movie"}),Object(d.jsx)("h3",{className:"text-center",children:"OMDB Movie"})]})})})}var b=c(6),O=c(31),h=c.n(O);var v=function(){var e=Object(n.useState)("#000000"),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useRef)(null);return Object(d.jsx)(l.a,{fluid:!0,children:Object(d.jsx)(s.a,{style:{background:c},children:Object(d.jsx)(o.a,{children:Object(d.jsxs)("p",{style:{textAlign:"center"},children:[Object(d.jsxs)("span",{style:{background:"white"},onClick:function(){return r.current.click()},children:["Your favorite color is ",h()(c)]}),Object(d.jsx)("input",{ref:r,type:"color",value:c,onChange:function(e){return a(e.target.value)},style:{display:"none"}})]})})})})};function x(e){var t=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{children:Object(d.jsx)(u,{})}),Object(d.jsx)("section",{style:{paddingBottom:"80px"},children:t}),Object(d.jsx)("footer",{style:{position:"fixed",left:0,bottom:0,width:"100%",maxHeight:"80px"},children:Object(d.jsx)(v,{})})]})}var p,f,m,y=c(8),g=c(2),k=c(12),w=c.n(k),T=c(21),S=c.n(T),C=c(32),D=w.a.CancelToken,Y=null,B=null!==(p=null===(f=window)||void 0===f||null===(m=f.location)||void 0===m?void 0:m.protocol)&&void 0!==p?p:"http:",I=function(){var e=Object(C.a)(S.a.mark((function e(t){var c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y&&Y.cancel("Operation canceled by the user."),e.prev=1,Y=D.source(),e.next=5,w.a.get("".concat(B.split(":")[0],"://www.omdbapi.com/?s=").concat(t,"&&type=movie&apikey=").concat("1cd8680c"),{cancelToken:Y.token});case 5:return c=e.sent,Y=null,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(1),w.a.isCancel(e.t0)||(Y=null),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),M=c(76),N=c(77),P=c(71),A=c(72),R=c(75),E=c(78),H=c(74),z=c(73);var F=function(){var e,t=Object(n.useState)(""),c=Object(b.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(!0),s=Object(b.a)(i,2),o=s[0],j=s[1],u=Object(n.useState)({}),O=Object(b.a)(u,2),h=O[0],v=O[1],x=Object(n.useState)({}),p=Object(b.a)(x,2),f=p[0],m=p[1],w=Object(n.useState)({}),T=Object(b.a)(w,2),S=T[0],C=T[1],D=Object(n.useState)(!1),Y=Object(b.a)(D,2),B=Y[0],F=Y[1],G=function(){F(!1),C({})};Object(n.useEffect)((function(){a||(v({}),j(!1))}),[a]);var J=function(e){m((function(t){var c=Object.assign({},t);return delete c[e],c}))};return Object(d.jsxs)(l.a,{children:[Object(d.jsxs)("div",{className:"",children:["Welcome to OMDb Review.",Object(d.jsx)("br",{}),"Search for your favourite movies and save it to playlist."]}),Object(d.jsxs)(M.a,{size:"lg",children:[Object(d.jsx)(M.a.Text,{id:"inputGroup-sizing-lg",children:"Search"}),Object(d.jsx)(N.a,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",type:"text",value:a,name:"search",placeholder:"Search Movie by Title",onChange:function(e){r(e.target.value),e.target.value&&(j(!0),I(e.target.value).then((function(e){var t;v(null!==(t=null===e||void 0===e?void 0:e.data)&&void 0!==t?t:{}),j(!1)})).catch((function(e){Object(k.isCancel)(e)||j(!1)})))}})]}),Object(d.jsx)("div",{id:"snackbar",className:(null===h||void 0===h?void 0:h.Error)?"show":"",children:null===h||void 0===h?void 0:h.Error}),o?Object(d.jsx)(P.a,{animation:"border",role:"status",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):null,(null===h||void 0===h||null===(e=h.Search)||void 0===e?void 0:e.length)&&Object(d.jsx)(A.a,{children:h.Search.map((function(e){var t;return Object(d.jsxs)(R.a,{className:"mb-2",children:[Object(d.jsx)(R.a.Img,{variant:"top",fluid:!0,src:null===e||void 0===e?void 0:e.Poster,alt:null!==(t=null===e||void 0===e?void 0:e.Title)&&void 0!==t?t:"poster"}),Object(d.jsxs)(R.a.Body,{children:[Object(d.jsx)(R.a.Title,{children:null===e||void 0===e?void 0:e.Title}),Object(d.jsxs)(R.a.Text,{children:["Release Year: ",null===e||void 0===e?void 0:e.Year]}),f[e.imdbID]?Object(d.jsx)(E.a,{variant:"secondary",onClick:function(){return J(e.imdbID)},children:"Already Added"}):Object(d.jsx)(E.a,{variant:"primary",onClick:function(){C(e),F(!0)},children:"Add to Playlist"})]})]},e.imdbID)}))}),Object(d.jsxs)(H.a,{show:B,onHide:G,children:[Object(d.jsx)(H.a.Header,{closeButton:!0,children:Object(d.jsxs)(H.a.Title,{children:["Add ",S.Title," to Playlist?"]})}),Object(d.jsxs)(H.a.Footer,{children:[Object(d.jsx)(E.a,{variant:"secondary",onClick:G,children:"No"}),Object(d.jsx)(E.a,{variant:"primary",onClick:function(){m((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(y.a)({},S.imdbID,S))})),C({}),F(!1)},children:"Yes"})]})]}),!!Object.keys(f).length&&Object(d.jsxs)(A.a,{children:[Object(d.jsx)(R.a,{children:Object(d.jsx)(R.a.Header,{children:"Your Playlist:"})}),Object.keys(f).map((function(e){var t=f[e];return Object(d.jsxs)(R.a,{children:[Object(d.jsx)(z.a,{fluid:!0,src:t.Poster,alt:t.Title}),Object(d.jsxs)(R.a.Body,{children:[Object(d.jsx)(R.a.Title,{children:t.Title}),Object(d.jsxs)(R.a.Text,{children:["Release Year: ",t.Year]}),Object(d.jsx)(E.a,{variant:"secondary",onClick:function(){return J(e)},children:"Remove From Playlist"})]})]},"playlist-item-".concat(e))}))]})]})};var G=function(){return Object(d.jsx)(x,{children:Object(d.jsx)(F,{})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(G,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.ad5c32d0.chunk.js.map