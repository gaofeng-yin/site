(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/hub.0ba2aa20.png"},40:function(e,t,a){e.exports=a.p+"static/media/me.5f0496f8.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/stack.0dc0d4aa.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/link.1e01f0c0.svg"},43:function(e,t,a){e.exports=a.p+"static/media/inst.e75317fa.svg"},44:function(e,t,a){e.exports=a.p+"static/media/face.34e73505.svg"},45:function(e,t,a){e.exports=a.p+"static/media/mail.46bb5905.svg"},46:function(e,t,a){e.exports=a.p+"static/media/goodr.7a76cc6f.svg"},47:function(e,t,a){e.exports=a.p+"static/media/giticon.ec5bc1b3.svg"},48:function(e,t,a){e.exports=a.p+"static/media/parser.48bb669e.png"},49:function(e,t,a){e.exports=a.p+"static/media/ros.ac75405c.png"},50:function(e,t,a){e.exports=a.p+"static/media/budgetapp.4de1ff80.png"},51:function(e,t,a){e.exports=a.p+"static/media/website.6e7c0f94.png"},52:function(e,t,a){e.exports=a.p+"static/media/eli.b0ba9798.png"},53:function(e,t,a){e.exports=a.p+"static/media/weather.751caaad.png"},61:function(e,t,a){e.exports=a(77)},66:function(e,t,a){},67:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),o=a.n(r),l=(a(66),a(7)),c=a(12),s=a(10),m=a(9),u=(a(67),a(20)),p=a(5),g=a(24),f=a(23),d=a(60),h=a(79),b=a(25),E=a(26);var v=function(e){return i.a.createElement(h.a,{className:"bg-transparent jumbotron-fluid p-0"},i.a.createElement(g.a,{fluid:!0},i.a.createElement(b.a,{className:"justify-content-center py-5"},i.a.createElement(E.a,{md:8,sm:12},e.title&&i.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&i.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&i.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},k=a(17),w=a(39),y=a.n(w),N=a(35);var j=function(e){var t=Object(N.b)({opacity:1,from:{opacity:0}});return i.a.createElement(N.a.div,{className:"g-card-info",style:t},i.a.createElement("p",{className:"g-card-title"},e.title),i.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"),i.a.createElement("p",null,i.a.createElement("br",null)))};var x=function(e){return i.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},i.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&i.a.createElement(j,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},T=a(40),C=a.n(T),A=a(41),S=a.n(A),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(k.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return i.a.createElement(x,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Stack overflow",subTitle:"My stack",imgSrc:S.a,link:"https://stackoverflow.com/users/14255901/gaofeng",selected:!1},{id:1,title:"Linkdin",subTitle:"My Linkdin profile",imgSrc:C.a,link:"https://www.linkedin.com/in/gaofengyin/.com",selected:!1},{id:2,title:"Github",subTitle:"My Github repository",imgSrc:y.a,link:"https://github.com/gaofeng-yin",selected:!1}]},n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(g.a,{fluid:!0},i.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(i.a.Component);var I=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement(g.a,{className:"border-top justify-content-between",fluid:!0},i.a.createElement(b.a,null,i.a.createElement(E.a,null,i.a.createElement("span",{className:"footer-span"},"Copyright \xa9 Gaofeng")))))};var L=function(e){return i.a.createElement("div",{className:"page-content"},i.a.createElement(v,{title:e.title}),i.a.createElement(O,null),i.a.createElement(I,null))};var P=function(e){return i.a.createElement(g.a,{fluid:!0},i.a.createElement(b.a,{className:"justify-content-center"},i.a.createElement(E.a,{md:8},e.children)))},W=a(42),_=a.n(W),B=a(43),M=a.n(B),R=a(44),G=a.n(R),U=a(45),Y=a.n(U),H=a(46),J=a.n(H);var q=function(e){return i.a.createElement("div",{className:"page-content"},i.a.createElement(v,{title:e.title}),i.a.createElement(P,null,i.a.createElement("p",null,"If you have any question, make sure to send me message or if you are interested, connect with me."),i.a.createElement("a",{href:"mailto:gaofengyin@hotmail.com"}," ",i.a.createElement("img",{className:"link",src:Y.a,alt:"img"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/gaofengyin/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"link",src:_.a,alt:"img"})),i.a.createElement("a",{href:"https://www.instagram.com/gaofing/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"link",src:M.a,alt:"img"})),i.a.createElement("a",{href:"https://www.facebook.com/Gaofeng.yin/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"link",src:G.a,alt:"img"})),i.a.createElement("a",{href:"https://www.goodreads.com/user/show/80938079-gaofeng",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"link",src:J.a,alt:"img"}))))};var z=function(e){return i.a.createElement("div",{className:"page-content"},i.a.createElement(P,null,i.a.createElement(v,{title:e.title}),i.a.createElement("p",null,"Hello there!"),i.a.createElement("p",null,"My name's Gaofeng Yin. I'm computer science graduate student from institute polytechnic of Bragan\xe7a."),i.a.createElement("p",null,"As junior, i would like to become a full stack developer because i enjoy creating contents and facing challanges."),i.a.createElement("p",null,"I'm a flexible, ethical and enthusiastic hard-working IT guy, who's always ready to learn something more in different areas of technologies."),i.a.createElement("p",null," Something that really fascinate me is IoT and automation. And i'm verily passionate about solving complex problems and develop my personal skill.")))},V=a(47),X=a.n(V),$=a(48),D=a.n($),F=a(49),K=a.n(F),Q=a(50),Z=a.n(Q),ee=a(51),te=a.n(ee),ae=a(52),ne=a.n(ae),ie=a(53),re=a.n(ie);var oe=function(){var e=[{title:"Puppet to Ansible compiler",img:ne.a,description:"Compiler which translate Puppet module to Ansible role. Built using Eli: Translator Construction Made Easy. Used to facilitate migration from Puppet to Ansible.",link:"https://github.com/gaofeng-yin/Puppet2Ansible"},{title:"Budget app",img:Z.a,description:"Budget calculator built using Angular. A small boost to getting started with a basic Angular application. This app make a list of incomes and expenses by adding positive or negative values and then calculate the difference between income and expense. You can also edit de values and discription, consonant of the change, the list get update automatically.",link:"https://github.com/gaofeng-yin/budget_app"},{title:"Weather app",img:re.a,description:"Weather app created using vue.js framework. In this app you can find weather and temperature of any country or city. App return data from weather api. ",link:"https://github.com/gaofeng-yin/weather-app"},{title:"Portfolio website",img:te.a,description:"Portfolio website, built from scratch using React.",link:"https://github.com/gaofeng-yin/site"},{title:"Json to html table",img:D.a,description:"Compiler built using YACC&LEX which translate json file, containing Google calendar info, into HTML table cotent. This may help to better visualization of the data.",link:"https://github.com/gaofeng-yin/language_processor"},{title:"ROS turtlesim teleop",img:K.a,description:"Code in Python, developed for ROS to teleoperate ground robots using keyboard (in this case a simulation robot). The Robot Operating System (ROS) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robotic platforms.",link:"https://github.com/gaofeng-yin/ros_turtlesim_teleop"}];return i.a.createElement("div",null,e.map((function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("h1",null,e.title),i.a.createElement("img",{className:"site-image",src:e.img,alt:"img"}),i.a.createElement("p",null,i.a.createElement("br",null),e.description),i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"link-proj",src:X.a,alt:"img"})))})))};var le=function(e){return i.a.createElement("div",{className:"page-content"},i.a.createElement(P,null,i.a.createElement(v,{title:e.title}),i.a.createElement(oe,null)))},ce=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={title:"gaofeng",headerLinks:[{title:"home",path:"/"},{title:"about",path:"/about"},{title:"contact",path:"/contact"},{title:"project",path:"/project"}],home:{title:"Be Limitless",subTitle:"You are what you put in your head",text:"Lets see who i am"},about:{title:"About me"},contact:{title:"Let's talk"},project:{title:"My project"}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(u.a,null,i.a.createElement(g.a,{className:"p-0",fluid:!0},i.a.createElement(f.a,{className:"border-bottom",bg:"transparent",expand:"lg"},i.a.createElement("a",{href:"https://gaofeng.netlify.app/",rel:"noopener noreferrer"},i.a.createElement(f.a.Brand,null,"\u9ad8\u5cf0")),i.a.createElement(f.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),i.a.createElement(f.a.Collapse,{id:"navbar-toggle"},i.a.createElement(d.a,{className:"ml-auto"},i.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),i.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),i.a.createElement(u.b,{className:"nav-link",to:"/project"},"Project"),i.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),i.a.createElement(p.a,{path:"/",exact:!0,render:function(){return i.a.createElement(L,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),i.a.createElement(p.a,{path:"/about",render:function(){return i.a.createElement(z,{title:e.state.about.title})}}),i.a.createElement(p.a,{path:"/project",render:function(){return i.a.createElement(le,{title:e.state.project.title})}}),i.a.createElement(p.a,{path:"/contact",render:function(){return i.a.createElement(q,{title:e.state.contact.title})}})))}}]),a}(i.a.Component),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(76);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ce,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):me(t,e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.74f6db95.chunk.js.map