(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(33)},27:function(e,n,t){},28:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a,l,o,i,c,r=t(1),d=t.n(r),p=t(13),s=t.n(p),m=(t(27),t(28),t(3)),u=t(34),b=t(4);const f=b.a.div(a||(a=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 280px;\n  box-shadow: 0 3px 10px 0 #aaa;\n  cursor: pointer;\n"]))),g=b.a.img(l||(l=Object(m.a)(["\n  object-fit: cover;\n  height: 362px;\n"]))),v=b.a.span(o||(o=Object(m.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  margin: 15px 0;\n  /* white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; */\n"]))),x=b.a.div(i||(i=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),h=b.a.span(c||(c=Object(m.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  text-transform: capitalize;\n"])));var w,E,j,y,O,k,M=e=>{const{Title:n,Year:t,Type:a,Poster:l,imdbID:o}=e.movie;return d.a.createElement(f,{onClick:()=>{e.onSelectMovie(o)}},d.a.createElement(g,{src:l,alt:n}),d.a.createElement(v,null,n),d.a.createElement(x,null,d.a.createElement(h,null,"Year: ",t),d.a.createElement(h,null,"Type: ",a)))},S=t(16);const z=b.a.div(w||(w=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 20px 30px;\n  justify-content: center;\n  border-bottom: 1px solid lightgray;\n"]))),J=b.a.img(E||(E=Object(m.a)(["\n  object-fit: cover;\n  height: 350px;\n"]))),R=b.a.div(j||(j=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n"]))),T=b.a.span(y||(y=Object(m.a)(["\n  font-size: 22px;\n  font-weight: 600;\n  color: black;\n  margin: 15px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  & span {\n    opacity: 0.8;\n  }\n"]))),D=b.a.span(O||(O=Object(m.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  overflow: hidden;\n  margin: 4px 0;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n\n  & span {\n    opacity: 0.5;\n  }\n"]))),I=b.a.span(k||(k=Object(m.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: black;\n  background: lightgray;\n  height: fit-content;\n  padding: 8px;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0.8;\n"])));var G,L,N,Y,A,B=e=>{const[n,t]=Object(r.useState)(),{selectMovie:a}=e;return Object(r.useEffect)(()=>{u.a.get("http://www.omdbapi.com/?i=".concat(a,"&apikey=").concat(ee)).then(e=>{t(e.data),console.log(e.data)})},[a]),d.a.createElement(z,null,n?d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{src:null===n||void 0===n?void 0:n.Poster}),d.a.createElement(R,null,d.a.createElement(T,null,null===n||void 0===n?void 0:n.Type,": ",null===n||void 0===n?void 0:n.Title),d.a.createElement(D,null,"IMDB rating: ",d.a.createElement("span",null,null===n||void 0===n?void 0:n.imdbRating)),d.a.createElement(D,null,"Year: ",d.a.createElement("span",null,null===n||void 0===n?void 0:n.Year)),d.a.createElement(D,null,"Language: ",d.a.createElement("span",null,null===n||void 0===n?void 0:n.Language)),d.a.createElement(D,null,"Rated: ",d.a.createElement("span",null,null===n||void 0===n?void 0:n.Rated)),d.a.createElement(D,null,"Runtime: ",d.a.createElement("span",null,null===n||void 0===n?void 0:n.Runtime)),d.a.createElement(D,null,"Genre: ",d.a.createElement("span",null,null===n||void 0===n?void 0:n.Genre)),d.a.createElement(D,null,"Director: ",d.a.createElement("span",null,null===n||void 0===n?void 0:n.Dictor)),d.a.createElement(D,null,"Actors: ",d.a.createElement("span",null,null===n||void 0===n?void 0:n.Actors)),d.a.createElement(D,null,"Plot: ",d.a.createElement("span",null,null===n||void 0===n?void 0:n.Plot))),d.a.createElement(I,{onClick:()=>e.onSelectMovie()},"X")):"Loading...")};const C=b.a.div(G||(G=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 280px;\n  box-shadow: 0 3px 10px 0 #aaa;\n  cursor: pointer;\n"]))),P=b.a.img(L||(L=Object(m.a)(["\n  object-fit: cover;\n  height: 362px;\n"]))),F=b.a.span(N||(N=Object(m.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  margin: 15px 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]))),U=b.a.div(Y||(Y=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),_=b.a.span(A||(A=Object(m.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  text-transform: capitalize;\n"])));var H,V,X,K,q,Q,W,Z,$=e=>{const{date:n,imdb:t,name:a,poster:l}=e.movie;return d.a.createElement(C,null,d.a.createElement(P,{src:l,alt:a}),d.a.createElement(F,null,a),d.a.createElement(U,null,d.a.createElement(_,null,"Year: ",n),d.a.createElement(_,null,"IMDB: ",t)))};const ee="39d967ab",ne=b.a.div(H||(H=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),te=b.a.img(V||(V=Object(m.a)(["\n  width: 48px;\n  height: 48px;\n  margin: 15px;\n"]))),ae=b.a.div(X||(X=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),le=b.a.div(K||(K=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: #264653;\n  color: wheat;\n  padding: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 0 3px 6px 0 #555;\n"]))),oe=b.a.div(q||(q=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  background-color: white;\n  border-radius: 6px;\n  width: 50%;\n  align-items: center;\n"]))),ie=b.a.div(Q||(Q=Object(m.a)(["\n  width: 30px;\n  height: 30px;\n  color: black;\n"]))),ce=b.a.input(W||(W=Object(m.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  /* border: none;\n  outline: none; */\n  margin-left: 15px;\n"]))),re=b.a.div(Z||(Z=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 30px;\n  justify-content: space-evenly;\n"])));var de=()=>{const[e,n]=Object(r.useState)(),[t,a]=Object(r.useState)(),[l,o]=Object(r.useState)(),[i,c]=Object(r.useState)();return d.a.createElement(ae,null,d.a.createElement(le,null,d.a.createElement(ne,null,d.a.createElement(te,{src:"https://t3.ftcdn.net/jpg/00/96/08/92/240_F_96089280_lEGIoH9IGb0CF0mf15U7rUewR8wgXIm8.jpg",alt:"movie-logo"}),"MovieUp+"),d.a.createElement(oe,null,d.a.createElement(ie,null,d.a.createElement(S.a,null)),d.a.createElement(ce,{placeholder:"Search Movie",onChange:e=>{clearTimeout(t),n(e.target.value);const l=setTimeout(()=>(async e=>{const n=await u.a.get("http://www.omdbapi.com/?s=".concat(e,"&apikey=").concat(ee));o(n.data.Search),console.log(n.data)})(e.target.value),300);a(l)},value:e}))),i&&d.a.createElement(B,{selectMovie:i,onSelectMovie:c}),d.a.createElement(re,null,(null===l||void 0===l?void 0:l.length)?null===l||void 0===l?void 0:l.map((e,n)=>d.a.createElement(M,{key:n,movie:e,onSelectMovie:c})):[{date:"2 Nov 2022",imdb:9.6,name:"Vikrant Rona ",poster:"https://imgshare.info/images/2022/07/28/c9eaec504f4337a22225465a71b65dcb.jpg"},{date:"5 Jan 2022",imdb:"7.5",name:"Ek Villain Returns",poster:"https://imgshare.info/images/2022/07/29/7078be0724fdba1c52c4d1d9ae600fd8.jpg"},{date:"11 Nov 2022",imdb:"6.8",name:"Good Luck Jerry  ",poster:"https://imgshare.info/images/2022/07/29/8a2b3fd0001eb859c6caae4e7fd1004c.jpg"},{date:"10 June 2022",imdb:"8.2",name:"Rocketry &#8211; The Nambi Effect ",poster:"https://imgshare.info/images/2022/07/01/df9fbb422f3f6a4349aa3df3c90f4ec1.jpg"},{date:"2 Nov 2022",imdb:"8.1",name:"Jug Jugg Jeeyo ",poster:"https://imgshare.info/images/2022/06/24/1bb334863d9b83a7d6d21ca120cfa283.jpg"},{date:"8 Aug 2022",imdb:"7.8",name:"Judaa Hoke Bhi ",poster:"https://imgshare.info/images/2022/07/18/a9ec5b31f8ed7b012c99157adb5e88ff.jpg"},{date:"4 Sept 2022",imdb:"8.5",name:"Jaadugar &#8211; Love Goals ",poster:"https://imgshare.info/images/2022/07/15/a1f296e890a61cc76a5b944bd9e71d7c.jpg"},{date:"2 Oct 2022",imdb:"8.9",name:"Janhit Mein Jaari ",poster:"https://imgshare.info/images/2022/06/10/e627a170a066f0da201cb7ebab5037b3.jpg"},{date:"3 july 2022",imdb:"8.8",name:"Mere Desh Ki Dharti ",poster:"https://imgshare.info/images/2022/07/09/b5081706b95d13c476c03fe79cb3b568.jpg"}].map((e,n)=>d.a.createElement($,{key:n,movie:e,onSelectMovie:c}))))};var pe=function(){return d.a.createElement("div",{className:"App"},d.a.createElement(de,null))};s.a.createRoot(document.getElementById("root")).render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(pe,null)))}},[[19,1,2]]]);
//# sourceMappingURL=main.2170b478.chunk.js.map