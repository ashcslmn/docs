import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as u,a as n,b as s,d as a,w as t,e as o}from"./app-dDmHkibj.js";const d={},r=n("h1",{id:"writing-a-theme",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#writing-a-theme"},[n("span",null,"Writing a Theme")])],-1),m={class:"hint-container tip"},k=n("p",{class:"hint-container-title"},"Tips",-1),v=n("h2",{id:"create-a-theme",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-a-theme"},[n("span",null,"Create a Theme")])],-1),h=n("em",null,"Theme Object",-1),g=n("em",null,"Theme Function",-1),b=o(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/utils&#39;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">fooTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// returns a theme object</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;vuepress-theme-foo&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// path to the client config of your theme</span>
    clientConfigFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;client.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// set custom dev / build template</span>
    <span class="token comment">// if the template is not specified, the default template</span>
    templateBuild<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;templates/build.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    templateDev<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;templates/dev.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// use plugins</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// other plugin APIs are also available</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">barTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// returns a theme function</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;vuepress-theme-bar&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, create theme&#39;s client config file <code>client.js</code> :</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;./layouts/Layout.vue&#39;</span>
<span class="token keyword">import</span> NotFound <span class="token keyword">from</span> <span class="token string">&#39;./layouts/NotFound.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    Layout<span class="token punctuation">,</span>
    NotFound<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>layouts</code> field declares the layouts provided by your theme. A theme must provide at least two layouts: <code>Layout</code> and <code>NotFound</code>. The former is to provide default layout for common pages, while the latter is to provide layout for 404-not-found page.</p>`,4),f=n("code",null,"Layout",-1),_=o(`<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>NotFound</code> layout will be used for the <code>404.html</code> page:</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>404 Not Found<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y=n("h2",{id:"publish-to-npm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#publish-to-npm"},[n("span",null,"Publish to NPM")])],-1),w={href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},x=o(`<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress-theme-foo&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vuepress-theme&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T=n("code",null,"name",-1),j=n("code",null,"vuepress-theme-xxx",-1),N=n("code",null,"@org/vuepress-theme-xxx",-1),C=n("em",null,"Theme Object",-1),L=n("li",null,[s("Set "),n("code",null,"keywords"),s(" to include "),n("code",null,"vuepress-theme"),s(", so that users can search your theme on NPM.")],-1);function q(F,P){const e=p("RouterLink"),l=p("ExternalLinkIcon");return c(),u("div",null,[r,n("div",m,[k,n("p",null,[s("Before reading this guide, you'd better learn the guide of "),a(e,{to:"/advanced/plugin.html"},{default:t(()=>[s("Writing a Plugin")]),_:1}),s(" first.")])]),v,n("p",null,[s("A VuePress theme is a special plugin, which should satisfy the "),a(e,{to:"/reference/theme-api.html"},{default:t(()=>[s("Theme API")]),_:1}),s(". Like plugins, a theme should also be a "),h,s(" or a "),g,s(", and could be wrapped with a function to receive options:")]),b,n("p",null,[s("The "),f,s(" layout should contain the "),a(e,{to:"/reference/components.html#content"},{default:t(()=>[s("Content")]),_:1}),s(" component to display the markdown content:")]),_,n("p",null,[s("You can provide more layouts, and users can change layout via "),a(e,{to:"/reference/frontmatter.html#layout"},{default:t(()=>[s("layout")]),_:1}),s(" frontmatter.")]),y,n("p",null,[s("Also, there are some conventions for theme in "),n("a",w,[s("package.json"),a(l)]),s(":")]),x,n("ul",null,[n("li",null,[s("Set "),T,s(" to follow the naming convention: "),j,s(" or "),N,s(", which should be consistent with the "),a(e,{to:"/reference/theme-api.html#name"},{default:t(()=>[s("name")]),_:1}),s(" field of the "),C,s(".")]),L])])}const V=i(d,[["render",q],["__file","theme.html.vue"]]);export{V as default};