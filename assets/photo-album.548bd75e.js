import{_ as e,r as l,o as a,f as o,w as t,c as s,a as i,d,b as n,q as r,F as c}from"./app.73d59fdb.js";const u=["src"],p={key:1,class:"el-icon-plus avatar-uploader-icon"};var m=e({data:()=>({imageUrl:""}),methods:{handleAvatarSuccess(e,l){this.imageUrl=URL.createObjectURL(l.raw)},beforeAvatarUpload(e){const l="image/jpeg"===e.type,a=e.size/1024/1024<2;return l||this.$message.error("Avatar picture must be JPG format!"),a||this.$message.error("Avatar picture size can not exceed 2MB!"),l&&a}}},[["render",function(e,i,d,n,r,c){const m=l("el-upload");return a(),o(m,{class:"avatar-uploader",action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":c.handleAvatarSuccess,"before-upload":c.beforeAvatarUpload},{default:t((()=>[r.imageUrl?(a(),s("img",{key:0,src:r.imageUrl,class:"avatar"},null,8,u)):(a(),s("i",p))])),_:1},8,["on-success","before-upload"])}]]),f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m});const g={data:()=>({fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}),methods:{handleRemove(e,l){console.log(e,l)},handlePreview(e){console.log(e)},handleExceed(e,l){this.$message.warning(`The limit is 3, you selected ${e.length} files this time, add up to ${e.length+l.length} totally`)},beforeRemove(e,l){return this.$confirm(`Cancel the transfert of ${e.name} ?`)}}},h=d("Click to upload"),b=n("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1);var _=e(g,[["render",function(e,s,d,n,r,c){const u=l("el-button"),p=l("el-upload");return a(),o(p,{class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","on-preview":c.handlePreview,"on-remove":c.handleRemove,"before-remove":c.beforeRemove,multiple:"",limit:3,"on-exceed":c.handleExceed,"file-list":r.fileList},{tip:t((()=>[b])),default:t((()=>[i(u,{size:"small",type:"primary"},{default:t((()=>[h])),_:1})])),_:1},8,["on-preview","on-remove","before-remove","on-exceed","file-list"])}]]),v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_});const j={data:()=>({dialogImageUrl:"",dialogVisible:!1,disabled:!1}),methods:{handleRemove(e){console.log(e)},handlePictureCardPreview(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleDownload(e){console.log(e)}}},y=n("i",{class:"el-icon-plus"},null,-1),w=["src"],k={class:"el-upload-list__item-actions"},z=["onClick"],C=[n("i",{class:"el-icon-zoom-in"},null,-1)],S=["onClick"],U=[n("i",{class:"el-icon-download"},null,-1)],M=["onClick"],x=[n("i",{class:"el-icon-delete"},null,-1)],V=["src"];var P=e(j,[["render",function(e,o,d,u,p,m){const f=l("el-upload"),g=l("el-dialog");return a(),s(c,null,[i(f,{action:"#","list-type":"picture-card","auto-upload":!1},{default:t((()=>[y])),file:t((({file:e})=>[n("div",null,[n("img",{class:"el-upload-list__item-thumbnail",src:e.url,alt:""},null,8,w),n("span",k,[n("span",{class:"el-upload-list__item-preview",onClick:l=>m.handlePictureCardPreview(e)},C,8,z),p.disabled?r("v-if",!0):(a(),s("span",{key:0,class:"el-upload-list__item-delete",onClick:l=>m.handleDownload(e)},U,8,S)),p.disabled?r("v-if",!0):(a(),s("span",{key:1,class:"el-upload-list__item-delete",onClick:l=>m.handleRemove(e)},x,8,M))])])])),_:1}),i(g,{modelValue:p.dialogVisible,"onUpdate:modelValue":o[0]||(o[0]=e=>p.dialogVisible=e)},{default:t((()=>[n("img",{width:"100%",src:p.dialogImageUrl,alt:""},null,8,V)])),_:1},8,["modelValue"])],64)}]]),R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const L={},O=n("i",{class:"el-icon-upload"},null,-1),T=n("div",{class:"el-upload__text"},[d(" Drop file here or "),n("em",null,"click to upload")],-1),$=n("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1);var q=e(L,[["render",function(e,s){const i=l("el-upload");return a(),o(i,{class:"upload-demo",drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""},{tip:t((()=>[$])),default:t((()=>[O,T])),_:1})}]]),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const I={data:()=>({fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}),methods:{handleRemove(e,l){console.log(e,l)},handlePreview(e){console.log(e)}}},D=d("Click to upload"),E=n("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1);var B=e(I,[["render",function(e,s,d,n,r,c){const u=l("el-button"),p=l("el-upload");return a(),o(p,{class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","on-preview":c.handlePreview,"on-remove":c.handleRemove,"file-list":r.fileList,"list-type":"picture"},{tip:t((()=>[E])),default:t((()=>[i(u,{size:"small",type:"primary"},{default:t((()=>[D])),_:1})])),_:1},8,["on-preview","on-remove","file-list"])}]]),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const G={data:()=>({fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}),methods:{handleChange(e,l){this.fileList=l.slice(-3)}}},J=d("Click to upload"),H=n("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1);var K=e(G,[["render",function(e,s,d,n,r,c){const u=l("el-button"),p=l("el-upload");return a(),o(p,{class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","on-change":c.handleChange,"file-list":r.fileList},{tip:t((()=>[H])),default:t((()=>[i(u,{size:"small",type:"primary"},{default:t((()=>[J])),_:1})])),_:1},8,["on-change","file-list"])}]]),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const Q={methods:{submitUpload(){this.$refs.upload.submit()}}},W=d("select file"),X=d("upload to server"),Y=n("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1);var Z=e(Q,[["render",function(e,s,d,n,r,c){const u=l("el-button"),p=l("el-upload");return a(),o(p,{ref:"upload",class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1},{trigger:t((()=>[i(u,{size:"small",type:"primary"},{default:t((()=>[W])),_:1})])),tip:t((()=>[Y])),default:t((()=>[i(u,{style:{"margin-left":"10px"},size:"small",type:"success",onClick:c.submitUpload},{default:t((()=>[X])),_:1},8,["onClick"])])),_:1},512)}]]),ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});const le={data:()=>({dialogImageUrl:"",dialogVisible:!1}),methods:{handleRemove(e,l){console.log(e,l)},handlePictureCardPreview(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},ae=n("i",{class:"el-icon-plus"},null,-1),oe=["src"];var te=e(le,[["render",function(e,o,d,r,u,p){const m=l("el-upload"),f=l("el-dialog");return a(),s(c,null,[i(m,{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":p.handlePictureCardPreview,"on-remove":p.handleRemove},{default:t((()=>[ae])),_:1},8,["on-preview","on-remove"]),i(f,{modelValue:u.dialogVisible,"onUpdate:modelValue":o[0]||(o[0]=e=>u.dialogVisible=e)},{default:t((()=>[n("img",{width:"100%",src:u.dialogImageUrl,alt:""},null,8,oe)])),_:1},8,["modelValue"])],64)}]]),se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te});export{f as _,v as a,R as b,A as c,F as d,N as e,ee as f,se as g};
