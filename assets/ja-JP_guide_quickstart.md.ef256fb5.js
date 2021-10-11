import{_ as n,r as s,c as a,b as e,a as t,w as p,e as o,d as c,o as l}from"./app.73d59fdb.js";const r='{"title":"クイックスタート","description":"","frontmatter":{"title":"クイックスタート"},"headers":[{"level":2,"title":"使用法","slug":"使用法"},{"level":3,"title":"フルインポート","slug":"フルインポート"},{"level":3,"title":"オンデマンド インポート","slug":"オンデマンド-インポート"},{"level":2,"title":"スターターテンプレート","slug":"スターターテンプレート"},{"level":3,"title":"Vue CLI","slug":"vue-cli"},{"level":3,"title":"スターターキットの使い方","slug":"スターターキットの使い方"},{"level":2,"title":"グローバル設定","slug":"グローバル設定"},{"level":2,"title":"Nuxt.js を使う","slug":"nuxt-js-を使う"},{"level":2,"title":"さあ始めましょう","slug":"さあ始めましょう"}],"relativePath":"ja-JP/guide/quickstart.md","lastUpdated":1633935899608}',u={},i=o('<h1 id="クイックスタート" tabindex="-1">クイックスタート <a class="header-anchor" href="#クイックスタート" aria-hidden="true">#</a></h1><p>このセクションでは、プロジェクトで Element Plus を使用する方法について説明します。</p><h2 id="使用法" tabindex="-1">使用法 <a class="header-anchor" href="#使用法" aria-hidden="true">#</a></h2><h3 id="フルインポート" tabindex="-1">フルインポート <a class="header-anchor" href="#フルインポート" aria-hidden="true">#</a></h3><p>バンドルサイズをあまり気にしない場合は、フルインポートを使用する方が便利です。</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h4 id="volar-support" tabindex="-1">Volar support <a class="header-anchor" href="#volar-support" aria-hidden="true">#</a></h4><p>If you use volar, please add the global component type definition to <code>compilerOptions.types</code> in <code>tsconfig.json</code>.</p><div class="language-json"><pre><code><span class="token comment">// tsconfig.json</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;element-plus/global&quot;</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="オンデマンド-インポート" tabindex="-1">オンデマンド インポート <a class="header-anchor" href="#オンデマンド-インポート" aria-hidden="true">#</a></h3><p>You need to use an additional plugin to import components you used.</p>',11),k={id:"auto-import-recommend",tabindex:"-1"},d=c("Auto import "),m=c("Recommend"),h=c(),g=e("a",{class:"header-anchor",href:"#auto-import-recommend","aria-hidden":"true"},"#",-1),f=o('<p>First you need install <code>unplugin-vue-components</code>.</p><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> unplugin-vue-components\n</code></pre></div><p>Then add the code below into your <code>Vite</code> or <code>webpack</code> config file.</p><h5 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h5><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>\n<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h5 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h5><div class="language-ts"><pre><code><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> Components <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/webpack&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>For more bundlers (<a href="https://rollupjs.org/" target="_blank" rel="noopener noreferrer">Rollup</a>, <a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue CLI</a>) and configs please reference <a href="https://github.com/antfu/unplugin-vue-components#readme" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a>.</p><h4 id="manually-import" tabindex="-1">Manually import <a class="header-anchor" href="#manually-import" aria-hidden="true">#</a></h4><p>Element Plus provides out of box <a href="https://webpack.js.org/guides/tree-shaking/" target="_blank" rel="noopener noreferrer">Tree Shaking</a> functionalities based on ES Module.</p><p>But you need install <a href="https://github.com/element-plus/unplugin-element-plus" target="_blank" rel="noopener noreferrer">unplugin-element-plus</a> for style import. And refer to the <a href="https://github.com/element-plus/unplugin-element-plus#readme" target="_blank" rel="noopener noreferrer">docs</a> for how to configure it.</p><blockquote><p>App.vue</p></blockquote><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>I am ElButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>\n<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-element-plus/vite&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="スターターテンプレート" tabindex="-1">スターターテンプレート <a class="header-anchor" href="#スターターテンプレート" aria-hidden="true">#</a></h2><h3 id="vue-cli" tabindex="-1">Vue CLI <a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a></h3><p>We prepared a plugin <a href="https://github.com/element-plus/vue-cli-plugin-element-plus" target="_blank" rel="noopener noreferrer">Element Plus VueCLI plugin</a>. For <a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">vue-cli</a>, you can setup a project based on Element Plus easily.</p><h3 id="スターターキットの使い方" tabindex="-1">スターターキットの使い方 <a class="header-anchor" href="#スターターキットの使い方" aria-hidden="true">#</a></h3><p>We provide a general <a href="https://github.com/element-plus/element-plus-starter" target="_blank" rel="noopener noreferrer">Project Template</a>, also a <a href="https://github.com/element-plus/element-plus-vite-starter" target="_blank" rel="noopener noreferrer">Vite Template</a>. For Laravel users we have a <a href="https://github.com/element-plus/element-plus-in-laravel-starter" target="_blank" rel="noopener noreferrer">Laravel Template</a>.</p><h2 id="グローバル設定" tabindex="-1">グローバル設定 <a class="header-anchor" href="#グローバル設定" aria-hidden="true">#</a></h2><p>When registering Element Plus, you can pass a global config object with <code>size</code> and <code>zIndex</code> to set the default <code>size</code> for form components, and <code>zIndex</code> for popup components, the default value for <code>zIndex</code> is <code>2000</code>.</p><p>Full import:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span> size<span class="token operator">:</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span> zIndex<span class="token operator">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>On-demand:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$<span class="token constant">ELEMENT</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// options</span>\n<span class="token punctuation">}</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElButton<span class="token punctuation">)</span>\n</code></pre></div><h2 id="nuxt-js-を使う" tabindex="-1">Nuxt.js を使う <a class="header-anchor" href="#nuxt-js-を使う" aria-hidden="true">#</a></h2><p>We can also use <a href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer">Nuxt.js</a>：</p><div class="glitch-embed-wrap" style="height:420px;width:100%;"><iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&amp;previewSize=0&amp;attributionHidden=true" alt="nuxt-with-element on glitch" style="height:100%;width:100%;border:0;"></iframe></div><h2 id="さあ始めましょう" tabindex="-1">さあ始めましょう <a class="header-anchor" href="#さあ始めましょう" aria-hidden="true">#</a></h2><p>You can bootstrap your project from now on, for each components usage, please refer to individual component documentation.</p>',30);var v=n(u,[["render",function(n,o,c,r,u,v){const b=s("el-tag");return l(),a("div",null,[i,e("h4",k,[d,t(b,{type:"primary",style:{"vertical-align":"middle"},effect:"dark",size:"small"},{default:p((()=>[m])),_:1}),h,g]),f])}]]);export{r as __pageData,v as default};
