import{_ as u,Q as d,S as v,U as e,a1 as n,$ as s,a0 as t,a2 as b,D as r}from"./framework-137012f8.js";const k={},h=e("h1",{id:"bundler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bundler","aria-hidden":"true"},"#"),n(" Bundler")],-1),m={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"choose-a-bundler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#choose-a-bundler","aria-hidden":"true"},"#"),n(" Choose a Bundler")],-1),g={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.npmjs.com/package/vuepress-webpack",target:"_blank",rel:"noopener noreferrer"},x=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),n(` remove vuepress
`),e("span",{class:"token function"},"pnpm"),n(),e("span",{class:"token function"},"add"),n(),e("span",{class:"token parameter variable"},"-D"),n(` vuepress-webpack@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),n(` remove vuepress
`),e("span",{class:"token function"},"yarn"),n(),e("span",{class:"token function"},"add"),n(),e("span",{class:"token parameter variable"},"-D"),n(` vuepress-webpack@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),n(` uninstall vuepress
`),e("span",{class:"token function"},"npm"),n(),e("span",{class:"token function"},"install"),n(),e("span",{class:"token parameter variable"},"-D"),n(` vuepress-webpack@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),V={class:"hint-container tip"},j=e("p",{class:"hint-container-title"},"Tips",-1),C={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.npmjs.com/package/vuepress-vite",target:"_blank",rel:"noopener noreferrer"},P=e("h2",{id:"configure-bundler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configure-bundler","aria-hidden":"true"},"#"),n(" Configure Bundler")],-1),W=e("p",null,"Generally, you could use a bundler without extra configuration, because we have already configured them properly to work with VuePress.",-1),q=b(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import { webpackBundler } from &#39;vuepress-webpack&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    vuePluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      template<span class="token operator">:</span> <span class="token punctuation">{</span>
        compilerOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">isCustomElement</span><span class="token operator">:</span> <span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> tag <span class="token operator">===</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function A(D,E){const a=r("ExternalLinkIcon"),p=r("CodeTabs"),o=r("RouterLink");return d(),v("div",null,[h,e("p",null,[n("VuePress has been using "),e("a",m,[n("Webpack"),s(a)]),n(" as the bundler to dev and build sites. Since VuePress v2, other bundlers are also supported, and now we are using "),e("a",_,[n("Vite"),s(a)]),n(" as the default bundler. Of course, you can still choose to use Webpack.")]),f,e("p",null,[n("When using the "),e("a",g,[n("vuepress"),s(a)]),n(" package, Vite bundler is installed and used automatically.")]),e("p",null,[n("If you want to use Webpack bundler instead, you can remove it and install the "),e("a",w,[n("vuepress-webpack"),s(a)]),n(" package instead:")]),s(p,{id:"15",data:[{title:"PNPM"},{title:"YARN"},{title:"NPM"}],active:0,"tab-id":"shell"},{tab0:t(({title:l,value:c,isActive:i})=>[x]),tab1:t(({title:l,value:c,isActive:i})=>[y]),tab2:t(({title:l,value:c,isActive:i})=>[B]),_:1}),e("div",V,[j,e("p",null,[n("In fact, the "),e("a",C,[n("vuepress"),s(a)]),n(" package is just a wrapper of the "),e("a",N,[n("vuepress-vite"),s(a)]),n(" package.")])]),P,W,e("p",null,[n("You can configure bundler for advanced usage via the "),s(o,{to:"/reference/config.html#bundler"},{default:t(()=>[n("bundler")]),_:1}),n(" option:")]),q,e("p",null,[n("You can refer to "),s(o,{to:"/reference/bundler/vite.html"},{default:t(()=>[n("Bundlers > Vite")]),_:1}),n(" and "),s(o,{to:"/reference/bundler/webpack.html"},{default:t(()=>[n("Bundlers > Webpack")]),_:1}),n(" to check out all options of the corresponding bundler.")])])}const L=u(k,[["render",A],["__file","bundler.html.vue"]]);export{L as default};