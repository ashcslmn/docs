import{_ as o,Q as c,S as i,a3 as a,$ as e,U as n,a1 as s,a2 as l,D as t}from"./framework-137012f8.js";const d={},u=n("h1",{id:"nprogress-插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nprogress-插件","aria-hidden":"true"},"#"),s(" nprogress 插件")],-1),g={href:"https://github.com/rstacruz/nprogress",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>该插件已经集成到默认主题中。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-nprogress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nprogressPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-nprogress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">nprogressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>你可以通过 CSS 变量来自定义进度条的样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--nprogress-color</span><span class="token punctuation">:</span> #29d<span class="token punctuation">;</span>
  <span class="token property">--nprogress-z-index</span><span class="token punctuation">:</span> 1031<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(m,h){const p=t("NpmBadge"),r=t("ExternalLinkIcon");return c(),i("div",null,[a(' `# nprogress` 会被渲染成 `<h1 id="nprogress">` ，导致 id 和 nprogress 进度条冲突 （有点蠢） '),a(" 所以我们在 h1 标题后添加一个 '插件' 后缀，然后通过 title frontmatter 来设置页面标题 "),u,e(p,{package:"@vuepress/plugin-nprogress"}),n("p",null,[s("将 "),n("a",g,[s("nprogress"),e(r)]),s(" 集成到 VuePress 中，在切换到另一个页面时会展示进度条。")]),k])}const _=o(d,[["render",v],["__file","nprogress.html.vue"]]);export{_ as default};