(function(t){function e(e){for(var a,n,o=e[0],l=e[1],u=e[2],h=0,v=[];h<o.length;h++)n=o[h],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&v.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(v.length)v.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;i.push([1,"chunk-vendors"]),s()})({0:function(t,e){},1:function(t,e,s){t.exports=s("cd49")},"9b19":function(t,e,s){t.exports=s.p+"img/logo.63a7d78d.svg"},bc28:function(t,e,s){t.exports=s.p+"img/avatar.896129ac.svg"},cd49:function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[s("div",{staticClass:"d-flex align-center"},[s("h2",[t._v("Blockchain Chat")])]),s("v-spacer"),s("v-btn",{attrs:{href:"https://github.com/AndreasFurster/blockchain-ts",target:"_blank",text:""}},[s("span",{staticClass:"mr-2"},[t._v("Repository")]),s("v-icon",[t._v("mdi-github")])],1)],1),s("v-main",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("Chatbox",{ref:"chatbox"})],1),s("v-col",{attrs:{cols:"6"}},[s("SendMessageBox",{on:{"send-message":t.updateMessages}})],1)],1)],1)],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:s("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,s){return a("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,s){return a("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,s){return a("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},o=[],l=a["a"].extend({name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})}),u=l,c=s("2877"),h=s("6544"),v=s.n(h),d=s("62ad"),p=s("a523"),f=s("adda"),m=s("0fd9"),g=Object(c["a"])(u,n,o,!1,null,null,null),b=g.exports;v()(g,{VCol:d["a"],VContainer:p["a"],VImg:f["a"],VRow:m["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"elevation-3"},[a("h3",[t._v("Messages")]),a("v-list",{attrs:{"three-line":""}},[t._l(t.messages,(function(e,r){return[a("v-list-item",{key:r,attrs:{color:"red"}},[a("v-list-item-avatar",[a("v-img",{attrs:{src:s("bc28")}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(e.userId)}}),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.message)}})],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-tooltip",{attrs:{bottom:"",color:"#000"},scopedSlots:t._u([{key:"activator",fn:function(s){var r=s.on,i=s.attrs;return[a("v-icon",t._g(t._b({attrs:{color:e.valid?"green":"red"}},"v-icon",i,!1),r),[t._v("mdi-information")])]}}],null,!0)},[a("span",[t._v(" Index: "+t._s(e.index)),a("br"),t._v(" Hash: "+t._s(e.hash)),a("br"),t._v(" Generated hash: "+t._s(e.generatedHash)),a("br"),t._v(" Hash match: "+t._s(e.hashValid)),a("br"),t._v(" PreviousHash: "+t._s(e.previousHash)),a("br"),t._v(" Next hash match: "+t._s(e.hashChainValid)),a("br"),t._v(" Signature: "+t._s(e.signature)),a("br")])])],1)],1)],1)]}))],2)],1)},_=[],x=s("9ab4"),V=s("2fe1"),w=s("5c1a");class C{generateSignature(t,e){let s=w.pki.privateKeyFromPem(t),a=w.md.sha512.create();a.update(e,"utf8");let r=s.sign(a);return w.util.bytesToHex(r)}getHashForBlock(t,e,s,a,r){let i=""+JSON.stringify([{userId:t,message:e}])+s+a+r;var n=w.md.sha256.create();return n.update(i),n.digest().toHex()}}const k=new C;let j=class extends a["a"]{constructor(){super(...arguments),this.publicKey="",this.messages=[]}created(){this.updateMessages(),setInterval(this.updateMessages,5e3)}updateMessages(){fetch("http://localhost:8002/messages").then(t=>t.json()).then(t=>{this.messages=[];for(let e=0;e<t.length;e++){const s=t[e],{userId:a,message:r,index:i,hash:n,previousHash:o,signature:l}=s,u=k.getHashForBlock(a,r,i,o,l);s.hashValid=u===n;let c=t[e+1];s.hashChainValid=!c||c.previousHash===u,s.hash=s.hash.substring(0,8),s.previousHash=s.previousHash.substring(0,8),s.generatedHash=u.substring(0,8),s.signature=s.signature.substring(0,8),s.valid=s.hashValid&&s.hashChainValid,this.messages.push(s)}})}};j=Object(x["a"])([V["a"]],j);var I=j,S=I,M=s("8336"),O=s("132d"),H=s("8860"),P=s("da13"),T=s("1800"),L=s("8270"),A=s("5d23"),B=s("3a2f"),E=Object(c["a"])(S,y,_,!1,null,null,null),K=E.exports;v()(E,{VBtn:M["a"],VCol:d["a"],VIcon:O["a"],VImg:f["a"],VList:H["a"],VListItem:P["a"],VListItemAction:T["a"],VListItemAvatar:L["a"],VListItemContent:A["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VTooltip:B["a"]});var F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{staticClass:"elevation-3"},[s("h3",[t._v("Send message")]),s("v-alert",{attrs:{dense:"",type:"error",dismissible:""},model:{value:t.errorVisible,callback:function(e){t.errorVisible=e},expression:"errorVisible"}},[t._v(" "+t._s(t.error)+" ")]),s("v-textarea",{attrs:{label:"Private key (not send to server)",outlined:""},model:{value:t.privateKey,callback:function(e){t.privateKey=e},expression:"privateKey"}}),s("v-text-field",{attrs:{label:"Signature",outlined:""},model:{value:t.signature,callback:function(e){t.signature=e},expression:"signature"}}),s("v-text-field",{attrs:{label:"User ID",outlined:""},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),s("v-text-field",{attrs:{label:"Message",outlined:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),s("v-btn",{attrs:{color:"primary"},on:{click:t.sendMessage}},[t._v(" Send message ")]),s("v-btn",{on:{click:t.generateSignature}},[t._v(" Generate Signature ")])],1)},$=[];const q=new C;let N=class extends a["a"]{constructor(){super(...arguments),this.privateKey="",this.publicKey="",this.userId="",this.signature="",this.message="",this.errorVisible=!1,this.error=""}generateSignature(){this.errorVisible=!1,this.error="";try{this.signature=q.generateSignature(this.privateKey,this.message)}catch(t){this.errorVisible=!0,this.error=t}}sendMessage(){var t=new Headers;t.append("Content-Type","application/json"),this.signature||(this.errorVisible=!0,this.error="Signature is required!"),this.userId||(this.errorVisible=!0,this.error="User ID is required!");var e=JSON.stringify({message:this.message,signature:this.signature,userId:this.userId}),s={method:"POST",headers:t,body:e};fetch("http://localhost:8002/messages",s).then(t=>{if(401==t.status)throw this.errorVisible=!0,this.error="Invalid signature! (Checked on server)",new Error(t.status.toString());if(200!==t.status)throw new Error(t.status.toString());return t.json()}).then(t=>{this.message="",this.$emit("send-message")}).catch(t=>{console.log("Unknown error: "+t)})}};N=Object(x["a"])([V["a"]],N);var D=N,J=D,W=s("0798"),R=s("8654"),U=s("a844"),G=Object(c["a"])(J,F,$,!1,null,null,null),Q=G.exports;v()(G,{VAlert:W["a"],VBtn:M["a"],VCol:d["a"],VTextField:R["a"],VTextarea:U["a"]});var z=a["a"].extend({name:"App",components:{HelloWorld:b,Chatbox:K,SendMessageBox:Q},data:()=>({}),methods:{updateMessages(){let t=this.$refs.chatbox;t.updateMessages()}}}),X=z,Y=s("7496"),Z=s("40dc"),tt=s("f6c4"),et=s("2fa4"),st=Object(c["a"])(X,r,i,!1,null,null,null),at=st.exports;v()(st,{VApp:Y["a"],VAppBar:Z["a"],VBtn:M["a"],VCol:d["a"],VContainer:p["a"],VIcon:O["a"],VMain:tt["a"],VRow:m["a"],VSpacer:et["a"]});var rt=s("f309");a["a"].use(rt["a"]);var it=new rt["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:it,render:t=>t(at)}).$mount("#app")}});
//# sourceMappingURL=app.0b5db3b1.js.map