import{c as A,a as C,h as p,aq as E,_ as S,Y as g,al as M,ad as P,am as B,Z as w,$ as x,aa as d,a6 as m,a3 as q,an as D,r as y,U as $,a1 as h,a4 as G,a0 as k,V as N,ar as Q,a5 as b,ao as W}from"./index-BVudpYoi.js";import{Q as j,r as V,d as I,a as Z,i as z,m as F,b as J}from"./ticket-rFse8_Jv.js";import{d as U}from"./date-D9ybJlsp.js";import{a as R,w as T,u as Y}from"./user-C6lVHT2W.js";import{Q as K,a as X}from"./QForm-BA7K8PIn.js";import"./format-bPrsU9Pb.js";const ee=A({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(t,{slots:a}){const s=C(()=>t.sent===!0?"sent":"received"),e=C(()=>`q-message-text-content q-message-text-content--${s.value}`+(t.textColor!==void 0?` text-${t.textColor}`:"")),o=C(()=>`q-message-text q-message-text--${s.value}`+(t.bgColor!==void 0?` text-${t.bgColor}`:"")),n=C(()=>"q-message-container row items-end no-wrap"+(t.sent===!0?" reverse":"")),i=C(()=>t.size!==void 0?`col-${t.size}`:""),r=C(()=>({msg:t.textHtml===!0?"innerHTML":"textContent",stamp:t.stampHtml===!0?"innerHTML":"textContent",name:t.nameHtml===!0?"innerHTML":"textContent",label:t.labelHtml===!0?"innerHTML":"textContent"}));function f(l){return a.stamp!==void 0?[l,p("div",{class:"q-message-stamp"},a.stamp())]:t.stamp?[l,p("div",{class:"q-message-stamp",[r.value.stamp]:t.stamp})]:[l]}function u(l,c){const _=c===!0?l.length>1?v=>v:v=>p("div",[v]):v=>p("div",{[r.value.msg]:v});return l.map((v,L)=>p("div",{key:L,class:o.value},[p("div",{class:e.value},f(_(v)))]))}return()=>{const l=[];a.avatar!==void 0?l.push(a.avatar()):t.avatar!==void 0&&l.push(p("img",{class:`q-message-avatar q-message-avatar--${s.value}`,src:t.avatar,"aria-hidden":"true"}));const c=[];a.name!==void 0?c.push(p("div",{class:`q-message-name q-message-name--${s.value}`},a.name())):t.name!==void 0&&c.push(p("div",{class:`q-message-name q-message-name--${s.value}`,[r.value.name]:t.name})),a.default!==void 0?c.push(u(E(a.default()),!0)):t.text!==void 0&&c.push(u(t.text)),l.push(p("div",{class:i.value},c));const _=[];return a.label!==void 0?_.push(p("div",{class:"q-message-label"},a.label())):t.label!==void 0&&_.push(p("div",{class:"q-message-label",[r.value.label]:t.label})),_.push(p("div",{class:n.value},l)),p("div",{class:`q-message q-message-${s.value}`},_)}}}),te={__name:"ChatMessage",props:["chat"],setup(t,{expose:a}){a();function s(n){return n.split(".").pop().toString()}function e(n){window.open(n,"_blank")}const o={getFileName:s,downloadFile:e,get date(){return U}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},ae={class:"chat"},ne={key:0,class:"q-mb-sm"};function se(t,a,s,e,o,n){return g(),M("div",ae,[(g(!0),M(P,null,B(s.chat,(i,r)=>(g(),w(ee,{key:r,"bg-color":i.user_id>0?"grey-3":"green-1",sent:i.user_id>0,name:i.user_id>0?"My":"Admin",stamp:e.date.formatDate(i.created_at*1e3,"MM/DD HH:mm")},{default:x(()=>[d("pre",null,m(i.content),1),i.attachment.length?(g(),M("div",ne,[(g(!0),M(P,null,B(i.attachment,(f,u)=>(g(),w(q,{key:u,unelevated:"",outline:"",dense:"",class:"q-mr-sm",color:"primary",icon:"eva-eye-outline",size:"12px",label:t.$t("preview",{name:e.getFileName(f)}),onClick:l=>e.downloadFile(f)},null,8,["label","onClick"]))),128))])):D("",!0)]),_:2},1032,["bg-color","sent","name","stamp"]))),128))])}const oe=S(te,[["render",se],["__scopeId","data-v-35b45aeb"],["__file","ChatMessage.vue"]]),ie={__name:"ReplyMessage",props:["id"],emits:["update"],setup(t,{expose:a,emit:s}){a();const e=t,o=s,n=y(!1),i=y(),r=$({topic_id:0,content:"",attachment:[]});function f(){i.value.validate().then(c=>{c&&u()})}async function u(){n.value=!0;const c=[];for(let _=0;_<r.attachment.length;_++){const v=await R(r.attachment[_]);v.path&&c.push(v.path)}r.topic_id=e.id,r.attachment=c,V(r).then(_=>{r.attachment=[],r.content="",o("update")}).catch(_=>{k.create({position:"top",message:_.message,timeout:3e3})}).finally(()=>{n.value=!1})}const l={props:e,emit:o,loading:n,formRef:i,form:r,onSubmit:f,onReply:u,ref:y,reactive:$,get Notify(){return k},get reply(){return V},get upload(){return R}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function le(t,a,s,e,o,n){return g(),w(X,{ref:"formRef",class:"q-gutter-md q-mt-lg"},{default:x(()=>[h(j,{outlined:"",dense:"",type:"textarea",modelValue:e.form.content,"onUpdate:modelValue":a[0]||(a[0]=i=>e.form.content=i),label:t.$t("ticket_form.content"),hint:t.$t("ticket_form.content_message"),"lazy-rules":"",rules:[i=>i&&i.length>0||t.$t("ticket_form.content_message")]},null,8,["modelValue","label","hint","rules"]),h(K,{outlined:"",dense:"",multiple:"",modelValue:e.form.attachment,"onUpdate:modelValue":a[1]||(a[1]=i=>e.form.attachment=i),label:t.$t("ticket_form.attachment"),accept:".jpg,.pdf,.png,.gif"},{append:x(()=>[h(G,{name:"eva-attach-outline",size:"16px"})]),_:1},8,["modelValue","label"]),h(q,{unelevated:"",label:t.$t("reply"),color:"primary",loading:e.loading,onClick:e.onSubmit},null,8,["label","loading"])]),_:1},512)}const re=S(ie,[["render",le],["__file","ReplyMessage.vue"]]),O=()=>T.contract("0x6a0cd761aC978cF89F7A272aE39211c1C8CeB07D",[{inputs:[],name:"_queueId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"wallet",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"bnb",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"message",type:"bytes"}],name:"draw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"id",type:"string"}],name:"pay",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"queueQuery",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"wallet",type:"address"}],name:"setWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"setupOwner",outputs:[],stateMutability:"nonpayable",type:"function"}]),H={pay(t,a){const s=O();return new Promise((e,o)=>{s.methods.pay(t).estimateGas({value:a}).then(()=>{s.methods.pay(t).send({value:a}).on("receipt",n=>{e()}).on("error",n=>{o(n.data)}).catch(n=>{o(n.data)})}).catch(n=>{o(n.data)})})},draw(t){const a=O();return new Promise((s,e)=>{a.methods.draw(t).estimateGas().then(()=>{a.methods.draw(t).send().on("receipt",o=>{s()}).on("error",o=>{e(o.data)}).catch(o=>{e(o.data)})}).catch(o=>{e(o.data)})})}},de={__name:"PayDraw",props:["data"],emits:["update"],setup(t,{expose:a,emit:s}){a();const e=t,o=s,n=y(!1);function i(){n.value=!0;const u=e.data.order_number_show-e.data.trade_number_show;H.pay(e.data.chain_id,T.toWei(u)).then(()=>{o("update")}).catch(l=>{k.create({position:"top",message:l.message,timeout:3e3})}).finally(()=>{n.value=!1})}function r(){n.value=!0,I(e.data.id).then(u=>{u.data.length&&(n.value=!0,H.draw(u.data[0].trade_sign).then(()=>{o("update")}).catch(l=>{k.create({position:"top",message:l.message,timeout:3e3})}).finally(()=>{n.value=!1}))}).catch(u=>{k.create({position:"top",message:u.message,timeout:3e3})}).finally(()=>{n.value=!1})}const f={props:e,emit:o,loading:n,onPay:i,onDraw:r,ref:y,get Notify(){return k},get draw(){return I},get payContract(){return H},get web3(){return T}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}};function ue(t,a,s,e,o,n){return g(),M(P,null,[s.data.status==0?(g(),w(q,{key:0,unelevated:"",class:"q-mt-lg full-width",label:t.$t("ticket_pay",{amount:s.data.order_number_show-s.data.trade_number_show}),color:"primary",loading:e.loading,onClick:e.onPay},null,8,["label","loading"])):D("",!0),s.data.refund_status==0?(g(),w(q,{key:1,unelevated:"",class:"q-mt-lg full-width",label:t.$t("ticket_draw",{amount:s.data.trade_number_show}),color:"positive",loading:e.loading,onClick:e.onDraw},null,8,["label","loading"])):D("",!0)],64)}const ce=S(de,[["render",ue],["__file","PayDraw.vue"]]),me={__name:"InfoPage",setup(t,{expose:a}){a();const s=Q(),e=y(!0),o=y({}),n=y([]),i=y(0);function r(c=!0){c&&(e.value=!0),z(i.value).then(_=>{o.value=_.data,f()}).finally(()=>{e.value=!1})}function f(){F(o.value.id).then(c=>{n.value=c.data})}Y.on(()=>{i.value=s.params.id,r()}),N(()=>{clearInterval(u)});const u=setInterval(()=>{r(!1)},1e4),l={route:s,loading:e,data:o,chat:n,id:i,getData:r,getMessage:f,timer:u,get date(){return U},ref:y,onUnmounted:N,get useRoute(){return Q},get info(){return z},get message(){return F},get userModel(){return Y},ChatMessage:oe,ReplyMessage:re,PayDraw:ce};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},_e={class:"box"},pe={class:"title"},fe={class:"row q-col-gutter-lg"},ge={class:"col-sm-5 col-xs-12"},ve={class:"info"},ye={class:"item"},he={class:"name"},be={class:"item"},we={class:"name"},Ce={class:"item"},ke={class:"name"},Me={class:"item"},qe={class:"name"},xe={class:"name"},De={class:"item"},Se={class:"name"},He={class:"item"},Pe={class:"name"},Te={class:"col-sm-7 col-xs-12"};function Be(t,a,s,e,o,n){return g(),w(Z,{class:"q-pa-md"},{default:x(()=>[d("div",_e,[h(q,{flat:"",dense:"",class:"q-mb-sm text-blue-grey-3",icon:"eva-arrow-back-outline",onClick:a[0]||(a[0]=i=>t.$router.push("/"))}),d("div",pe,m(e.data.title??"..."),1),d("div",fe,[d("div",ge,[d("div",ve,[d("div",ye,[d("div",he,m(t.$t("ticket_form.email")),1),b(" "+m(e.data.email??"..."),1)]),d("div",be,[d("div",we,m(t.$t("ticket_form.telegram")),1),b(" "+m(e.data.telegram??"..."),1)]),d("div",Ce,[d("div",ke,m(t.$t("ticket_form.created_at")),1),b(" "+m(e.date.formatDate(e.data.created_at*1e3,"YYYY/MM/DD HH:mm")),1)]),d("div",Me,[d("div",qe,m(t.$t("ticket_form.updated_at")),1),b(" "+m(e.date.formatDate(e.data.updated_at*1e3,"YYYY/MM/DD HH:mm")),1)]),d("div",{class:W(["item",{wait:e.data.status==0,paid:e.data.status==1}])},[d("div",xe,m(t.$t("ticket_form.status")),1),b(" "+m(t.$t("ticket_form.status_text."+(e.data.status??-1))),1)],2),d("div",De,[d("div",Se,m(t.$t("ticket_form.order_number")),1),b(" "+m(e.data.order_number_show)+" BNB ",1)]),d("div",He,[d("div",Pe,m(t.$t("ticket_form.trade_number")),1),b(" "+m(e.data.trade_number_show)+" BNB ",1)])]),h(e.PayDraw,{data:e.data,onUpdate:a[1]||(a[1]=i=>e.getData(!1))},null,8,["data"]),e.data.status>0?(g(),w(e.ReplyMessage,{key:0,id:e.data.id,onUpdate:a[2]||(a[2]=i=>e.getData(!1))},null,8,["id"])):D("",!0)]),d("div",Te,[h(e.ChatMessage,{chat:e.chat},null,8,["chat"])])]),h(J,{showing:e.loading},null,8,["showing"])])]),_:1})}const Fe=S(me,[["render",Be],["__scopeId","data-v-bc5ac106"],["__file","InfoPage.vue"]]);export{Fe as default};
