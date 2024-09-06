import{_ as P,r as f,U as b,Y as Q,Z as q,$ as p,ap as y,a0 as v,aa as l,a1 as n,a3 as w,a6 as k,a4 as B,a8 as S,a9 as N,a5 as i}from"./index-DBfiVSnF.js";import{a as C,p as V,Q as d,b as U}from"./ticket-DmHksTpi.js";import{Q as x,a as $}from"./QForm-qpebFTc9.js";import{a as I}from"./user-CJuUFQP6.js";import"./format-BZi_OtqC.js";const R={__name:"CreatePage",setup(e,{expose:o}){o();const u=y(),t=f(!1),c=f(),r=b({title:"",telegram:"",email:"",content:"",attachment:[]});function a(){c.value.validate().then(m=>{m&&h()})}async function h(){t.value=!0;const m=[];for(let s=0;s<r.attachment.length;s++){const _=await I(r.attachment[s]);_.path&&m.push(_.path)}r.attachment=m,V(r).then(s=>{u.push("/info/"+s.data.id)}).catch(s=>{v.create({position:"top",message:s.message,timeout:3e3})}).finally(()=>{t.value=!1})}const g={router:u,loading:t,formRef:c,form:r,onSubmit:a,onPost:h,ref:f,reactive:b,get useRouter(){return y},get Notify(){return v},get post(){return V},get upload(){return I}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}},j=e=>(S("data-v-da9e7313"),e=e(),N(),e),T={class:"box"},z={class:"title"},D={class:"message"},F={class:"row q-col-gutter-lg"},O={class:"col-sm-6 col-xs-12"},X={class:"q-pt-lg"},Y=j(()=>l("div",{class:"col-sm-6 col-xs-12"},[l("div",{class:"content"},[i(" 1. Please use your own language or English to clearly explain the specific functions and workflow of the contract in detail. "),l("br"),i("2. Please make the payment in BNB within 15 minutes, or your order request will be closed. "),l("br"),i("3. Once the payment is successful, we will communicate with you here. To ensure smooth communication, please provide your email and Telegram. "),l("br"),i("4. If the contract functions do not meet the requirements of the X community, we will terminate the order, and you will receive a full refund. You may resubmit after making the necessary adjustments. "),l("br"),i("5. If the order involves complex functions or requires additional modules, such as Dapp integration, we will ask you to pay additional fees in BNB. "),l("br"),i("6. After the contract is successfully generated, the wallet address used for payment will receive transaction taxes and other profit fees from the X ecosystem. Please keep your private key safe. ")])],-1));function A(e,o,u,t,c,r){return Q(),q(C,{class:"q-pa-md"},{default:p(()=>[l("div",T,[n(w,{flat:"",dense:"",class:"q-mb-sm text-blue-grey-3",icon:"eva-arrow-back-outline",onClick:o[0]||(o[0]=a=>e.$router.push("/"))}),l("div",z,k(e.$t("ticket_create")),1),l("div",D,k(e.$t("ticket_create_message")),1),l("div",F,[l("div",O,[l("div",X,[n($,{ref:"formRef",class:"q-gutter-md"},{default:p(()=>[n(d,{outlined:"",dense:"",modelValue:t.form.title,"onUpdate:modelValue":o[1]||(o[1]=a=>t.form.title=a),label:e.$t("ticket_form.title")},null,8,["modelValue","label"]),n(d,{outlined:"",dense:"",modelValue:t.form.email,"onUpdate:modelValue":o[2]||(o[2]=a=>t.form.email=a),label:e.$t("ticket_form.email")},null,8,["modelValue","label"]),n(d,{outlined:"",dense:"",modelValue:t.form.telegram,"onUpdate:modelValue":o[3]||(o[3]=a=>t.form.telegram=a),label:e.$t("ticket_form.telegram")},null,8,["modelValue","label"]),n(d,{outlined:"",dense:"",type:"textarea",modelValue:t.form.content,"onUpdate:modelValue":o[4]||(o[4]=a=>t.form.content=a),label:e.$t("ticket_form.content"),hint:e.$t("ticket_form.content_message"),"lazy-rules":"",rules:[a=>a&&a.length>0||e.$t("ticket_form.content_message")]},null,8,["modelValue","label","hint","rules"]),n(x,{outlined:"",dense:"",multiple:"",modelValue:t.form.attachment,"onUpdate:modelValue":o[5]||(o[5]=a=>t.form.attachment=a),label:e.$t("ticket_form.attachment"),accept:".jpg,.pdf,.png,.gif"},{append:p(()=>[n(B,{name:"eva-attach-outline",size:"16px"})]),_:1},8,["modelValue","label"]),n(w,{unelevated:"",label:e.$t("submit"),color:"primary",onClick:t.onSubmit},null,8,["label"])]),_:1},512)])]),Y]),n(U,{showing:t.loading},null,8,["showing"])])]),_:1})}const J=P(R,[["render",A],["__scopeId","data-v-da9e7313"],["__file","CreatePage.vue"]]);export{J as default};
