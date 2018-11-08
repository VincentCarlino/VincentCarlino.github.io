webpackJsonp([1],{"+2ds":function(e,t){},"/m8J":function(e,t){},"3fKX":function(e,t){},"5vlM":function(e,t){},"5xQb":function(e,t){},"9VZ6":function(e,t){},F7mx:function(e,t){},G6ts:function(e,t){},LNnT:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"slide",mode:"out-in"},on:{"after-leave":this.afterLeave}},[t("router-view")],1)],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App",methods:{afterLeave:function(){this.$root.$emit("triggerScroll")}}},i,!1,function(e){a("TSUE")},null,null).exports,n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mockup-container"},[a("div",{class:"bubbles "+(e.bubbles?e.bubbles:"")},[a("div",{staticClass:"bubble bg-red"},[e._v(e._s(e.red))]),e._v(" "),a("div",{staticClass:"bubble bg-yellow"}),e._v(" "),a("div",{staticClass:"bubble bg-green"})]),e._v(" "),a("img",{attrs:{src:e.src}})])},staticRenderFns:[]};var o=a("VU/8")({name:"Mockup",props:["src","bubbles"]},n,!1,function(e){a("+2ds")},"data-v-03f1fae7",null).exports,l=a("//Fk"),c=a.n(l),u=a("/ocq"),m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"intro",attrs:{id:"home"}},[t("div",{staticClass:"content"},[t("h1",[this._v("I'm "),t("span",{staticClass:"red"},[this._v(this._s(this.name))]),this._v(", a Boston-based developer.")]),this._v(" "),t("h1",[this._v("I build web products and I love to make fun user interfaces "),t("span",{staticClass:"icon"},[t("font-awesome-icon",{attrs:{icon:["far","grin-beam"]}})],1)])])])},staticRenderFns:[]};var d=a("VU/8")({name:"Intro",props:["foo"],data:function(){return{name:"Vinny",other:"do other things"}}},m,!1,function(e){a("WVYW")},"data-v-49b4fc18",null).exports,p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"skill-item"},[t("p",[t("span",{staticClass:"icon"},[t("font-awesome-icon",{attrs:{icon:"check"}})],1),this._v(this._s(this.skill))])])},staticRenderFns:[]};var v={name:"Home",props:["skillset"],components:{SkillListItem:a("VU/8")({name:"SkillListItem",props:["skill"]},p,!1,function(e){a("n/jb")},"data-v-d6102d2e",null).exports},data:function(){return{}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"skill-column"},[t("h4",{staticClass:"red column-title underline"},[this._v(this._s(this.skillset.title)),t("span",{staticClass:"icon"},[t("font-awesome-icon",{attrs:{icon:this.skillset.icon}})],1)]),this._v(" "),this._l(this.skillset.skills,function(e){return t("SkillListItem",{key:e,attrs:{skill:e}})})],2)},staticRenderFns:[]};var f={name:"Home",props:["skillsets"],components:{SkillColumn:a("VU/8")(v,h,!1,function(e){a("3fKX")},"data-v-0667c09c",null).exports},data:function(){return{}}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"skills",attrs:{id:"skills"}},[t("div",{staticClass:"skillsets"},[t("h2",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"skill-title"},[this._v("Here are some of my "),t("span",{staticClass:"red"},[this._v("skills")])]),this._v(" "),this._l(this.skillsets,function(e,a){return t("SkillColumn",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:100*a},expression:"{ delay: index * 100 }"}],key:e.title,attrs:{skillset:e}})})],2)])},staticRenderFns:[]};var g=a("VU/8")(f,_,!1,function(e){a("oVTM")},"data-v-93e631ec",null).exports,b={name:"ArticleContent",props:["article"],methods:{generate:function(e){var t=document.getElementById("article-content");if(!e){var a=document.createElement("p");a.appendChild(document.createTextNode("I'm currently in the middle of writing some information about this project. Check back soon to see if it is updated!")),t.appendChild(a)}e.forEach(function(e){var a=document.createElement(e.tag);"img"==e.tag?a.setAttribute("src",e.content):a.appendChild(document.createTextNode(e.content));var s=document.createElement("br");t.appendChild(a),t.appendChild(s)})}},mounted:function(){this.generate(this.article)}},k={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{id:"article-content"}})},staticRenderFns:[]};var C=a("VU/8")(b,k,!1,function(e){a("5xQb")},"data-v-909a7ecc",null).exports,q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"summary"}},[a("h4",{staticClass:"underline"},[e._v("Date")]),e._v(" "),a("h5",[e._v(e._s(e.start)+" - "+e._s(e.end))]),e._v(" "),a("h4",{staticClass:"underline"},[e._v("Technology")]),e._v(" "),e._l(e.skills,function(t){return a("p",[e._v(e._s(t)+" "),a("font-awesome-icon",{attrs:{icon:"check"}})],1)}),e._v(" "),a("h4",{staticClass:"underline"},[e._v("Roles")]),e._v(" "),e._l(e.roles,function(t){return a("p",[e._v(e._s(t)+" "),a("font-awesome-icon",{attrs:{icon:"check"}})],1)})],2)},staticRenderFns:[]};var y=a("VU/8")({name:"Projects",props:["skills","start","end","roles"]},q,!1,function(e){a("F7mx")},"data-v-c01b21d0",null).exports,j={name:"Projects",props:["project"],components:{ProjectSummary:y,ArticleContent:C},data:function(){return V[this.$route.params.name]}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg home-bg"},[a("div",{staticClass:"page-wrapper project-wrapper"},[a("h1",[e._v(e._s(e.name)+" ")]),e._v(" "),a("div",{staticClass:"images"},[a("div",{staticClass:"desktop"},[a("Mockup",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:350},expression:"{ delay : 350 }"}],attrs:{src:e.image}})],1),e._v(" "),a("div",{staticClass:"mobile"},[a("Mockup",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:200},expression:"{ delay: 200 }"}],attrs:{src:e.mobile}})],1)]),e._v(" "),a("div",{staticClass:"article"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"content-left"},[a("h2",[e._v(e._s(e.tagline))]),e._v(" "),a("article-content",{attrs:{article:e.article}})],1),e._v(" "),a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:250},expression:"{delay : 250}"}],staticClass:"content-right"},[a("ProjectSummary",{attrs:{skills:e.skills,start:e.start,end:e.end,roles:e.roles}})],1)])])])},staticRenderFns:[]};var w=a("VU/8")(j,x,!1,function(e){a("LNnT")},"data-v-588b0a61",null).exports,V={"mass-hike":{name:"Mass Hike",tagline:"A marketing site and booking platform that brings urban communities closer to nature",article:[{tag:"p",content:"This is a paragraph."},{tag:"img",content:"/static/masshike-desktop.png"}],image:"/static/masshike-desktop.png",mobile:"/static/masshike-mobile.png",logo:"/static/masshike-logo.svg",start:"January 2018",end:"April 2018",skills:["React","Javascript"],to:"/projects/mass-hike",roles:["Developer"]},"portfolio-v2":{name:"Web Portfolio V2",tagline:"A foray into personal branding and web design",image:"/static/portfolio-v2-desktop.png",start:"January 2018",end:"April 2018",skills:["HTML","CSS"],to:"/projects/portfolio-v2",roles:["Developer","Designer"]},catalant:{name:"Catalant",tagline:"An online marketplace dedicated to getting work done faster and smarter",image:"/static/ct-desktop.png",mobile:"/static/ct-mobile.png",start:"July 2018",end:"Present",skills:["Python","HTML","CSS","Flask"],to:"/projects/catalant",roles:["Engineer"]},dnd:{name:"D&DB",tagline:"A stylish tool for tracking easy-to-lose data in Dungeons and Dragons",image:"/static/ct-desktop.png",mobile:"/static/ct-mobile.png",start:"January 2018",end:"April 2018",skills:["SQL","Python","HTML","CSS"],to:"/projects/dnd",roles:["Developer","Designer"]},righttype:{name:"RightType",tagline:"A simple application to test typeface combinations",image:"/static/ct-desktop.png",mobile:"/static/ct-mobile.png",start:"August 2017",end:"September 2017",skills:["Javascript","HTML","CSS"],to:"/projects/righttype",roles:["Developer","Designer"]},art:{name:"Art",tagline:"A collection of my personal doodles and drawings",image:"/static/ct-desktop.png",mobile:"/static/ct-mobile.png",to:"/art",roles:["Developer","Designer"]}},S={render:function(){var e=this.$createElement;return(this._self._c||e)("router-link",{attrs:{to:this.link}},[this._v(this._s(this.text))])},staticRenderFns:[]};var E=a("VU/8")({name:"Button",props:["link","text"]},S,!1,function(e){a("c5dQ")},"data-v-484aca44",null).exports,A={name:"Projects",props:{project:Object,swap:Boolean},components:{Button:E,Mockup:o}},P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project"},[e.swap?e._e():a("div",{staticClass:"project-content left text"},[a("h2",[e._v(e._s(e.project.name))]),e._v(" "),a("h5",[e._v(e._s(e.project.start)+" - "+e._s(e.project.end))]),e._v(" "),a("p",[e._v(e._s(e.project.tagline))]),e._v(" "),a("Button",{attrs:{link:e.project.to,text:"see more"}})],1),e._v(" "),a("div",{staticClass:"images project-content"},[a("Mockup",{attrs:{src:e.project.image}})],1),e._v(" "),e.swap?a("div",{staticClass:"project-content right text"},[a("h2",[e._v(e._s(e.project.name))]),e._v(" "),a("h5",[e._v(e._s(e.project.start)+" - "+e._s(e.project.end))]),e._v(" "),a("p",[e._v(e._s(e.project.tagline))]),e._v(" "),a("Button",{attrs:{link:e.project.to,text:"see more"}})],1):e._e()])},staticRenderFns:[]};var T={name:"Projects",props:["projects"],components:{ProjectHome:a("VU/8")(A,P,!1,function(e){a("9VZ6")},"data-v-8e7f66be",null).exports,Button:E}},N={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"projects"}},[t("h2",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[this._v("And here are some things I've helped "),t("span",{staticClass:"red"},[this._v("build")])]),this._v(" "),t("ProjectHome",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{project:this.projects["mass-hike"]}}),this._v(" "),t("ProjectHome",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{project:this.projects["portfolio-v2"],swap:""}}),this._v(" "),t("Button",{staticClass:"more",attrs:{link:"/projects",text:"More projects"}})],1)},staticRenderFns:[]};var F=[{title:"code",icon:"code",skills:["Javascript","Python","Vue.js","React/Redux","Flask","HTML/CSS","SQL","Java"]},{title:"tools",icon:"wrench",skills:["Git/Version Control","Github","Jira","Trello","Chrome devtools","Commandline"]},{title:"design",icon:"paint-roller",skills:["Adobe XD","Adobe Illustrator","Invision","Wireframing"]}],H={name:"Home",components:{Intro:d,Skills:g,ProjectsHome:a("VU/8")(T,N,!1,function(e){a("t+h1")},"data-v-453c2292",null).exports},data:function(){return{name:"Vinny",other:"do other things",projects:V,skillsets:F}}},R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bg home-bg"},[t("div",{staticClass:"page-wrapper"},[t("Intro",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]}),this._v(" "),t("Skills",{attrs:{skillsets:this.skillsets}}),this._v(" "),t("ProjectsHome",{attrs:{projects:this.projects}})],1)])},staticRenderFns:[]};var U=a("VU/8")(H,R,!1,function(e){a("tiGv")},"data-v-5e9a4cb6",null).exports,$={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"about"},[this._v("\n    "+this._s(this.text)+"\n")])},staticRenderFns:[]};var M=a("VU/8")({name:"About",data:function(){return{text:"This is the about section.  This data is being brought in through the data of this component."}}},$,!1,function(e){a("udeK")},"data-v-4605250e",null).exports,I={name:"SquircleImage",props:{src:String,squircle:Boolean}},L={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.squircle?"container":""},[t("img",{attrs:{src:this.src}})])},staticRenderFns:[]};var D={name:"Projects",props:["project"],components:{SquircleImage:a("VU/8")(I,L,!1,function(e){a("Q2QB")},"data-v-acfbb884",null).exports,Button:E}},B={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project"},[a("div",{staticClass:"image"},[a("SquircleImage",{attrs:{src:e.project.image}})],1),e._v(" "),a("div",{staticClass:"text"},[a("h3",[e._v(e._s(e.project.name))]),e._v(" "),a("p",[e._v(e._s(e.project.tagline))]),e._v(" "),a("div",{staticClass:"tags"},e._l(e.project.skills,function(t){return a("h5",{staticClass:"tag"},[e._v(e._s(t))])})),e._v(" "),e.project.to?a("router-link",{staticClass:"project-link",attrs:{to:e.project.to}},[a("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1):e._e()],1)])},staticRenderFns:[]};var J={name:"Projects",components:{ProjectListItem:a("VU/8")(D,B,!1,function(e){a("ufp/")},"data-v-6f5c6d3a",null).exports},data:function(){return{projects:V}}},W={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg home-bg"},[a("div",{staticClass:"page-wrapper project-wrapper"},[e._m(0),e._v(" "),a("div",{staticClass:"projects"},e._l(e.projects,function(t){return a("div",e._b({directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"item"},"div",t.name,!1),[a("ProjectListItem",{attrs:{project:t}})],1)}))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",[this._v("Here is a list of all the things I've helped "),t("span",{staticClass:"red"},[this._v("make")])])}]};var G=a("VU/8")(J,W,!1,function(e){a("/m8J")},"data-v-a5e54f64",null).exports,Q={name:"404",components:{Button:E}},O={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home-bg error"},[t("h2",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:500},expression:"{ delay: 500 }"}]},[this._v("Uh oh.  Looks like that page doesn't exist")]),this._v(" "),t("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:2e3},expression:"{ delay: 2000 }"}]},[t("Button",{attrs:{link:"/",text:"Let's take that from the top"}})],1)])},staticRenderFns:[]};var K=a("VU/8")(Q,O,!1,function(e){a("aTIZ")},"data-v-d055d206",null).exports,Z={name:"MassHike",components:{ProjectSummary:y,ArticleContent:C},data:function(){return V["mass-hike"]}},X={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg mass-hike-bg"},[a("div",{staticClass:"page-wrapper mass-hike"},[a("h1",[e._v(e._s(e.name)+" ")]),e._v(" "),a("div",{staticClass:"images"},[a("div",{staticClass:"desktop"},[a("Mockup",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:350},expression:"{ delay : 350 }"}],attrs:{src:e.image}})],1),e._v(" "),a("div",{staticClass:"mobile"},[a("Mockup",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:200},expression:"{ delay: 200 }"}],attrs:{src:e.mobile}})],1),e._v(" "),a("div",{staticClass:"logo"},[a("img",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:100},expression:"{ delay: 100 }"}],attrs:{src:e.logo,alt:""}})])]),e._v(" "),a("div",{staticClass:"article"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"content-left"},[a("h2",[e._v(e._s(e.tagline))]),e._v(" "),a("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque sequi ea doloribus voluptate doloremque quae facilis magnam. Eum quaerat nisi odio sit necessitatibus error numquam, et distinctio expedita suscipit ipsum culpa id. Voluptas minima officia harum possimus quae ullam ipsam repellendus reprehenderit sunt quasi repellat voluptate iste vero in nihil labore maiores minus fuga nisi, sapiente earum doloribus illo. Pariatur corrupti accusamus alias! Odio deleniti provident sequi possimus nulla, accusantium aut quaerat officia sint quos itaque enim maxime ratione ipsa aspernatur id eos laudantium nobis nemo iure consequuntur consequatur? A ipsa asperiores quos harum aut provident hic eius? Dicta magni nisi optio laborum tempore. Ad consequuntur quia incidunt dignissimos odit laborum nulla, accusamus dolores minima debitis! Tempora delectus nemo quod quo labore obcaecati aspernatur corrupti. Sint cumque repellendus aut accusantium et totam iusto! Sapiente aut consectetur voluptas praesentium dolor.")]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque sequi ea doloribus voluptate doloremque quae facilis magnam. Eum quaerat nisi odio sit necessitatibus error numquam, et distinctio expedita suscipit ipsum culpa id. Voluptas minima officia harum possimus quae ullam ipsam repellendus reprehenderit sunt quasi repellat voluptate iste vero in nihil labore maiores minus fuga nisi, sapiente earum doloribus illo. Pariatur corrupti accusamus alias! Odio deleniti provident sequi possimus nulla, accusantium aut quaerat officia sint quos itaque enim maxime ratione ipsa aspernatur id eos laudantium nobis nemo iure consequuntur consequatur? A ipsa asperiores quos harum aut provident hic eius? Dicta magni nisi optio laborum tempore. Ad consequuntur quia incidunt dignissimos odit laborum nulla, accusamus dolores minima debitis! Tempora delectus nemo quod quo labore obcaecati aspernatur corrupti. Sint cumque repellendus aut accusantium et totam iusto! Sapiente aut consectetur voluptas praesentium dolor.")]),e._v(" "),a("article-content",{attrs:{article:e.article}})],1),e._v(" "),a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:250},expression:"{delay : 250}"}],staticClass:"content-right"},[a("ProjectSummary",{attrs:{skills:e.skills,start:e.start,end:e.end,roles:e.roles}})],1)])])])},staticRenderFns:[]};var Y=a("VU/8")(Z,X,!1,function(e){a("5vlM")},null,null).exports,z={name:"WebPortfolioV2",components:{ProjectSummary:y},data:function(){return V["portfolio-v2"]}},ee={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg home-bg"},[a("div",{staticClass:"page-wrapper project-wrapper portfolio-v2"},[a("h1",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(e._s(e.name)+" ")]),e._v(" "),a("div",{staticClass:"images"},[a("div",{staticClass:"desktop"},[a("Mockup",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:250},expression:"{delay : 250}"}],attrs:{src:e.image}})],1)]),e._v(" "),a("div",{staticClass:"article"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"content-left"},[a("h2",[e._v(e._s(e.tagline))]),e._v(" "),a("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque sequi ea doloribus voluptate doloremque quae facilis magnam. Eum quaerat nisi odio sit necessitatibus error numquam, et distinctio expedita suscipit ipsum culpa id. Voluptas minima officia harum possimus quae ullam ipsam repellendus reprehenderit sunt quasi repellat voluptate iste vero in nihil labore maiores minus fuga nisi, sapiente earum doloribus illo. Pariatur corrupti accusamus alias! Odio deleniti provident sequi possimus nulla, accusantium aut quaerat officia sint quos itaque enim maxime ratione ipsa aspernatur id eos laudantium nobis nemo iure consequuntur consequatur? A ipsa asperiores quos harum aut provident hic eius? Dicta magni nisi optio laborum tempore. Ad consequuntur quia incidunt dignissimos odit laborum nulla, accusamus dolores minima debitis! Tempora delectus nemo quod quo labore obcaecati aspernatur corrupti. Sint cumque repellendus aut accusantium et totam iusto! Sapiente aut consectetur voluptas praesentium dolor.")]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque sequi ea doloribus voluptate doloremque quae facilis magnam. Eum quaerat nisi odio sit necessitatibus error numquam, et distinctio expedita suscipit ipsum culpa id. Voluptas minima officia harum possimus quae ullam ipsam repellendus reprehenderit sunt quasi repellat voluptate iste vero in nihil labore maiores minus fuga nisi, sapiente earum doloribus illo. Pariatur corrupti accusamus alias! Odio deleniti provident sequi possimus nulla, accusantium aut quaerat officia sint quos itaque enim maxime ratione ipsa aspernatur id eos laudantium nobis nemo iure consequuntur consequatur? A ipsa asperiores quos harum aut provident hic eius? Dicta magni nisi optio laborum tempore. Ad consequuntur quia incidunt dignissimos odit laborum nulla, accusamus dolores minima debitis! Tempora delectus nemo quod quo labore obcaecati aspernatur corrupti. Sint cumque repellendus aut accusantium et totam iusto! Sapiente aut consectetur voluptas praesentium dolor.")])]),e._v(" "),a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:250},expression:"{delay : 250}"}],staticClass:"content-right"},[a("ProjectSummary",{attrs:{skills:e.skills,start:e.start,end:e.end,roles:e.roles}})],1)])])])},staticRenderFns:[]};var te=a("VU/8")(z,ee,!1,function(e){a("G6ts")},"data-v-2e37c209",null).exports,ae=["/static/ct-desktop.png","/static/ct-mobile.png","/static/masshike-desktop.png","/static/masshike-logo.svg","/static/masshike-mobile.png","/static/portfolio-v2-desktop.png"],se={name:"ArtGallery",data:function(){return{art:ae}}},ie={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bg home-bg"},[t("div",{staticClass:"page-wrapper project-wrapper"},[this._m(0),this._v(" "),t("div",{staticClass:"art"},this._l(this.art,function(e,a){return t("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:200*a},expression:"{ delay: index * 200 }"}],staticClass:"image"},[t("img",{attrs:{src:e}})])}))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",[this._v("Here is a gallery of things I've "),t("span",{staticClass:"red"},[this._v("drawn")])])}]};var re=a("VU/8")(se,ie,!1,function(e){a("eTGT")},"data-v-21560913",null).exports;s.a.use(u.a);var ne=new u.a({mode:"history",routes:[{path:"/",name:"Home",component:U,meta:{title:"Vinny Carlino // Web Engineer"}},{path:"/about",name:"About",component:M,meta:{title:"Vinny Carlino // About Me"}},{path:"/projects",name:"Projects",component:G,meta:{title:"Vinny Carlino // Projects"}},{path:"/art",name:"ArtGallery",component:re,meta:{title:"Vinny Carlino // Art"}},{path:"/projects/mass-hike",name:"Mass Hike",component:Y,meta:{title:"Vinny Carlino // Mass Hike"}},{path:"/projects/portfolio-v2",name:"Web Portfolio V2",component:te,meta:{title:"Vinny Carlino // Web Portfolio V2"}},{path:"/projects/:name",name:"Project",component:w,beforeEnter:function(e,t,a){var s;s=e.params.name,console.log(V),console.log(s),V[s]||a({name:"404"}),a()},meta:{title:"Vinny Carlino // Project"}},{path:"/error",name:"404",component:K,meta:{title:"Uh oh..."}}],scrollBehavior:function(e,t,a){return console.log(a),new c.a(function(e,t){setTimeout(function(){e(a||{x:0,y:0})},1e3)})}});ne.beforeEach(function(e,t,a){e.matched.length?a():a("/error")}),ne.afterEach(function(e,t){document.title=e.meta.title||"Vinny Carlino // Web Engineer"});var oe=ne,le=(a("kHrF"),a("C/JF")),ce=a("fhbW"),ue=a("Yu89"),me=a("U0v6"),de=(a("Ka5H"),a("4t5/")),pe=a.n(de);le.library.add(ce.f),le.library.add(ce.k),le.library.add(ce.i),le.library.add(ce.c),le.library.add(ce.d),le.library.add(ce.e),le.library.add(ce.g),le.library.add(ue.a),le.library.add(ce.j),le.library.add(ue.b),le.library.add(ce.h),le.library.add(ce.a),le.library.add(ce.b),s.a.component("font-awesome-icon",me.FontAwesomeIcon),s.a.use(pe.a,{class:"v-scroll-reveal",distance:"70%",origin:"bottom",opacity:0}),s.a.component("Mockup",o),s.a.config.productionTip=!1;var ve=new s.a({el:"#app",router:oe,components:{App:r},template:"<App/>"});t.default=ve},Q2QB:function(e,t){},TSUE:function(e,t){},WVYW:function(e,t){},aTIZ:function(e,t){},c5dQ:function(e,t){},eTGT:function(e,t){},"n/jb":function(e,t){},oVTM:function(e,t){},"t+h1":function(e,t){},tiGv:function(e,t){},udeK:function(e,t){},"ufp/":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.153c61dd2653db4cdbf1.js.map