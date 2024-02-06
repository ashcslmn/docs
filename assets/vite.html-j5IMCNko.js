import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as l,c as p,d as t,a as e,b as n,e as r}from"./app-un-IDmnc.js";const c={},u=e("h1",{id:"vite",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vite"},[e("span",null,"Vite")])],-1),d={href:"https://www.npmjs.com/package/@vuepress/bundler-vite",target:"_blank",rel:"noopener noreferrer"},v=r(`<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><p>安装打包工具：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/bundler-vite@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在配置文件中指定打包工具：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/config.ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    viteOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vuePluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="viteoptions" tabindex="-1"><a class="header-anchor" href="#viteoptions"><span>viteOptions</span></a></h3>`,7),m=e("li",null,[e("p",null,"详情："),e("p",null,"接收 Vite 的所有配置项。")],-1),h=e("p",null,"参考：",-1),k={href:"https://cn.vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"vuepluginoptions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepluginoptions"},[e("span",null,"vuePluginOptions")])],-1),_=e("p",null,"详情：",-1),f={href:"https://www.npmjs.com/package/@vitejs/plugin-vue",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"参考：",-1),y={href:"https://cn.vitejs.dev/plugins/#vitejsplugin-vue",target:"_blank",rel:"noopener noreferrer"};function x(V,w){const i=a("NpmBadge"),s=a("ExternalLinkIcon");return l(),p("div",null,[u,t(i,{package:"@vuepress/bundler-vite"}),e("p",null,[n("Vite 打包工具是由 "),e("a",d,[n("@vuepress/bundler-vite"),t(s)]),n(" 包提供的。")]),v,e("ul",null,[m,e("li",null,[h,e("ul",null,[e("li",null,[e("a",k,[n("Vite > Config"),t(s)])])])])]),g,e("ul",null,[e("li",null,[_,e("p",null,[n("接收 "),e("a",f,[n("@vitejs/plugin-vue"),t(s)]),n(" 的所有配置项。")])]),e("li",null,[b,e("ul",null,[e("li",null,[e("a",y,[n("Vite > 插件 > 官方插件"),t(s)])])])])])])}const B=o(c,[["render",x],["__file","vite.html.vue"]]),O=JSON.parse('{"path":"/zh/reference/bundler/vite.html","title":"Vite","lang":"zh-CN","frontmatter":{"icon":"simple-icons:vite","description":"Vite ","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/reference/bundler/vite.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/reference/bundler/vite.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Vite"}],["meta",{"property":"og:description","content":"Vite "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vite\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"viteOptions","slug":"viteoptions","link":"#viteoptions","children":[]},{"level":3,"title":"vuePluginOptions","slug":"vuepluginoptions","link":"#vuepluginoptions","children":[]}]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.41,"words":123},"filePathRelative":"zh/reference/bundler/vite.md","localizedDate":"2023年12月3日","autoDesc":true}');export{B as comp,O as data};