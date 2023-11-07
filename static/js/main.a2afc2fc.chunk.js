(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(33)},27:function(e,n,t){},28:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a,l,o,i,c,r,d=t(1),p=t.n(d),s=t(13),u=t.n(s),m=(t(27),t(28),t(3)),x=t(34),f=t(4);f.a.div(a||(a=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  background-color: black;\n  color: wheat;\n  padding: 10px;\n"])));const v=f.a.div(l||(l=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 280px;\n  box-shadow: 0 3px 10px 0 #aaa;\n  cursor: pointer;\n"]))),b=f.a.img(o||(o=Object(m.a)(["\n  object-fit: cover;\n  height: 362px;\n"]))),g=f.a.span(i||(i=Object(m.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  margin: 15px 0;\n  /* white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; */\n"]))),w=f.a.div(c||(c=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),h=f.a.span(r||(r=Object(m.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  text-transform: capitalize;\n"])));var E,j,y,O,k,z,S=e=>{const{Title:n,Year:t,Type:a,Poster:l,imdbID:o}=e.movie;return p.a.createElement(v,{onClick:()=>{e.onSelectMovie(o)}},p.a.createElement(b,{src:l,alt:n}),p.a.createElement(g,null,n),p.a.createElement(w,null,p.a.createElement(h,null,"Year: ",t),p.a.createElement(h,null,"Type: ",a)))},M=t(16);const R=f.a.div(E||(E=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 20px 30px;\n  justify-content: center;\n  border-bottom: 1px solid lightgray;\n"]))),T=f.a.img(j||(j=Object(m.a)(["\n  object-fit: cover;\n  height: 350px;\n"]))),I=f.a.div(y||(y=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n"]))),P=f.a.span(O||(O=Object(m.a)(["\n  font-size: 22px;\n  font-weight: 600;\n  color: black;\n  margin: 15px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  & span {\n    opacity: 0.8;\n  }\n"]))),C=f.a.span(k||(k=Object(m.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  overflow: hidden;\n  margin: 4px 0;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n\n  & span {\n    opacity: 0.5;\n  }\n"]))),D=f.a.span(z||(z=Object(m.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: black;\n  background: lightgray;\n  height: fit-content;\n  padding: 8px;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0.8;\n"])));var G,Y,A,F,L,U,_,B,J,X,H,N,q,K=e=>{const[n,t]=Object(d.useState)(),{selectMovie:a}=e;return Object(d.useEffect)(()=>{x.a.get("http://www.omdbapi.com/?i=".concat(a,"&apikey=").concat(Q)).then(e=>{t(e.data),console.log(e.data)})},[a]),p.a.createElement(R,null,n?p.a.createElement(p.a.Fragment,null,p.a.createElement(T,{src:null===n||void 0===n?void 0:n.Poster}),p.a.createElement(I,null,p.a.createElement(P,null,null===n||void 0===n?void 0:n.Type,": ",null===n||void 0===n?void 0:n.Title),p.a.createElement(C,null,"IMDB rating: ",p.a.createElement("span",null,null===n||void 0===n?void 0:n.imdbRating)),p.a.createElement(C,null,"Year: ",p.a.createElement("span",null,null===n||void 0===n?void 0:n.Year)),p.a.createElement(C,null,"Language: ",p.a.createElement("span",null,null===n||void 0===n?void 0:n.Language)),p.a.createElement(C,null,"Rated: ",p.a.createElement("span",null,null===n||void 0===n?void 0:n.Rated)),p.a.createElement(C,null,"Runtime: ",p.a.createElement("span",null,null===n||void 0===n?void 0:n.Runtime)),p.a.createElement(C,null,"Genre: ",p.a.createElement("span",null,null===n||void 0===n?void 0:n.Genre)),p.a.createElement(C,null,"Director: ",p.a.createElement("span",null,null===n||void 0===n?void 0:n.Dictor)),p.a.createElement(C,null,"Actors: ",p.a.createElement("span",null,null===n||void 0===n?void 0:n.Actors)),p.a.createElement(C,null,"Plot: ",p.a.createElement("span",null,null===n||void 0===n?void 0:n.Plot))),p.a.createElement(D,{onClick:()=>e.onSelectMovie()},"X")):"Loading...")};const Q="39d967ab",V=f.a.div(G||(G=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),W=f.a.img(Y||(Y=Object(m.a)(["\n  width: 48px;\n  height: 48px;\n  margin: 15px;\n"]))),Z=f.a.div(A||(A=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),$=f.a.div(F||(F=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: #264653;\n  color: wheat;\n  padding: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 0 3px 6px 0 #555;\n"]))),ee=f.a.div(L||(L=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  background-color: white;\n  border-radius: 6px;\n  width: 50%;\n  align-items: center;\n"]))),ne=f.a.div(U||(U=Object(m.a)(["\n  width: 30px;\n  height: 30px;\n  color: black;\n"]))),te=f.a.input(_||(_=Object(m.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  /* border: none;\n  outline: none; */\n  margin-left: 15px;\n"]))),ae=f.a.div(B||(B=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 30px;\n  justify-content: space-evenly;\n"])));f.a.div(J||(J=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 280px;\n  box-shadow: 0 3px 10px 0 #aaa;\n  cursor: pointer;\n"]))),f.a.img(X||(X=Object(m.a)(["\n  object-fit: cover;\n  height: 362px;\n"]))),f.a.span(H||(H=Object(m.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  margin: 15px 0;\n  /* white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; */\n"]))),f.a.div(N||(N=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),f.a.span(q||(q=Object(m.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  text-transform: capitalize;\n"])));var le=()=>{const[e,n]=Object(d.useState)(),[t,a]=Object(d.useState)(),[l,o]=Object(d.useState)(),[i,c]=Object(d.useState)();return p.a.createElement(Z,null,p.a.createElement($,null,p.a.createElement(V,null,p.a.createElement(W,{src:"https://t3.ftcdn.net/jpg/00/96/08/92/240_F_96089280_lEGIoH9IGb0CF0mf15U7rUewR8wgXIm8.jpg",alt:"movie-logo"}),"MovieUp+"),p.a.createElement(ee,null,p.a.createElement(ne,null,p.a.createElement(M.a,null)),p.a.createElement(te,{placeholder:"Search Movie",onChange:e=>{clearTimeout(t),n(e.target.value);const l=setTimeout(()=>(async e=>{const n=await x.a.get("http://www.omdbapi.com/?s=".concat(e,"&apikey=").concat(Q));o(n.data.Search),console.log(n.data)})(e.target.value),300);a(l)},value:e}))),i&&p.a.createElement(K,{selectMovie:i,onSelectMovie:c}),p.a.createElement(ae,null,(null===l||void 0===l?void 0:l.length)?null===l||void 0===l?void 0:l.map((e,n)=>p.a.createElement(S,{key:n,movie:e,onSelectMovie:c})):"Please search any movie!"))};var oe=function(){return p.a.createElement("div",{className:"App"},p.a.createElement(le,null))};u.a.createRoot(document.getElementById("root")).render(p.a.createElement(p.a.StrictMode,null,p.a.createElement(oe,null)))}},[[19,1,2]]]);
//# sourceMappingURL=main.a2afc2fc.chunk.js.map