var e=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,t=(l,o,a)=>o in l?e(l,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[o]=a,n=(e,l)=>{for(var o in l||(l={}))d.call(l,o)&&t(e,o,l[o]);if(a)for(var o of a(l))c.call(l,o)&&t(e,o,l[o]);return e};import{g as u,l as i,_ as r,r as h,o as s,c as b,b as m,a as p,F as k,h as V,t as g,w as _,i as f,f as O,d as x,j as S}from"./app.73d59fdb.js";var v=r(u({setup:()=>({checked1:i(!0),checked2:i(!1),checked3:i(!1),checked4:i(!1),checked5:i(!1),checked6:i(!1),checked7:i(!1),checked8:i(!1)})}),[["render",function(e,l,o,a,d,c){const t=h("el-checkbox");return s(),b(k,null,[m("div",null,[p(t,{modelValue:e.checked1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked1=l),label:"Option 1"},null,8,["modelValue"]),p(t,{modelValue:e.checked2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked2=l),label:"Option 2"},null,8,["modelValue"])]),m("div",null,[p(t,{modelValue:e.checked3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked3=l),label:"Option 1",size:"medium"},null,8,["modelValue"]),p(t,{modelValue:e.checked4,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checked4=l),label:"Option 2",size:"medium"},null,8,["modelValue"])]),m("div",null,[p(t,{modelValue:e.checked5,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checked5=l),label:"Option 1",size:"small"},null,8,["modelValue"]),p(t,{modelValue:e.checked6,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checked6=l),label:"Option 2",size:"small"},null,8,["modelValue"])]),m("div",null,[p(t,{modelValue:e.checked7,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checked7=l),label:"Option 1",size:"mini"},null,8,["modelValue"]),p(t,{modelValue:e.checked8,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checked8=l),label:"Option 2",size:"mini"},null,8,["modelValue"])])],64)}]]),z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:v});const y=["Shanghai","Beijing","Guangzhou","Shenzhen"],U=u({setup(){const e=V({checkboxGroup1:["Shanghai"],checkboxGroup2:["Shanghai"],checkboxGroup3:["Shanghai"],checkboxGroup4:["Shanghai"],cities:y});return n({},g(e))}}),C={class:"demo-button-style"},j={class:"demo-button-style"},G={class:"demo-button-style"};var w=r(U,[["render",function(e,l,o,a,d,c){const t=h("el-checkbox-button"),n=h("el-checkbox-group");return s(),b(k,null,[m("div",null,[p(n,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checkboxGroup1=l)},{default:_((()=>[(s(!0),b(k,null,f(e.cities,(e=>(s(),O(t,{key:e,label:e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])]),m("div",C,[p(n,{modelValue:e.checkboxGroup2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checkboxGroup2=l),size:"medium"},{default:_((()=>[(s(!0),b(k,null,f(e.cities,(e=>(s(),O(t,{key:e,label:e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])]),m("div",j,[p(n,{modelValue:e.checkboxGroup3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checkboxGroup3=l),size:"small"},{default:_((()=>[(s(!0),b(k,null,f(e.cities,(e=>(s(),O(t,{key:e,label:e,disabled:"Beijing"===e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label","disabled"])))),128))])),_:1},8,["modelValue"])]),m("div",G,[p(n,{modelValue:e.checkboxGroup4,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkboxGroup4=l),size:"mini",disabled:""},{default:_((()=>[(s(!0),b(k,null,f(e.cities,(e=>(s(),O(t,{key:e,label:e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])],64)}],["__scopeId","data-v-69996c0f"]]),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const B=u({setup:()=>({checked1:i(!1),checked2:i(!0)})}),I=x("Disabled"),M=x("Not disabled");var T=r(B,[["render",function(e,l,o,a,d,c){const t=h("el-checkbox");return s(),b(k,null,[p(t,{modelValue:e.checked1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked1=l),disabled:""},{default:_((()=>[I])),_:1},8,["modelValue"]),p(t,{modelValue:e.checked2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked2=l)},{default:_((()=>[M])),_:1},8,["modelValue"])],64)}]]),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});var L=r(u({setup:()=>({checkList:i(["selected and disabled","Option A"])})}),[["render",function(e,l,o,a,d,c){const t=h("el-checkbox"),n=h("el-checkbox-group");return s(),O(n,{modelValue:e.checkList,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checkList=l)},{default:_((()=>[p(t,{label:"Option A"}),p(t,{label:"Option B"}),p(t,{label:"Option C"}),p(t,{label:"disabled",disabled:""}),p(t,{label:"selected and disabled",disabled:""})])),_:1},8,["modelValue"])}]]),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const E=["Shanghai","Beijing","Guangzhou","Shenzhen"],F=u({setup(){const e=V({checkAll:!1,checkedCities:["Shanghai","Beijing"],cities:E,isIndeterminate:!0});return a=n({},g(e)),l(a,o({handleCheckAllChange:l=>{e.checkedCities=l?E:[],e.isIndeterminate=!1},handleCheckedCitiesChange:l=>{const o=l.length;e.checkAll=o===e.cities.length,e.isIndeterminate=o>0&&o<e.cities.length}}));var a}}),N=x("Check all");var q=r(F,[["render",function(e,l,o,a,d,c){const t=h("el-checkbox"),n=h("el-checkbox-group");return s(),b(k,null,[p(t,{modelValue:e.checkAll,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checkAll=l),indeterminate:e.isIndeterminate,onChange:e.handleCheckAllChange},{default:_((()=>[N])),_:1},8,["modelValue","indeterminate","onChange"]),p(n,{modelValue:e.checkedCities,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checkedCities=l),onChange:e.handleCheckedCitiesChange},{default:_((()=>[(s(!0),b(k,null,f(e.cities,(e=>(s(),O(t,{key:e,label:e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"])],64)}]]),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const J=["Shanghai","Beijing","Guangzhou","Shenzhen"];var K=r(u({setup(){const e=V({checkedCities:["Shanghai","Beijing"],cities:J});return g(e)}}),[["render",function(e,l,o,a,d,c){const t=h("el-checkbox"),n=h("el-checkbox-group");return s(),O(n,{modelValue:e.checkedCities,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checkedCities=l),min:1,max:2},{default:_((()=>[(s(!0),b(k,null,f(e.cities,(e=>(s(),O(t,{key:e,label:e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])}]]),Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const R=u({setup(){const e=V({checked1:!0,checked2:!1,checked3:!1,checked4:!0,checkboxGroup1:[],checkboxGroup2:[]});return g(e)}}),W={class:"demo-with-border"},X={class:"demo-with-border"},Y={class:"demo-with-border"};var Z=r(R,[["render",function(e,l,o,a,d,c){const t=h("el-checkbox"),n=h("el-checkbox-group");return s(),b(k,null,[m("div",null,[p(t,{modelValue:e.checked1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked1=l),label:"Option1",border:""},null,8,["modelValue"]),p(t,{modelValue:e.checked2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked2=l),label:"Option2",border:""},null,8,["modelValue"])]),m("div",W,[p(t,{modelValue:e.checked3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked3=l),label:"Option1",border:"",size:"medium"},null,8,["modelValue"]),p(t,{modelValue:e.checked4,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checked4=l),label:"Option2",border:"",size:"medium"},null,8,["modelValue"])]),m("div",X,[p(n,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkboxGroup1=l),size:"small"},{default:_((()=>[p(t,{label:"Option1",border:""}),p(t,{label:"Option2",border:"",disabled:""})])),_:1},8,["modelValue"])]),m("div",Y,[p(n,{modelValue:e.checkboxGroup2,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkboxGroup2=l),size:"mini",disabled:""},{default:_((()=>[p(t,{label:"Option1",border:""}),p(t,{label:"Option2",border:""})])),_:1},8,["modelValue"])])],64)}],["__scopeId","data-v-71aeb71d"]]),$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});export{z as _,A as a,P as b,D as c,H as d,Q as e,$ as f};
