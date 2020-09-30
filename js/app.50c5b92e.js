(function(e){function t(t){for(var r,i,o=t[0],l=t[1],u=t[2],h=0,d=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},a={app:0},n=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push([1,"chunk-vendors"]),s()})({0:function(e,t){},1:function(e,t,s){e.exports=s("cd49")},bc28:function(e,t,s){e.exports=s.p+"img/avatar.896129ac.svg"},cd49:function(e,t,s){"use strict";s.r(t);var r=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[s("div",{staticClass:"d-flex align-center"},[s("h2",[e._v("Blockchain Chat")])]),s("v-spacer"),s("v-btn",{attrs:{href:"https://github.com/AndreasFurster/blockchain-ts",target:"_blank",text:""}},[s("span",{staticClass:"mr-2"},[e._v("Server repo")]),s("v-icon",[e._v("mdi-github")])],1),s("v-btn",{attrs:{href:"https://github.com/AndreasFurster/blockchain-ts-app",target:"_blank",text:""}},[s("span",{staticClass:"mr-2"},[e._v("App repo")]),s("v-icon",[e._v("mdi-github")])],1)],1),s("v-main",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("Chatbox",{ref:"chatbox"})],1),s("v-col",{attrs:{cols:"6"}},[s("SendMessageBox",{on:{"send-message":e.updateMessages}})],1)],1)],1)],1)],1)},n=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-col",{staticClass:"elevation-3"},[r("h3",[e._v("Messages")]),r("v-list",{attrs:{"three-line":""}},[e._l(e.messages,(function(t,a){return[r("v-list-item",{key:a,attrs:{color:"red"}},[r("v-list-item-avatar",[r("v-img",{attrs:{src:s("bc28")}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{innerHTML:e._s(t.userId)}}),r("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.message)}})],1),r("v-list-item-action",[r("v-btn",{attrs:{icon:""}},[r("v-tooltip",{attrs:{bottom:"",color:"#000"},scopedSlots:e._u([{key:"activator",fn:function(s){var a=s.on,n=s.attrs;return[r("v-icon",e._g(e._b({attrs:{color:t.valid?"green":"red"}},"v-icon",n,!1),a),[e._v("mdi-information")])]}}],null,!0)},[r("span",[e._v(" Index: "+e._s(t.index)),r("br"),e._v(" Hash: "+e._s(t.hash)),r("br"),e._v(" Generated hash: "+e._s(t.generatedHash)),r("br"),e._v(" Hash match: "+e._s(t.hashValid)),r("br"),e._v(" PreviousHash: "+e._s(t.previousHash)),r("br"),e._v(" Next hash match: "+e._s(t.hashChainValid)),r("br"),e._v(" Signature: "+e._s(t.signature)),r("br")])])],1)],1)],1)]}))],2)],1)},o=[],l=s("9ab4"),u=s("2fe1"),c=s("5c1a");class h{generateSignature(e,t){let s=c.pki.privateKeyFromPem(e),r=c.md.sha512.create();r.update(t,"utf8");let a=s.sign(r);return c.util.bytesToHex(a)}getHashForBlock(e,t,s,r,a){let n=""+JSON.stringify([{userId:e,message:t}])+s+r+a;var i=c.md.sha256.create();return i.update(n),i.digest().toHex()}}const d=new h;let p=class extends r["a"]{constructor(){super(...arguments),this.publicKey="",this.messages=[]}created(){this.updateMessages(),setInterval(this.updateMessages,5e3)}updateMessages(){fetch("http://localhost:8002/messages").then(e=>e.json()).then(e=>{this.messages=[];for(let t=0;t<e.length;t++){const s=e[t],{userId:r,message:a,index:n,hash:i,previousHash:o,signature:l}=s,u=d.getHashForBlock(r,a,n,o,l);s.hashValid=u===i;let c=e[t+1];s.hashChainValid=!c||c.previousHash===u,s.hash=s.hash.substring(0,8),s.previousHash=s.previousHash.substring(0,8),s.generatedHash=u.substring(0,8),s.signature=s.signature.substring(0,8),s.valid=s.hashValid&&s.hashChainValid,this.messages.push(s)}})}};p=Object(l["a"])([u["a"]],p);var v=p,g=v,b=s("2877"),m=s("6544"),f=s.n(m),_=s("8336"),V=s("62ad"),x=s("132d"),y=s("adda"),S=s("8860"),k=s("da13"),I=s("1800"),w=s("8270"),M=s("5d23"),O=s("3a2f"),C=Object(b["a"])(g,i,o,!1,null,null,null),j=C.exports;f()(C,{VBtn:_["a"],VCol:V["a"],VIcon:x["a"],VImg:y["a"],VList:S["a"],VListItem:k["a"],VListItemAction:I["a"],VListItemAvatar:w["a"],VListItemContent:M["a"],VListItemSubtitle:M["b"],VListItemTitle:M["c"],VTooltip:O["a"]});var H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-col",{staticClass:"elevation-3"},[s("h3",[e._v("Send message")]),s("v-alert",{attrs:{dense:"",type:"error",dismissible:""},model:{value:e.errorVisible,callback:function(t){e.errorVisible=t},expression:"errorVisible"}},[e._v(" "+e._s(e.error)+" ")]),s("v-textarea",{attrs:{label:"Private key (not send to server)",outlined:""},model:{value:e.privateKey,callback:function(t){e.privateKey=t},expression:"privateKey"}}),s("v-text-field",{attrs:{label:"Signature",outlined:""},model:{value:e.signature,callback:function(t){e.signature=t},expression:"signature"}}),s("v-text-field",{attrs:{label:"User ID",outlined:""},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),s("v-text-field",{attrs:{label:"Message",outlined:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),s("v-btn",{attrs:{color:"primary"},on:{click:e.sendMessage}},[e._v(" Send message ")]),s("v-btn",{on:{click:e.generateSignature}},[e._v(" Generate Signature ")])],1)},P=[];const T=new h;let A=class extends r["a"]{constructor(){super(...arguments),this.privateKey="",this.publicKey="",this.userId="",this.signature="",this.message="",this.errorVisible=!1,this.error=""}generateSignature(){this.errorVisible=!1,this.error="";try{this.signature=T.generateSignature(this.privateKey,this.message)}catch(e){this.errorVisible=!0,this.error=e}}sendMessage(){var e=new Headers;e.append("Content-Type","application/json"),this.signature||(this.errorVisible=!0,this.error="Signature is required!"),this.userId||(this.errorVisible=!0,this.error="User ID is required!");var t=JSON.stringify({message:this.message,signature:this.signature,userId:this.userId}),s={method:"POST",headers:e,body:t};fetch("http://localhost:8002/messages",s).then(e=>{if(401==e.status)throw this.errorVisible=!0,this.error="Invalid signature! (Checked on server)",new Error(e.status.toString());if(200!==e.status)throw new Error(e.status.toString());return e.json()}).then(e=>{this.message="",this.$emit("send-message")}).catch(e=>{console.log("Unknown error: "+e)})}};A=Object(l["a"])([u["a"]],A);var B=A,L=B,K=s("0798"),F=s("8654"),$=s("a844"),E=Object(b["a"])(L,H,P,!1,null,null,null),J=E.exports;f()(E,{VAlert:K["a"],VBtn:_["a"],VCol:V["a"],VTextField:F["a"],VTextarea:$["a"]});var N=r["a"].extend({name:"App",components:{Chatbox:j,SendMessageBox:J},data:()=>({}),methods:{updateMessages(){let e=this.$refs.chatbox;e.updateMessages()}}}),U=N,q=s("7496"),D=s("40dc"),G=s("a523"),R=s("f6c4"),z=s("0fd9"),Q=s("2fa4"),W=Object(b["a"])(U,a,n,!1,null,null,null),X=W.exports;f()(W,{VApp:q["a"],VAppBar:D["a"],VBtn:_["a"],VCol:V["a"],VContainer:G["a"],VIcon:x["a"],VMain:R["a"],VRow:z["a"],VSpacer:Q["a"]});var Y=s("f309");r["a"].use(Y["a"]);var Z=new Y["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:Z,render:e=>e(X)}).$mount("#app")}});
//# sourceMappingURL=app.50c5b92e.js.map