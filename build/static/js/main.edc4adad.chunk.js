(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/hub.0ba2aa20.png"},40:function(e,t,a){e.exports=a.p+"static/media/me.5f0496f8.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/stack.0dc0d4aa.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/link.1e01f0c0.svg"},43:function(e,t,a){e.exports=a.p+"static/media/inst.e75317fa.svg"},44:function(e,t,a){e.exports=a.p+"static/media/face.34e73505.svg"},45:function(e,t,a){e.exports=a.p+"static/media/mail.46bb5905.svg"},46:function(e,t,a){e.exports=a.p+"static/media/goodr.7a76cc6f.svg"},47:function(e,t,a){e.exports=a.p+"static/media/giticon.ec5bc1b3.svg"},48:function(e,t,a){e.exports=a.p+"static/media/parser.48bb669e.png"},49:function(e,t,a){e.exports=a.p+"static/media/ros.ac75405c.png"},57:function(e,t,a){e.exports=a(73)},62:function(e,t,a){},63:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),l=a.n(i),o=(a(62),a(7)),c=a(12),s=a(10),m=a(9),u=(a(63),a(20)),f=a(5),p=a(24),g=a(23),d=a(56),h=a(75),b=a(25),E=a(26);var v=function(e){return r.a.createElement(h.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(p.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-center py-5"},r.a.createElement(E.a,{md:8,sm:12},e.title&&r.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&r.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&r.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},k=a(17),w=a(39),y=a.n(w),N=a(35);var j=function(e){var t=Object(N.b)({opacity:1,from:{opacity:0}});return r.a.createElement(N.a.div,{className:"g-card-info",style:t},r.a.createElement("p",{className:"g-card-title"},e.title),r.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"),r.a.createElement("p",null,r.a.createElement("br",null)))};var x=function(e){return r.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},r.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(j,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},T=a(40),C=a.n(T),S=a(41),O=a.n(S),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(k.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return r.a.createElement(x,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Linkdin",subTitle:"My Linkdin profile",imgSrc:C.a,link:"https://www.linkedin.com/in/gaofengyin/.com",selected:!1},{id:1,title:"Stack overflow",subTitle:"My stack",imgSrc:O.a,link:"https://stackoverflow.com/users/14255901/gaofeng",selected:!1},{id:2,title:"Github",subTitle:"My Github repository",imgSrc:y.a,link:"https://github.com/gaofeng-yin",selected:!1}]},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(r.a.Component);var I=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(p.a,{className:"border-top justify-content-between",fluid:!0},r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement("span",{className:"footer-span"},"Copyright \xa9 Gaofeng")))))};var L=function(e){return r.a.createElement("div",{className:"page-content"},r.a.createElement(v,{title:e.title}),r.a.createElement(A,null),r.a.createElement(I,null))};var _=function(e){return r.a.createElement(p.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(E.a,{md:8},e.children)))},P=a(42),W=a.n(P),M=a(43),R=a.n(M),B=a(44),G=a.n(B),H=a(45),J=a.n(H),U=a(46),Y=a.n(U);var q=function(e){return r.a.createElement("div",{className:"page-content"},r.a.createElement(v,{title:e.title}),r.a.createElement(_,null,r.a.createElement("p",null,"If you have any question, make sure to send me message or if you are interested, connect with me."),r.a.createElement("a",{href:"mailto:gaofengyin@hotmail.com"}," ",r.a.createElement("img",{className:"link",src:J.a,alt:"img"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/gaofengyin/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"link",src:W.a,alt:"img"})),r.a.createElement("a",{href:"https://www.instagram.com/gaofing/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"link",src:R.a,alt:"img"})),r.a.createElement("a",{href:"https://www.facebook.com/Gaofeng.yin/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"link",src:G.a,alt:"img"})),r.a.createElement("a",{href:"https://www.goodreads.com/user/show/80938079-gaofeng",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"link",src:Y.a,alt:"img"}))))};var z=function(e){return r.a.createElement("div",{className:"page-content"},r.a.createElement(_,null,r.a.createElement(v,{title:e.title}),r.a.createElement("p",null,"Hello there!"),r.a.createElement("p",null,"My name's Gaofeng Yin. I'm computer science graduate student from institute polytechnic of Bragan\xe7a."),r.a.createElement("p",null,"As junior, i would like to become a full stack developer because i enjoy creating contents and facing challanges."),r.a.createElement("p",null,"I'm a flexible, ethical and enthusiastic hard-working IT guy, who's always ready to learn something more in different areas of technologies."),r.a.createElement("p",null," Something that really fascinate me is IoT and automation. And i'm verily passionate about solving complex problems and develop my personal skill.")))},D=a(47),V=a.n(D),X=a(48),$=a.n(X),F=a(49),K=a.n(F);var Q=function(){var e=[{title:"Puppet to Ansible compiler",img:"null",description:"Almost Done",link:"null"},{title:"Budget app",img:"null",description:"In Progress",link:"null"},{title:"Portfolio website",img:"null",description:"In Progress",link:"null"},{title:"Json to html table",img:$.a,description:"Compiler built using YACC&LEX which translate json file, containing Google calendar info, into HTML table cotent. This may help better visualization of the data.",link:"https://github.com/gaofeng-yin/language_processor"},{title:"ROS turtlesim teleop",img:K.a,description:"Code in Python, developed for ROS to teleoperate ground robots using keyboard (in this case a simulation robot). The Robot Operating System (ROS) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robotic platforms.",link:"https://github.com/gaofeng-yin/ros_turtlesim_teleop"}];return r.a.createElement("div",null,e.map((function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("h3",null,e.title),r.a.createElement("img",{className:"site-image",src:e.img,alt:"img"}),r.a.createElement("p",null,r.a.createElement("br",null),e.description),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"link",src:V.a,alt:"img"})))})))};var Z=function(e){return r.a.createElement("div",{className:"page-content"},r.a.createElement(_,null,r.a.createElement(v,{title:e.title}),r.a.createElement(Q,null)))},ee=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={title:"gaofeng",headerLinks:[{title:"home",path:"/"},{title:"about",path:"/about"},{title:"contact",path:"/contact"},{title:"project",path:"/project"}],home:{title:"Be Limitless",subTitle:"You are what you put in your head",text:"Lets see who i am"},about:{title:"About me"},contact:{title:"Let's talk"},project:{title:"My project"}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,null,r.a.createElement(p.a,{className:"p-0",fluid:!0},r.a.createElement(g.a,{className:"border-bottom",bg:"transparent",expand:"lg"},r.a.createElement("a",{href:"https://gaofeng.netlify.app/",rel:"noopener noreferrer"},r.a.createElement(g.a.Brand,null,"\u9ad8\u5cf0")),r.a.createElement(g.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),r.a.createElement(g.a.Collapse,{id:"navbar-toggle"},r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),r.a.createElement(u.b,{className:"nav-link",to:"/project"},"Project"),r.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),r.a.createElement(f.a,{path:"/",exact:!0,render:function(){return r.a.createElement(L,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),r.a.createElement(f.a,{path:"/about",render:function(){return r.a.createElement(z,{title:e.state.about.title})}}),r.a.createElement(f.a,{path:"/project",render:function(){return r.a.createElement(Z,{title:e.state.project.title})}}),r.a.createElement(f.a,{path:"/contact",render:function(){return r.a.createElement(q,{title:e.state.contact.title})}})))}}]),a}(r.a.Component),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(72);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ae(t,e)}))}}()}},[[57,1,2]]]);
//# sourceMappingURL=main.edc4adad.chunk.js.map