(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,i){},,function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/me.304dd275.png"},function(e,t,i){var n={"./budget.png":21,"./employee-tracker.png":22,"./friendzone.png":23,"./social-network-api.png":24,"./tech-blog.png":25};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=20},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/budget.6a7afbbf.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/employee-tracker.26ed25df.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/friendzone.04d9ba0e.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/social-network-api.3103ab41.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/tech-blog.f8e51e7a.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/resume-screenshot.bcdf34e3.png"},,,,,,function(e,t,i){"use strict";i.r(t);var n=i(2),a=i.n(n),r=i(11),c=i.n(r),s=(i(17),i(3)),l=i(0);var o=function(){return Object(l.jsxs)("section",{className:"my-5",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(l.jsx)("img",{src:i(19).default,alt:"",id:"about-photo"}),Object(l.jsx)("p",{style:{marginLeft:"60px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})};var d=function(e){var t=e.title,n=e.image,a=e.deployedLink,r=e.repo;return Object(l.jsxs)("div",{style:{width:"350px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("img",{style:{maxWidth:"300px",maxHeight:"600px"},src:i(20)("./".concat(n)).default,alt:"budget"}),Object(l.jsx)("a",{href:a,children:"Application Link"}),Object(l.jsx)("a",{href:r,style:{marginBottom:"15px"},children:"Github Repo Link"})]})};var u=function(){return Object(l.jsx)("section",{id:"project-section",style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[{title:"Budget Tracker",image:"budget.png",deployedLink:"https://budget-tracker-123456.herokuapp.com/",repo:"https://github.com/Emilykidd3/budget-tracker"},{title:"Social Network API",image:"social-network-api.png",deployedLink:"https://github.com/Emilykidd3/social-network-api",repo:"https://github.com/Emilykidd3/social-network-api"},{title:"Friendzone",image:"friendzone.png",deployedLink:"https://my-friendzone.herokuapp.com",repo:"https://github.com/Emilykidd3/friendzone"},{title:"Tech Blog",image:"tech-blog.png",deployedLink:"https://powerful-taiga-46589.herokuapp.com/",repo:"https://github.com/Emilykidd3/tech-blog"},{title:"eCommerce Backend",image:"budget.png",deployedLink:"https://github.com/Emilykidd3/e-commerce-back-end",repo:"https://github.com/Emilykidd3/e-commerce-back-end"},{title:"Emloyee Tracker",image:"employee-tracker.png",deployedLink:"https://github.com/Emilykidd3/employee-tracker",repo:"https://github.com/Emilykidd3/employee-tracker"}].map((function(e){return Object(l.jsx)(d,{title:e.title,image:e.image,deployedLink:e.deployedLink,repo:e.repo},e.title)}))})},j=i(5),m=i(9);var b=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),i=t[0],a=t[1],r=Object(n.useState)({name:"",email:"",message:""}),c=Object(s.a)(r,2),o=c[0],d=c[1],u=o.name,b=o.email,p=o.message;function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),a(t?"":"Your email is invalid")}else e.target.value.length?a(""):a("".concat(e.target.name," is required"));i||d(Object(m.a)(Object(m.a)({},o),{},Object(j.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{style:{width:"600px"},children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(o)},style:{width:"100%"},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",defaultValue:u,onBlur:h,name:"name",style:{width:"50%"}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"email",defaultValue:b,name:"email",onBlur:h,style:{width:"50%"}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message"}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{name:"message",defaultValue:p,rows:"5",onBlur:h})]}),i&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:i})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var p=function(e){var t=e.tabs,i=void 0===t?[]:t,n=e.setCurrentTab,a=e.currentTab;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2"}),i.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(a.name===e.name&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){n(e)},children:(t=e.name,t.charAt(0).toUpperCase()+t.slice(1))})},e.name);var t}))]})})};var h=function(e){return Object(l.jsxs)("header",{className:"flex-row px-1",style:{display:"flex",justifyContent:"space-between"},children:[Object(l.jsx)("h2",{children:Object(l.jsx)("a",{"data-testid":"link",href:"/",style:{textDecoration:"none"},children:"Emily Kidd"})}),Object(l.jsx)(p,{tabs:e.tabs,setCurrentTab:e.setCurrentTab,currentTab:e.currentTab})]})},x=i.p+"static/media/resume.0a0e35d0.pdf";var f=function(e){return e.tabs,Object(l.jsx)("div",{children:Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:[Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(l.jsx)("img",{src:i(26).default,alt:"resume",style:{width:"200px"}}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:x,download:"Resume",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("button",{children:"Download Resume"})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{style:{paddingLeft:"20%"},children:"Skills"}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("ul",{style:{marginLeft:"0px",paddingLeft:"0px"},children:["HTML","CSS","Bootstrap","JavaScript","jQuery","Node.js","Express.js","SQL"].map((function(e){return Object(l.jsx)("li",{children:e})}))}),Object(l.jsx)("ul",{children:["Sequelize","MySQL","NoSQL","Mongoose","MongoDB","Mobile first Design","TDD","React"].map((function(e){return Object(l.jsx)("li",{children:e})}))})]})]})]})})},g=i(6),O=i(10),y=i(12);var k=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("ul",{className:"icons",style:{display:"flex",justifyContent:"center"},children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/emily-kidd-39a8801b8/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(g.a,{icon:O.b,size:"3x"})})}),Object(l.jsx)("li",{style:{marginLeft:"15px"},children:Object(l.jsx)("a",{href:"https://github.com/Emilykidd3",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(g.a,{icon:O.a,size:"3x"})})}),Object(l.jsx)("li",{style:{marginLeft:"15px"},children:Object(l.jsx)("a",{href:"mailto:ekidd61@yahoo.com",children:Object(l.jsx)(g.a,{icon:y.a,size:"3x"})})})]})})};var v=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(s.a)(e,1)[0],i=Object(n.useState)(t[0]),a=Object(s.a)(i,2),r=a[0],c=a[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{currentTab:r,setCurrentTab:c,tabs:t}),Object(l.jsxs)("main",{children:["about me"===r.name&&Object(l.jsx)(o,{}),"portfolio"===r.name&&Object(l.jsx)(u,{}),"contact"===r.name&&Object(l.jsx)(b,{}),"resume"===r.name&&Object(l.jsx)(f,{})]}),Object(l.jsx)(k,{})]})},w=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,33)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),w()}],[[32,1,2]]]);
//# sourceMappingURL=main.f8b0e97a.chunk.js.map