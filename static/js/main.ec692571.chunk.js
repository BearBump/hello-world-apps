(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},191:function(e,t,a){e.exports=a(299)},292:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);a(192),a(218),a(220),a(221),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260);var n=a(0),c=a.n(n),r=a(65),i=a.n(r),l=a(31),o=a.n(l),s=a(66),u=a.n(s),p=a(98),m=a(49),d=a(107),f=a.n(d),h=(a(269),a(47)),b=a.n(h),E=a(48),g=a.n(E),k=a(102),v=a.n(k),j=a(67),w=a.n(j),y=a(99),O=a.n(y),_=a(101),x=a.n(_),A=a(100),P=a.n(A),C=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(b.a,{id:t},c.a.createElement(g.a,null,"Example"),n&&c.a.createElement(w.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(O.a,{before:n.photo_200?c.a.createElement(P.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(w.a,{title:"Navigation Example"},c.a.createElement(x.a,null,c.a.createElement(v.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},K=a(68),U=a(106),V=a.n(U),I=a(103),S=a.n(I),W=a(104),N=a.n(W),T=a(105),B=a.n(T),G=(a(292),Object(K.b)()),J=function(e){return c.a.createElement(b.a,{id:e.id},c.a.createElement(g.a,{left:c.a.createElement(V.a,{onClick:e.go,"data-to":"home"},G===K.a?c.a.createElement(S.a,null):c.a.createElement(N.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:B.a,alt:"Persik The Cat"}))},z=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(m.a)(i,2),s=l[0],d=l[1],h=Object(n.useState)(null),b=Object(m.a)(h,2),E=b[0],g=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),g(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:E},c.a.createElement(C,{id:"home",fetchedUser:s,go:k}),c.a.createElement(J,{id:"persik",go:k}))};a(296),a(297),a(298);o.a.send("VKWebAppInit"),o.a.sendPromise("VKWebAppGetCommunityAuthToken",{app_id:7367831,group_id:167045707,scope:"app_widget"}).then((function(e){console.log(e)})).catch((function(e){})),i.a.render(c.a.createElement(z,null),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.ec692571.chunk.js.map