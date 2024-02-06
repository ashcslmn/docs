import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as c,c as p,d as s,a as e,b as n,w as u,e as t}from"./app-un-IDmnc.js";const d={},h=e("h1",{id:"webpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack"},[e("span",null,"Webpack")])],-1),b={href:"https://www.npmjs.com/package/@vuepress/bundler-webpack",target:"_blank",rel:"noopener noreferrer"},f=t(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Install the bundler package:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/bundler-webpack@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Specify the bundler option in your config file:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/config.ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webpackBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-webpack&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">webpackBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    postcss<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vue<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="configurewebpack" tabindex="-1"><a class="header-anchor" href="#configurewebpack"><span>configureWebpack</span></a></h3>`,7),g=e("li",null,[e("p",null,[n("Type: "),e("code",null,"(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) => WebpackConfiguration | void")])],-1),_=e("p",null,"Details:",-1),k=e("p",null,"Edit the internal webpack config.",-1),m=e("code",null,"isServer",-1),v=e("code",null,"isBuild",-1),w={href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"chainwebpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chainwebpack"},[e("span",null,"chainWebpack")])],-1),x=e("li",null,[e("p",null,[n("Type: "),e("code",null,"(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void")])],-1),S=e("p",null,"Details:",-1),T={href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,[n("This option accepts a function that will receive a "),e("code",null,"Config"),n(" instance that provided by "),e("code",null,"webpack-chain"),n(" as the 1st argument an "),e("code",null,"isServer"),n(" flag as the 2nd argument and an "),e("code",null,"isBuild"),n(" flag as the 3rd argument.")],-1),D=e("h3",{id:"devserversetupmiddlewares",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#devserversetupmiddlewares"},[e("span",null,"devServerSetupMiddlewares")])],-1),W=e("li",null,[e("p",null,[n("Type: "),e("code",null,"(middlewares: Middleware[], devServer: Server) => Middleware[]")])],-1),C=e("li",null,[e("p",null,"Details:"),e("p",null,[n("A hook to be called in "),e("code",null,"devServer.setupMiddlewares"),n(" of webpack.")]),e("p",null,[n("The arguments of the function are those of "),e("code",null,"devServer.setupMiddlewares"),n(".")])],-1),A=e("p",null,"Also see:",-1),B={href:"https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares",target:"_blank",rel:"noopener noreferrer"},L=e("h3",{id:"vue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue"},[e("span",null,"vue")])],-1),j=e("li",null,[e("p",null,[n("Type: "),e("code",null,"VueLoaderOptions")])],-1),M=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"vue-loader"),n(".")])],-1),U=e("p",null,"Also see:",-1),N={href:"https://vue-loader.vuejs.org/options.html",target:"_blank",rel:"noopener noreferrer"},V=e("h3",{id:"postcss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#postcss"},[e("span",null,"postcss")])],-1),R=e("li",null,[e("p",null,[n("Type: "),e("code",null,"PostcssLoaderOptions")])],-1),z=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"postcss-loader"),n(".")])],-1),E=e("p",null,"Also see:",-1),P={href:"https://github.com/webpack-contrib/postcss-loader#options",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"stylus",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stylus"},[e("span",null,"stylus")])],-1),F=e("li",null,[e("p",null,[n("Type: "),e("code",null,"StylusLoaderOptions")])],-1),I=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"stylus-loader"),n(".")])],-1),Z=e("p",null,"Also see:",-1),H={href:"https://github.com/webpack-contrib/stylus-loader#options",target:"_blank",rel:"noopener noreferrer"},Q=e("h3",{id:"scss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scss"},[e("span",null,"scss")])],-1),J=e("li",null,[e("p",null,[n("Type: "),e("code",null,"SassLoaderOptions")])],-1),Y=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"sass-loader"),n(" for "),e("code",null,".scss"),n(" files.")])],-1),G=e("p",null,"Also see:",-1),K={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},X=e("h3",{id:"sass",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sass"},[e("span",null,"sass")])],-1),$=e("li",null,[e("p",null,[n("Type: "),e("code",null,"SassLoaderOptions")])],-1),ee=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"sass-loader"),n(" for "),e("code",null,".sass"),n(" files.")])],-1),ne=e("p",null,"Also see:",-1),se={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},le=e("h3",{id:"less",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#less"},[e("span",null,"less")])],-1),ae=e("li",null,[e("p",null,[n("Type: "),e("code",null,"LessLoaderOptions")])],-1),te=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"less-loader"),n(".")])],-1),oe=e("p",null,"Also see:",-1),ie={href:"https://github.com/webpack-contrib/less-loader#options",target:"_blank",rel:"noopener noreferrer"},re=t('<h3 id="evergreen" tabindex="-1"><a class="header-anchor" href="#evergreen"><span>evergreen</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Set to <code>true</code> if you are only targeting evergreen browsers. This will disable some transpilation and polyfills, and result in faster builds and smaller files.</p></li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2><h3 id="referencing-public-files-after-changing-base" tabindex="-1"><a class="header-anchor" href="#referencing-public-files-after-changing-base"><span>Referencing Public Files after Changing <code>base</code></span></a></h3>',4),ce=e("code",null,"base",-1),pe=e("code",null,"base",-1),ue=e("h3",{id:"using-with-default-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-with-default-theme"},[e("span",null,"Using with Default Theme")])],-1),de={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},he={href:"https://www.npmjs.com/package/sass-loader",target:"_blank",rel:"noopener noreferrer"},be={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"};function fe(ge,_e){const o=a("NpmBadge"),l=a("ExternalLinkIcon"),i=a("RouteLink");return c(),p("div",null,[h,s(o,{package:"@vuepress/bundler-webpack"}),e("p",null,[n("Webpack bundler is provided by "),e("a",b,[n("@vuepress/bundler-webpack"),s(l)]),n(" package.")]),f,e("ul",null,[g,e("li",null,[_,k,e("p",null,[n("This option accepts a function that will receive a webpack config object as the 1st argument, an "),m,n(" flag as the 2nd argument and an "),v,n(" flag as the 3rd argument. You can either mutate the config directly, or return an object to be merged by "),e("a",w,[n("webpack-merge"),s(l)]),n(".")])])]),y,e("ul",null,[x,e("li",null,[S,e("p",null,[n("Edit the internal webpack config with "),e("a",T,[n("webpack-chain"),s(l)]),n(".")]),O])]),D,e("ul",null,[W,C,e("li",null,[A,e("ul",null,[e("li",null,[e("a",B,[n("Webpack > Configuration > DevServer > devServer.setupMiddlewares"),s(l)])])])])]),L,e("ul",null,[j,M,e("li",null,[U,e("ul",null,[e("li",null,[e("a",N,[n("vue-loader > Options Reference"),s(l)])])])])]),V,e("ul",null,[R,z,e("li",null,[E,e("ul",null,[e("li",null,[e("a",P,[n("postcss-loader > Options"),s(l)])])])])]),q,e("ul",null,[F,I,e("li",null,[Z,e("ul",null,[e("li",null,[e("a",H,[n("stylus-loader > Options"),s(l)])])])])]),Q,e("ul",null,[J,Y,e("li",null,[G,e("ul",null,[e("li",null,[e("a",K,[n("sass-loader > Options"),s(l)])])])])]),X,e("ul",null,[$,ee,e("li",null,[ne,e("ul",null,[e("li",null,[e("a",se,[n("sass-loader > Options"),s(l)])])])])]),le,e("ul",null,[ae,te,e("li",null,[oe,e("ul",null,[e("li",null,[e("a",ie,[n("less-loader > Options"),s(l)])])])])]),re,e("p",null,[n("Unlike Vite, Webpack won't handle "),ce,n(" for public files automatically. So if you change the "),pe,n(" of your site, you'd better to use "),s(i,{to:"/guide/assets.html#base-helper"},{default:u(()=>[n("Base Helper")]),_:1}),n(" when referencing an public image file.")]),ue,e("p",null,[n("Default theme is using "),e("a",de,[n("SASS"),s(l)]),n(" as CSS pre-processor, so you might need to install "),e("a",he,[n("sass-loader"),s(l)]),n(" as a peer dependency to make it work with Webpack, especially when you are using "),e("a",be,[n("pnpm"),s(l)]),n(".")])])}const ve=r(d,[["render",fe],["__file","webpack.html.vue"]]),we=JSON.parse('{"path":"/reference/bundler/webpack.html","title":"Webpack","lang":"en-US","frontmatter":{"icon":"mdi:webpack","description":"Webpack ","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/reference/bundler/webpack.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/reference/bundler/webpack.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Webpack"}],["meta",{"property":"og:description","content":"Webpack "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Webpack\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"configureWebpack","slug":"configurewebpack","link":"#configurewebpack","children":[]},{"level":3,"title":"chainWebpack","slug":"chainwebpack","link":"#chainwebpack","children":[]},{"level":3,"title":"devServerSetupMiddlewares","slug":"devserversetupmiddlewares","link":"#devserversetupmiddlewares","children":[]},{"level":3,"title":"vue","slug":"vue","link":"#vue","children":[]},{"level":3,"title":"postcss","slug":"postcss","link":"#postcss","children":[]},{"level":3,"title":"stylus","slug":"stylus","link":"#stylus","children":[]},{"level":3,"title":"scss","slug":"scss","link":"#scss","children":[]},{"level":3,"title":"sass","slug":"sass","link":"#sass","children":[]},{"level":3,"title":"less","slug":"less","link":"#less","children":[]},{"level":3,"title":"evergreen","slug":"evergreen","link":"#evergreen","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Referencing Public Files after Changing base","slug":"referencing-public-files-after-changing-base","link":"#referencing-public-files-after-changing-base","children":[]},{"level":3,"title":"Using with Default Theme","slug":"using-with-default-theme","link":"#using-with-default-theme","children":[]}]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.53,"words":459},"filePathRelative":"reference/bundler/webpack.md","localizedDate":"December 3, 2023","autoDesc":true}');export{ve as comp,we as data};