(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),i=t(112),m=t(125),c=t(108);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(c.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,n=(e.sidebar,Object(l.default)().siteConfig.title),c=a.blogDescription,s=a.blogTitle,g="/"===a.permalink?n:s;return r.a.createElement(i.a,{title:g,description:c,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--12"},r.a.createElement("div",{className:"row"},t.map((function(e){var a=e.content;return r.a.createElement("div",{className:"col col--4"},r.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null)))}))),r.a.createElement(o,{metadata:a})))))}},113:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},125:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(113),i=t(23),m=t(108),c=t(110),o=t(60),s=t.n(o),g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){e.children;var a=e.frontMatter,t=e.metadata,n=e.truncated,o=e.isBlogPostPage,u=void 0!==o&&o,d=t.date,v=t.permalink,p=t.tags,E=t.readingTime,f=a.author,_=a.title,b=a.image,N=a.keywords,h=a.description,y=a.header_image_url;y=Object(c.a)(y);var w,k,I,T,j,M=a.author_url||a.authorURL,O=(a.author_title||a.authorTitle,a.author_image_url||a.authorImageURL),P=Object(c.a)(b,{absolute:!0});return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{src:y,alt:"Image alt text",title:"Logo Title Text 1"})),r.a.createElement("div",{className:"card__body"},r.a.createElement(i.a,null,N&&N.length&&r.a.createElement("meta",{name:"keywords",content:N.join(",")}),b&&r.a.createElement("meta",{property:"og:image",content:P}),b&&r.a.createElement("meta",{name:"twitter:image",content:P}),b&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_})),r.a.createElement("article",null,(w=u?"h1":"h2",k=d.substring(0,10).split("-"),I=k[0],T=g[parseInt(k[1],10)-1],j=parseInt(k[2],10),r.a.createElement("header",null,r.a.createElement(w,{style:{fontFamily:"InterCustom",fontSize:16},className:Object(l.a)("margin-bottom--sm",s.a.blogPostTitle)},u?_:r.a.createElement(m.a,{to:v},_)),r.a.createElement("p",{style:{fontFamily:"InterCustom",fontSize:14,lineHeight:1.2}},h),r.a.createElement("div",{className:"avatar margin-vert--md"},O&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:M,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:O,alt:f})),r.a.createElement("div",{className:"avatar__intro"},f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("time",{dateTime:d,className:s.a.blogPostDate},T," ",j,", ",I," ",E&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(E)," min read"))))))),(p.length>0||n)&&r.a.createElement("footer",{className:"row margin-vert--sm"},p.length>0&&r.a.createElement("div",{className:"col"},p.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement("span",{className:"badge badge--primary"},r.a.createElement(m.a,{key:t,to:t},a))})))))))}}}]);