import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as i,c as s,a as e,b as t,d as n,e as l}from"./app-un-IDmnc.js";const d={},c=e("h1",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction"},[e("span",null,"Introduction")])],-1),h={href:"https://en.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"The purpose of creating VuePress was to support the documentation of Vue.js and its sub-projects, but now it has been helping a large amount of users to build their documentation, blogs, and other static sites.",-1),p=e("h2",{id:"how-it-works",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-it-works"},[e("span",null,"How It Works")])],-1),m={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://router.vuejs.org",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"During development, we start a normal dev-server, and serve the VuePress site as a normal SPA. If you’ve used Vue before, you will notice the familiar development experience when you are writing and developing with VuePress.",-1),y={href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"nuxt generate",-1),k={href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},_=l('<h2 id="why-not" tabindex="-1"><a class="header-anchor" href="#why-not"><span>Why Not ...?</span></a></h2><h3 id="nuxt" tabindex="-1"><a class="header-anchor" href="#nuxt"><span>Nuxt</span></a></h3><p>Nuxt is an outstanding Vue SSR framework, and it is capable of doing what VuePress does. But Nuxt is designed for building applications, while VuePress is more lightweight and focused on content-centric static sites.</p><h3 id="vitepress" tabindex="-1"><a class="header-anchor" href="#vitepress"><span>VitePress</span></a></h3><p>VitePress is the little brother of VuePress. It&#39;s also created and maintained by our Vue.js team. It&#39;s even more lightweight and faster than VuePress. However, as a tradeoff, it&#39;s more opinionated and less configurable. For example, it does not support plugins. But VitePress is powerful enough to make your content online if you don&#39;t need advanced customizations.</p><p>It might not be an appropriate comparison, but you can take VuePress and VitePress as Laravel and Lumen.</p><h3 id="docsify-docute" tabindex="-1"><a class="header-anchor" href="#docsify-docute"><span>Docsify / Docute</span></a></h3><p>Both are great projects and also Vue-powered. Except they are both fully runtime-driven and therefore not SEO-friendly. If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.</p><h3 id="hexo" tabindex="-1"><a class="header-anchor" href="#hexo"><span>Hexo</span></a></h3><p>Hexo has been serving the Vue 2.x docs well. The biggest problem is that its theming system is static and string-based - we want to take advantage of Vue for both the layout and the interactivity. Also, Hexo’s Markdown rendering isn’t the most flexible to configure.</p><h3 id="gitbook" tabindex="-1"><a class="header-anchor" href="#gitbook"><span>GitBook</span></a></h3><p>We’ve been using GitBook for most of our sub project docs. The primary problem with GitBook is that its development reload performance is intolerable with a large amount of files. The default theme also has a pretty limiting navigation structure, and the theming system is, again, not Vue based. The team behind GitBook is also more focused on turning it into a commercial product rather than an open-source tool.</p>',12);function v(x,V){const o=a("ExternalLinkIcon");return i(),s("div",null,[c,e("p",null,[t("VuePress is a markdown-centered static site generator. You can write your content (documentations, blogs, etc.) in "),e("a",h,[t("Markdown"),n(o)]),t(", then VuePress will help you to generate a static site to host them.")]),u,p,e("p",null,[t("A VuePress site is in fact a single-page application (SPA) powered by "),e("a",m,[t("Vue"),n(o)]),t(" and "),e("a",g,[t("Vue Router"),n(o)]),t(".")]),e("p",null,[t("Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with "),e("a",f,[t("markdown-it"),n(o)]),t(" and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.")]),w,e("p",null,[t("During build, we create a server-rendered version of the VuePress site and render the corresponding HTML by virtually visiting each route. This approach is inspired by "),e("a",y,[t("Nuxt"),n(o)]),t("'s "),b,t(" command and other projects like "),e("a",k,[t("Gatsby"),n(o)]),t(".")]),_])}const I=r(d,[["render",v],["__file","introduction.html.vue"]]),j=JSON.parse('{"path":"/guide/introduction.html","title":"Introduction","lang":"en-US","frontmatter":{"icon":"fa6-solid:circle-info","description":"Introduction VuePress is a markdown-centered static site generator. You can write your content (documentations, blogs, etc.) in Markdown, then VuePress will help you to generate...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/guide/introduction.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/guide/introduction.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Introduction"}],["meta",{"property":"og:description","content":"Introduction VuePress is a markdown-centered static site generator. You can write your content (documentations, blogs, etc.) in Markdown, then VuePress will help you to generate..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Introduction\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"How It Works","slug":"how-it-works","link":"#how-it-works","children":[]},{"level":2,"title":"Why Not ...?","slug":"why-not","link":"#why-not","children":[{"level":3,"title":"Nuxt","slug":"nuxt","link":"#nuxt","children":[]},{"level":3,"title":"VitePress","slug":"vitepress","link":"#vitepress","children":[]},{"level":3,"title":"Docsify / Docute","slug":"docsify-docute","link":"#docsify-docute","children":[]},{"level":3,"title":"Hexo","slug":"hexo","link":"#hexo","children":[]},{"level":3,"title":"GitBook","slug":"gitbook","link":"#gitbook","children":[]}]}],"git":{"createdTime":1703050872000,"updatedTime":1706883783000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1}]},"readingTime":{"minutes":1.74,"words":521},"filePathRelative":"guide/introduction.md","localizedDate":"December 20, 2023","autoDesc":true}');export{I as comp,j as data};