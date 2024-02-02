import{_ as h}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as v,c as m,a as e,b as s,d as a,w as n,e as u}from"./app-dDmHkibj.js";const b={},_=e("h1",{id:"快速上手",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速上手"},[e("span",null,"快速上手")])],-1),g={class:"hint-container warning"},k=e("p",{class:"hint-container-title"},"注意",-1),f={href:"https://github.com/vuepress/core/blob/main/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"在线试一试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在线试一试"},[e("span",null,"在线试一试")])],-1),y={href:"https://stackblitz.com/fork/vuepress",target:"_blank",rel:"noopener noreferrer"},A=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装"},[e("span",null,"安装")])],-1),P=e("h3",{id:"依赖环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#依赖环境"},[e("span",null,"依赖环境")])],-1),C={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://classic.yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},w={class:"hint-container tip"},N=e("p",{class:"hint-container-title"},"提示",-1),z={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"vue",-1),D={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://yarnpkg.com/configuration/yarnrc#nodeLinker",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,".yarnrc.yml",-1),I=e("code",null,"nodeLinker: 'node-modules'",-1),M=e("h3",{id:"创建项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建项目"},[e("span",null,"创建项目")])],-1),R=e("h4",{id:"通过命令行创建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#通过命令行创建"},[e("span",null,"通过命令行创建")])],-1),E={href:"https://www.npmjs.com/package/create-vuepress",target:"_blank",rel:"noopener noreferrer"},S=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(` create vuepress vuepress-starter
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),T=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(` create vuepress vuepress-starter
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),H=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(` init vuepress vuepress-starter
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O=u(`<h4 id="手动创建" tabindex="-1"><a class="header-anchor" href="#手动创建"><span>手动创建</span></a></h4><p>这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。</p><ul><li>创建并进入一个新目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>初始化项目</li></ul><p>@tab:active pnpm</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">pnpm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab yarn</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">yarn</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab pnpm</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><ul><li>安装 VuePress</li></ul>`,13),F=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 安装 vuepress 和 vue"),s(`
`),e("span",{class:"token function"},"pnpm"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next vue
`),e("span",{class:"token comment"},"# 安装打包工具和主题"),s(`
`),e("span",{class:"token function"},"pnpm"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` @vuepress/bundler-vite@next @vuepress/theme-default@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),J=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 安装 vuepress"),s(`
`),e("span",{class:"token function"},"yarn"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`),e("span",{class:"token comment"},"# 安装打包工具和主题"),s(`
`),e("span",{class:"token function"},"yarn"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` @vuepress/bundler-vite@next @vuepress/theme-default@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),K=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 安装 vuepress"),s(`
`),e("span",{class:"token function"},"npm"),s(),e("span",{class:"token function"},"install"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`),e("span",{class:"token comment"},"# 安装打包工具和主题"),s(`
`),e("span",{class:"token function"},"npm"),s(),e("span",{class:"token function"},"install"),s(),e("span",{class:"token parameter variable"},"-D"),s(` @vuepress/bundler-vite@next @vuepress/theme-default@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Q=e("a",{class:"header-anchor",href:"#目录结构"},[e("span",null,"目录结构")],-1),U=e("h2",{id:"开始使用-vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开始使用-vuepress"},[e("span",null,"开始使用 VuePress")])],-1),W=e("h3",{id:"启动开发服务器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#启动开发服务器"},[e("span",null,"启动开发服务器")])],-1),X=e("code",null,"package.json",-1),Y={href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},Z=u(`<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>docs:dev</code> 脚本可以启动开发服务器:</p>`,2),$=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(` docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ee=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(` docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),se=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(` run docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ne={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},ae=e("h3",{id:"构建你的网站",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#构建你的网站"},[e("span",null,"构建你的网站")])],-1),te=e("p",null,[s("运行 "),e("code",null,"docs:build"),s(" 脚本可以构建你的网站：")],-1),le=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(` docs:build
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ie=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(` docs:build
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),re=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(` run docs:build
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),oe=e("code",null,"docs/.vuepress/dist",-1),ce=e("h2",{id:"进一步了解-vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#进一步了解-vuepress"},[e("span",null,"进一步了解 VuePress")])],-1),de=e("p",null,"现在，你应该已经有了一个简单可用的 VuePress 网站。但你可能仍需要阅读后续的指南来更加了解 VuePress 。",-1);function ue(pe,he){const i=r("ExternalLinkIcon"),o=r("CodeGroupItem"),p=r("CodeGroup"),c=r("CodeTabs"),d=r("RouterLink");return v(),m("div",null,[_,e("div",g,[k,e("p",null,[s("VuePress v2 目前仍处于 RC (Release Candidate) 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，有可能会发生一些微小的 Breaking Changes 。因此，在每次更新 RC 版本之后，请一定要仔细阅读 "),e("a",f,[s("更新日志"),a(i)]),s("。")])]),x,e("p",null,[s("你可以通过 "),e("a",y,[s("StackBlitz"),a(i)]),s(" 在你的浏览器里直接使用 VuePress 。")]),A,P,e("ul",null,[e("li",null,[e("a",C,[s("Node.js v18.16.0+"),a(i)])]),e("li",null,[s("包管理器，如 "),e("a",V,[s("pnpm"),a(i)]),s("、"),e("a",j,[s("yarn"),a(i)]),s("、"),e("a",q,[s("npm"),a(i)]),s(" 等。")])]),e("div",w,[N,e("ul",null,[e("li",null,[s("使用 "),e("a",z,[s("pnpm"),a(i)]),s(" 时，你需要安装 "),L,s(" 作为 peer-dependencies 。")]),e("li",null,[s("使用 "),e("a",D,[s("yarn 2+"),a(i)]),s(" 时，你需要在 "),e("a",G,[B,a(i)]),s(" 文件中设置 "),I,s(" 。")])])]),M,R,e("p",null,[s("你可以通过 "),e("a",E,[s("create-vuepress"),a(i)]),s(" 直接创建项目模板。")]),a(p,null,{default:n(()=>[a(o,{title:"pnpm",active:""},{default:n(()=>[S]),_:1}),a(o,{title:"yarn"},{default:n(()=>[T]),_:1}),a(o,{title:"npm"},{default:n(()=>[H]),_:1})]),_:1}),O,a(c,{id:"107",data:[{id:"pnpm"},{id:"yarn"},{id:"pnpm"}],active:0,"tab-id":"shell"},{title0:n(({value:t,isActive:l})=>[s("pnpm")]),title1:n(({value:t,isActive:l})=>[s("yarn")]),title2:n(({value:t,isActive:l})=>[s("pnpm")]),tab0:n(({value:t,isActive:l})=>[F]),tab1:n(({value:t,isActive:l})=>[J]),tab2:n(({value:t,isActive:l})=>[K,Q]),_:1}),U,W,e("p",null,[s("你可以在 "),X,s(" 中添加一些 "),e("a",Y,[s("scripts"),a(i)]),s(" ：")]),Z,a(c,{id:"172",data:[{id:"PNPM"},{id:"yarn"},{id:"NPM"}],active:0,"tab-id":"shell"},{title0:n(({value:t,isActive:l})=>[s("PNPM")]),title1:n(({value:t,isActive:l})=>[s("yarn")]),title2:n(({value:t,isActive:l})=>[s("NPM")]),tab0:n(({value:t,isActive:l})=>[$]),tab1:n(({value:t,isActive:l})=>[ee]),tab2:n(({value:t,isActive:l})=>[se]),_:1}),e("p",null,[s("VuePress 会在 "),e("a",ne,[s("http://localhost:8080"),a(i)]),s(" 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。")]),ae,te,a(c,{id:"192",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:0,"tab-id":"shell"},{title0:n(({value:t,isActive:l})=>[s("pnpm")]),title1:n(({value:t,isActive:l})=>[s("yarn")]),title2:n(({value:t,isActive:l})=>[s("npm")]),tab0:n(({value:t,isActive:l})=>[le]),tab1:n(({value:t,isActive:l})=>[ie]),tab2:n(({value:t,isActive:l})=>[re]),_:1}),e("p",null,[s("在 "),oe,s(" 目录中可以找到构建生成的静态文件。你可以查看 "),a(d,{to:"/zh/guide/deployment.html"},{default:n(()=>[s("部署")]),_:1}),s(" 来了解如何部署你的网站。")]),ce,de,e("p",null,[s("下一步，前往 "),a(d,{to:"/zh/guide/configuration.html"},{default:n(()=>[s("配置")]),_:1}),s(" 了解更多配置文件相关的内容。")])])}const be=h(b,[["render",ue],["__file","getting-started.html.vue"]]);export{be as default};