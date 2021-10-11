import{_ as n,c as a,o as s,e as t,b as e,d as p}from"./app.73d59fdb.js";const o='{"title":"インストール","description":"","frontmatter":{"title":"インストール"},"headers":[{"level":2,"title":"互換性","slug":"互換性"},{"level":3,"title":"バージョン","slug":"バージョン"},{"level":2,"title":"パッケージマネージャの使用","slug":"パッケージマネージャの使用"},{"level":2,"title":"ブラウザでインポート","slug":"ブラウザでインポート"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsDelivr","slug":"jsdelivr"},{"level":2,"title":"Hello World","slug":"hello-world"}],"relativePath":"ja-JP/guide/installation.md","lastUpdated":1633935899604}',l={},r=[t('<h1 id="インストール" tabindex="-1">インストール <a class="header-anchor" href="#インストール" aria-hidden="true">#</a></h1><h2 id="互換性" tabindex="-1">互換性 <a class="header-anchor" href="#互換性" aria-hidden="true">#</a></h2><p>Element Plusは、 <a href="https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally" target="_blank" rel="noopener noreferrer">ES2018</a> と <a href="https://caniuse.com/resizeobserver" target="_blank" rel="noopener noreferrer">ResizeObserver</a> をサポートするブラウザで実行できます。 古いブラウザーをサポートする必要がある場合は、 <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel</a> を追加してください。</p><p>Vue 3はIE11に対応していないため、Element PlusもIEに対応していません。</p><table><thead><tr><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt="IE"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt="Firefox"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt="Chrome"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt="Safari"></th></tr></thead><tbody><tr><td>エッジが79以上です</td><td>Firefox ≥ 78</td><td>Chrome が 64 以上です</td><td>Safari が 12 以上</td></tr></tbody></table><h3 id="バージョン" tabindex="-1">バージョン <a class="header-anchor" href="#バージョン" aria-hidden="true">#</a></h3><p>Element Plusは現在、急速な開発の繰り返し作業中です。</p><p><a href="https://www.npmjs.org/package/element-plus" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/element-plus.svg?style=flat-square" alt="ElementPlus バージョンバッジ"></a></p><h2 id="パッケージマネージャの使用" tabindex="-1">パッケージマネージャの使用 <a class="header-anchor" href="#パッケージマネージャの使用" aria-hidden="true">#</a></h2><p><strong>We recommend using the package manager (NPM, <a href="https://classic.yarnpkg.com/lang/en/" target="_blank" rel="noopener noreferrer">Yarn</a>, <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>) to install Element Plus</strong>, so that you can utilize bundlers like <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a> and <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack</a>.</p><div class="language-shell"><pre><code><span class="token comment"># 好きなパッケージマネージャーを選んでください。</span>\n\n<span class="token comment"># NPM</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> element-plus --save\n\n<span class="token comment"># Yarn</span>\n$ <span class="token function">yarn</span> <span class="token function">add</span> element-plus\n\n<span class="token comment"># pnpm</span>\n$ <span class="token function">pnpm</span> <span class="token function">install</span> element-plus\n</code></pre></div><p>ネットワーク環境が良くない場合は、ミラーレジストリ <a href="https://github.com/cnpm/cnpm" target="_blank" rel="noopener noreferrer">cnpm</a> または <a href="https://registry.npm.taobao.org" target="_blank" rel="noopener noreferrer">Alibaba</a> を使用することをお勧めします。</p><h2 id="ブラウザでインポート" tabindex="-1">ブラウザでインポート <a class="header-anchor" href="#ブラウザでインポート" aria-hidden="true">#</a></h2><p>Import Element Plus through browser HTML tags directly, and use global variable <code>ElementPlus</code>.</p><p>CDNプロバイダによれば、導入方法は異なります。 ここでは、例として <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg</a> と <a href="https://jsdelivr.com" target="_blank" rel="noopener noreferrer">jsDelivr</a> を使用します。 他のCDNプロバイダも使用できます。</p><h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- Import style --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- Import component library --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- Import style --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- Import component library --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We recommend using CDN to import Element Plus users to lock the version on the link address, so as not to be affected by incompatible updates when Element Plus is upgraded in the future. Please check <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg.com</a> for the method to lock the version.</p></div><h2 id="hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#hello-world" aria-hidden="true">#</a></h2><p>CDN では、Element Plus を使って Hello world ページを簡単に作成できます。 <a href="https://codepen.io/iamkun/pen/YzWMaVr" target="_blank" rel="noopener noreferrer">オンラインデモ</a></p>',22),e("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"YzWMaVr",src:"https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true",mark:"crwd-mark"},"\n  <a href='https://codepen.io/iamkun/pen/YzWMaVr'>CodePen</a> の\n  (<a href='https://codepen.io/iamkun'>@iamkun</a>) で <a href='https://codepen.io'>YzWMaVr</a> を参照してください。\n",-1),e("p",null,[p("パッケージマネージャー経由でインストールし、 パッケージングツールで使用したい場合 次のセクション を読んでください: "),e("a",{href:"/en-US/guide/quickstart.html"},"クイックスタート"),p(".")],-1)];var c=n(l,[["render",function(n,t,e,p,o,l){return s(),a("div",null,r)}]]);export{o as __pageData,c as default};
