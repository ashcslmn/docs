import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as u,a as n,b as e,d as s,w as t,e as l}from"./app-dDmHkibj.js";const r={},d=n("h1",{id:"plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin"},[n("span",null,"Plugin")])],-1),g=n("h2",{id:"official-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#official-plugin"},[n("span",null,"Official Plugin")])],-1),h=n("p",null,"VuePress team provides some official plugins.",-1),m={href:"https://ecosystem.vuejs.press/plugins/google-analytics.html",target:"_blank",rel:"noopener noreferrer"},f=l(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> googleAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-google-analytics&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token string">&#39;G-XXXXXXXXXX&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k={class:"hint-container tip"},v=n("p",{class:"hint-container-title"},"Tips",-1),_=n("p",null,"Most plugins can only be used once. If the same plugin is used multiple times, only the last one will take effect.",-1),y={href:"https://ecosystem.vuejs.press/plugins/container.html",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"community-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#community-plugin"},[n("span",null,"Community Plugin")])],-1),w={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},x={href:"https://marketplace.vuejs.press/",target:"_blank",rel:"noopener noreferrer"},P=n("h2",{id:"local-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#local-plugin"},[n("span",null,"Local Plugin")])],-1),X=n("p",null,"If you want to use your own plugin but don't want to publish it, you can create a local plugin.",-1),I=l(`<p>But if you have too many things to do in your config file, you can consider to extract them into separate plugins, and use them in your config file:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> myPlugin <span class="token keyword">from</span> <span class="token string">&#39;./path/to/my-plugin.js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">myPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function V(A,j){const a=i("RouterLink"),o=i("ExternalLinkIcon");return c(),u("div",null,[d,n("p",null,[e("With the help of "),s(a,{to:"/reference/plugin-api.html"},{default:t(()=>[e("Plugin API")]),_:1}),e(", VuePress plugin can provide different features for you.")]),g,h,n("p",null,[e("You need to import and use them in your config file via the "),s(a,{to:"/reference/config.html#plugins"},{default:t(()=>[e("plugins")]),_:1}),e(" option. For example, use the "),n("a",m,[e("@vuepress/plugin-google-analytics"),s(o)]),e(" to integrate Google Analytics:")]),f,n("div",k,[v,_,n("p",null,[e("However, some plugins can be used multiple times (e.g. "),n("a",y,[e("@vuepress/plugin-container"),s(o)]),e("), and you should check the documentation of the plugin itself for detailed guide.")])]),b,n("p",null,[e("Community users have created lots of plugins and published them to "),n("a",w,[e("NPM"),s(o)]),e(". You should check the plugin's own documentation for detailed guide.")]),n("p",null,[e("You can explore more plugins in "),n("a",x,[e("VuePress Marketplace"),s(o)]),e(".")]),P,X,n("p",null,[e("It is recommended to use the "),s(a,{to:"/guide/configuration.html#config-file"},{default:t(()=>[e("Config File")]),_:1}),e(" directly as a plugin, because "),s(a,{to:"/reference/config.html#plugin-api"},{default:t(()=>[e("almost all of the Plugin APIs are available")]),_:1}),e(", which would be more convenient in most cases.")]),I,n("p",null,[e("You can refer to "),s(a,{to:"/advanced/plugin.html"},{default:t(()=>[e("Advanced > Writing a Plugin")]),_:1}),e(" for how to write your own plugin.")])])}const N=p(r,[["render",V],["__file","plugin.html.vue"]]);export{N as default};