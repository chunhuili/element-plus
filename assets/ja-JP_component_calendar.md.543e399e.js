import{_ as a,a as n,b as s,c as t}from"./range.c20b802a.js";import{r as e,o as E,c as p,a as C,w as o,u as c,b as l,d as u,e as D}from"./app.73d59fdb.js";const F=l("h1",{id:"カレンダー",tabindex:"-1"},[u("カレンダー "),l("a",{class:"header-anchor",href:"#カレンダー","aria-hidden":"true"},"#")],-1),i=l("p",null,"日付を表示します。",-1),k=l("h2",{id:"ベーシック",tabindex:"-1"},[u("ベーシック "),l("a",{class:"header-anchor",href:"#ベーシック","aria-hidden":"true"},"#")],-1),r=l("p",null,"calendar/basic",-1),A=l("h2",{id:"カスタムコンテンツ",tabindex:"-1"},[u("カスタムコンテンツ "),l("a",{class:"header-anchor",href:"#カスタムコンテンツ","aria-hidden":"true"},"#")],-1),d=l("p",null,"calendar/customize",-1),B=l("h2",{id:"レンジ",tabindex:"-1"},[u("レンジ "),l("a",{class:"header-anchor",href:"#レンジ","aria-hidden":"true"},"#")],-1),m=l("p",null,"calendar/range",-1),g=l("h2",{id:"customize-header",tabindex:"-1"},[u("Customize header "),l("a",{class:"header-anchor",href:"#customize-header","aria-hidden":"true"},"#")],-1),h=l("p",null,"calendar/header",-1),v=D('<h2 id="localization" tabindex="-1">Localization <a class="header-anchor" href="#localization" aria-hidden="true">#</a></h2><p>The default locale of is English, if you need to use other languages, please check <a href="/en-US/guide/i18n.html">Internationalization</a></p><p>Note, date time locale (month name, first day of the week ...) are also configured in localization.</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default Value</th></tr></thead><tbody><tr><td>modelValue / v-model</td><td>バインド値</td><td>date</td><td>—</td><td>—</td></tr><tr><td>レンジ</td><td>開始時刻と終了時刻を含む時間範囲。 開始時間は週の開始日、終了時間は週の終了日でなければならず、時間幅は2ヶ月を超えることはできません。</td><td>Array</td><td>—</td><td>—</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th></tr></thead><tbody><tr><td>dateCell</td><td>{ type, isSelected, day, date }. <code>type</code> は日付が属する月を示し、オプションの値は前月、現在の月、次の月です。 <code>isSelected</code> は日付が選択されているかどうかを示す。 <code>day</code>はyyyy-MM-dd形式でフォーマットされた日付です。 <code>date</code> はセルが表す日付</td><td>data</td></tr></tbody></table>',7),f='{"title":"カレンダー","description":"","frontmatter":{},"headers":[{"level":2,"title":"ベーシック","slug":"ベーシック"},{"level":2,"title":"カスタムコンテンツ","slug":"カスタムコンテンツ"},{"level":2,"title":"レンジ","slug":"レンジ"},{"level":2,"title":"Customize header","slug":"customize-header"},{"level":2,"title":"Localization","slug":"localization"},{"level":2,"title":"属性","slug":"属性"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"ja-JP/component/calendar.md","lastUpdated":1633935899564}',b={};const y=Object.assign(b,{setup:function(l){const u={"../../examples/calendar/basic.vue":a,"../../examples/calendar/customize.vue":n,"../../examples/calendar/header.vue":s,"../../examples/calendar/range.vue":t};return(a,n)=>{const s=e("Demo");return E(),p("div",null,[F,i,k,C(s,{demos:c(u),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20defineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20value%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EDate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20value%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"calendar/basic",html:"%0A%20%20%3Cel-calendar%20v-model%3D%22value%22%20%2F%3E%0A",js:"%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20value%20%3D%20ref(new%20Date())%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A",css:"","css-pre-processor":"none","js-pre-processor":"ts","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-calendar%20v-model%3D%22value%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20value%20%3D%20ref(new%20Date())%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",description:"%3Cp%3E%E7%8F%BE%E5%9C%A8%E8%A1%A8%E7%A4%BA%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E6%9C%88%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%20%3Ccode%3Evalue%3C%2Fcode%3E%20%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B%E3%80%82%20%3Ccode%3Evalue%3C%2Fcode%3E%20%E3%81%8C%E6%8C%87%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AF%E7%8F%BE%E5%9C%A8%E3%81%AE%E6%9C%88%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B%E3%80%82%20%3Ccode%3Evalue%3C%2Fcode%3E%20%E3%81%AF%E5%8F%8C%E6%96%B9%E5%90%91%E3%81%AE%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%99%E3%82%8B%E3%80%82%3C%2Fp%3E%0A"},{default:o((()=>[r])),_:1},8,["demos"]),A,C(s,{demos:c(u),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23dateCell%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20data%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edata.isSelected%20%3F%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Eis-selected%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%20%3A%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%7B%7B%20data.day.split('-').slice(1).join('-')%20%7D%7D%0A%20%20%20%20%20%20%20%20%7B%7B%20data.isSelected%20%3F%20'%E2%9C%94%EF%B8%8F'%20%3A%20''%20%7D%7D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.is-selected%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Ecolor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%231989fa%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"calendar/customize",html:"%0A%20%20%3Cel-calendar%3E%0A%20%20%20%20%3Ctemplate%20%23dateCell%3D%22%7B%20data%20%7D%22%3E%0A%20%20%20%20%20%20%3Cp%20%3Aclass%3D%22data.isSelected%20%3F%20'is-selected'%20%3A%20''%22%3E%0A%20%20%20%20%20%20%20%20%7B%7B%20data.day.split('-').slice(1).join('-')%20%7D%7D%0A%20%20%20%20%20%20%20%20%7B%7B%20data.isSelected%20%3F%20'%E2%9C%94%EF%B8%8F'%20%3A%20''%20%7D%7D%0A%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-calendar%3E%0A",js:"",css:"%0A.is-selected%20%7B%0A%20%20color%3A%20%231989fa%3B%0A%7D%0A","css-pre-processor":"none","js-pre-processor":"none","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-calendar%3E%0A%20%20%20%20%3Ctemplate%20%23dateCell%3D%22%7B%20data%20%7D%22%3E%0A%20%20%20%20%20%20%3Cp%20%3Aclass%3D%22data.isSelected%20%3F%20'is-selected'%20%3A%20''%22%3E%0A%20%20%20%20%20%20%20%20%7B%7B%20data.day.split('-').slice(1).join('-')%20%7D%7D%0A%20%20%20%20%20%20%20%20%7B%7B%20data.isSelected%20%3F%20'%E2%9C%94%EF%B8%8F'%20%3A%20''%20%7D%7D%0A%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-calendar%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%3E%0A.is-selected%20%7B%0A%20%20color%3A%20%231989fa%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3E%3Ccode%3Escoped-slot%3C%2Fcode%3E%20%E3%81%AB%20%3Ccode%3EdateCell%3C%2Fcode%3E%20%E3%81%A8%E3%81%84%E3%81%86%E5%90%8D%E5%89%8D%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81calendar%E3%82%BB%E3%83%AB%E3%81%AB%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B%E5%86%85%E5%AE%B9%E3%82%92%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B%E3%80%82%20%3Ccode%3Escoped-slot%3C%2Fcode%3E%E3%81%A7%E3%81%AF%E3%80%81%E6%97%A5%E4%BB%98(%E7%8F%BE%E5%9C%A8%E3%81%AE%E3%82%BB%E3%83%AB%E3%81%AE%E6%97%A5%E4%BB%98)%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF(type%2C%20isSelected%2C%20day%E5%B1%9E%E6%80%A7%E3%82%92%E5%90%AB%E3%82%80)%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%20%E8%A9%B3%E7%B4%B0%E3%81%AF%E4%BB%A5%E4%B8%8B%E3%81%AEAPI%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E3%82%92%E5%8F%82%E7%85%A7%E3%81%AE%E3%81%93%E3%81%A8%E3%80%82%3C%2Fp%3E%0A"},{default:o((()=>[d])),_:1},8,["demos"]),B,C(s,{demos:c(u),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Arange%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%5Bnew%20Date(2019%2C%202%2C%204)%2C%20new%20Date(2019%2C%202%2C%2024)%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"calendar/range",html:"%0A%20%20%3Cel-calendar%20%3Arange%3D%22%5Bnew%20Date(2019%2C%202%2C%204)%2C%20new%20Date(2019%2C%202%2C%2024)%5D%22%20%2F%3E%0A",js:"",css:"","css-pre-processor":"none","js-pre-processor":"none","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-calendar%20%3Arange%3D%22%5Bnew%20Date(2019%2C%202%2C%204)%2C%20new%20Date(2019%2C%202%2C%2024)%5D%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3Ecalendar%E3%81%AE%E8%A1%A8%E7%A4%BA%E7%AF%84%E5%9B%B2%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%20%3Ccode%3Erange%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B%E3%80%82%20%E9%96%8B%E5%A7%8B%E6%99%82%E5%88%BB%E3%81%AF%E6%9C%88%E6%9B%9C%E6%97%A5%E3%80%81%E7%B5%82%E4%BA%86%E6%99%82%E5%88%BB%E3%81%AF%E6%97%A5%E6%9B%9C%E6%97%A5%E3%81%A7%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%AA%E3%82%89%E3%81%9A%E3%80%81%E6%9C%9F%E9%96%93%E3%81%AF2%E3%83%B6%E6%9C%88%E3%82%92%E8%B6%85%E3%81%88%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%E3%80%82%3C%2Fp%3E%0A"},{default:o((()=>[m])),_:1},8,["demos"]),g,C(s,{demos:c(u),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecalendar%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23header%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20date%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ECustom%20header%20content%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%7B%7B%20date%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button-group%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emini%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectDate(%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Eprev-year%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EPrevious%20Year%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emini%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectDate(%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Eprev-month%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EPrevious%20Month%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emini%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectDate(%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Etoday%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EToday%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emini%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectDate(%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Enext-month%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ENext%20Month%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emini%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectDate(%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Enext-year%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ENext%20Year%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button-group%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20defineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20calendar%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EselectDate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Eval%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20calendar%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3EselectDate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eval%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20calendar%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20selectDate%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"calendar/header",html:"%0A%20%20%3Cel-calendar%20ref%3D%22calendar%22%3E%0A%20%20%20%20%3Ctemplate%20%23header%3D%22%7B%20date%20%7D%22%3E%0A%20%20%20%20%20%20%3Cspan%3ECustom%20header%20content%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%3E%7B%7B%20date%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cel-button-group%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22mini%22%20%40click%3D%22selectDate('prev-year')%22%0A%20%20%20%20%20%20%20%20%20%20%3EPrevious%20Year%3C%2Fel-button%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22mini%22%20%40click%3D%22selectDate('prev-month')%22%0A%20%20%20%20%20%20%20%20%20%20%3EPrevious%20Month%3C%2Fel-button%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22mini%22%20%40click%3D%22selectDate('today')%22%3EToday%3C%2Fel-button%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22mini%22%20%40click%3D%22selectDate('next-month')%22%0A%20%20%20%20%20%20%20%20%20%20%3ENext%20Month%3C%2Fel-button%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22mini%22%20%40click%3D%22selectDate('next-year')%22%0A%20%20%20%20%20%20%20%20%20%20%3ENext%20Year%3C%2Fel-button%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3C%2Fel-button-group%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-calendar%3E%0A",js:"%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20calendar%20%3D%20ref()%0A%20%20%20%20const%20selectDate%20%3D%20(val%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20%20%20calendar.value.selectDate(val)%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20calendar%2C%0A%20%20%20%20%20%20selectDate%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A",css:"","css-pre-processor":"none","js-pre-processor":"ts","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-calendar%20ref%3D%22calendar%22%3E%0A%20%20%20%20%3Ctemplate%20%23header%3D%22%7B%20date%20%7D%22%3E%0A%20%20%20%20%20%20%3Cspan%3ECustom%20header%20content%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%3E%7B%7B%20date%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cel-button-group%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22mini%22%20%40click%3D%22selectDate('prev-year')%22%0A%20%20%20%20%20%20%20%20%20%20%3EPrevious%20Year%3C%2Fel-button%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22mini%22%20%40click%3D%22selectDate('prev-month')%22%0A%20%20%20%20%20%20%20%20%20%20%3EPrevious%20Month%3C%2Fel-button%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22mini%22%20%40click%3D%22selectDate('today')%22%3EToday%3C%2Fel-button%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22mini%22%20%40click%3D%22selectDate('next-month')%22%0A%20%20%20%20%20%20%20%20%20%20%3ENext%20Month%3C%2Fel-button%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22mini%22%20%40click%3D%22selectDate('next-year')%22%0A%20%20%20%20%20%20%20%20%20%20%3ENext%20Year%3C%2Fel-button%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3C%2Fel-button-group%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-calendar%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20calendar%20%3D%20ref()%0A%20%20%20%20const%20selectDate%20%3D%20(val%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20%20%20calendar.value.selectDate(val)%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20calendar%2C%0A%20%20%20%20%20%20selectDate%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",description:""},{default:o((()=>[h])),_:1},8,["demos"]),v])}}});export{f as __pageData,y as default};
