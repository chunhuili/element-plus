import{g as e,l,_ as a,r as o,o as t,c as n,a as i,F as r,f as s,w as u,b as d,j as p}from"./app.73d59fdb.js";const c=["a","b","c","d","e","f","g","h","i","j"];var m=a(e({setup:()=>({options:l(Array.from({length:1e3}).map(((e,l)=>({value:`Option ${l+1}`,label:`${c[l%10]}${l}`})))),value1:l([]),value2:l("")})}),[["render",function(e,l,a,s,u,d){const p=o("el-select-v2");return t(),n(r,null,[i(p,{modelValue:e.value1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value1=l),options:e.options,placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},"allow-create":"",filterable:"",multiple:"",clearable:""},null,8,["modelValue","options"]),i(p,{modelValue:e.value2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value2=l),options:e.options,placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},"allow-create":"",filterable:"",clearable:""},null,8,["modelValue","options"])],64)}]]),v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m});const g=["a","b","c","d","e","f","g","h","i","j"];var h=a(e({setup:()=>({options:l(Array.from({length:1e3}).map(((e,l)=>({value:`Option ${l+1}`,label:`${g[l%10]}${l}`})))),value:l("")})}),[["render",function(e,l,a,n,i,r){const u=o("el-select-v2");return t(),s(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),options:e.options,placeholder:"Please select",style:{width:"240px"}},null,8,["modelValue","options"])}]]),f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:h});const b=["a","b","c","d","e","f","g","h","i","j"];var _=a(e({setup:()=>({options:l(Array.from({length:1e3}).map(((e,l)=>({value:`Option ${l+1}`,label:`${b[l%10]}${l}`})))),value1:l([]),value2:l("")})}),[["render",function(e,l,a,s,u,d){const p=o("el-select-v2");return t(),n(r,null,[i(p,{modelValue:e.value1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value1=l),options:e.options,placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},multiple:"",clearable:""},null,8,["modelValue","options"]),i(p,{modelValue:e.value2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value2=l),options:e.options,placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},clearable:""},null,8,["modelValue","options"])],64)}]]),y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_});const V=["a","b","c","d","e","f","g","h","i","j"],$=e({setup:()=>({options:l(Array.from({length:1e3}).map(((e,l)=>({value:`Option${l+1}`,label:`${V[l%10]}${l}`})))),value:l([])})}),w={style:{"margin-right":"8px"}},x={style:{color:"var(--el-text-color-secondary)","font-size":"13px"}};var O=a($,[["render",function(e,l,a,n,i,r){const c=o("el-select-v2");return t(),s(c,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),filterable:"",options:e.options,placeholder:"Please select",style:{width:"240px"},multiple:""},{default:u((({item:e})=>[d("span",w,p(e.label),1),d("span",x,p(e.value),1)])),_:1},8,["modelValue","options"])}]]),S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const j=["a","b","c","d","e","f","g","h","i","j"];var M=a(e({setup:()=>({options:l(Array.from({length:1e3}).map(((e,l)=>({value:`Option${l+1}`,label:`${j[l%10]}${l}`,disabled:l%10==0})))),value:l([])})}),[["render",function(e,l,a,s,u,d){const p=o("el-select-v2");return t(),n(r,null,[i(p,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),filterable:"",options:e.options,placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},multiple:""},null,8,["modelValue","options"]),i(p,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value=l),disabled:"",filterable:"",options:e.options,placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},multiple:""},null,8,["modelValue","options"])],64)}]]),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const P=["a","b","c","d","e","f","g","h","i","j"];var U=a(e({setup:()=>({options:l(Array.from({length:1e3}).map(((e,l)=>({value:`Option${l+1}`,label:`${P[l%10]}${l}`})))),value:l([])})}),[["render",function(e,l,a,n,i,r){const u=o("el-select-v2");return t(),s(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),filterable:"",options:e.options,placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}]]),z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});const T=["a","b","c","d","e","f","g","h","i","j"];var k=a(e({setup:()=>({options:l(Array.from({length:10}).map(((e,l)=>{const a=l+1;return{value:`Group ${a}`,label:`Group ${a}`,options:Array.from({length:10}).map(((e,l)=>({value:`Option ${l+1+10*a}`,label:`${T[l%10]}${l+1+10*a}`})))}}))),value:l([])})}),[["render",function(e,l,a,n,i,r){const u=o("el-select-v2");return t(),s(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),filterable:"",options:e.options,placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}]]),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const C=["a","b","c","d","e","f","g","h","i","j"];var I=a(e({setup:()=>({options:l(Array.from({length:1e3}).map(((e,l)=>({value:`Option ${l+1}`,label:`${C[l%10]}${l}`})))),value:l([])})}),[["render",function(e,l,a,n,i,r){const u=o("el-select-v2");return t(),s(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),options:e.options,placeholder:"Please select",style:{width:"240px"},multiple:"","collapse-tags":""},null,8,["modelValue","options"])}]]),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const D=["a","b","c","d","e","f","g","h","i","j"];var G=a(e({setup:()=>({options:l(Array.from({length:1e3}).map(((e,l)=>({value:`Option ${l+1}`,label:`${D[l%10]}${l}`})))),value:l([])})}),[["render",function(e,l,a,n,i,r){const u=o("el-select-v2");return t(),s(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),options:e.options,placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}]]),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});var F=a(e({setup(){const e=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"].map((e=>({value:`value:${e}`,label:`label:${e}`}))),a=l([]),o=l([]),t=l(!1);return{loading:t,options:a,value:o,remoteMethod:l=>{""!==l?(t.value=!0,setTimeout((()=>{t.value=!1,a.value=e.filter((e=>e.label.toLowerCase().indexOf(l.toLowerCase())>-1))}),200)):a.value=[]}}}}),[["render",function(e,l,a,n,i,r){const u=o("el-select-v2");return t(),s(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),style:{width:"240px"},multiple:"",size:"medium",filterable:"",remote:"","remote-method":e.remoteMethod,clearable:"",options:e.options,loading:e.loading,placeholder:"Please enter a keyword"},null,8,["modelValue","remote-method","options","loading"])}]]),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});export{v as _,f as a,y as b,S as c,A as d,z as e,N as f,W as g,L as h,H as i};
