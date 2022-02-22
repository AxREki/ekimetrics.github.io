/*! For license information please see c4f5d8e4.3c6df175.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[51,63],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149),o=a(148),s=a(145),c=a(21),l=a(147),m=a(61),u=a.n(m);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var f=a(173),d=a.n(f),g=r.a.createContext({});g.Consumer,g.Provider;function b(e,t){var a=Object(n.useContext)(g);return e||a[t]||t}var v=["bsPrefix","className","noGutters","as"],y=["xl","lg","md","sm","xs"],E=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.noGutters,o=e.as,s=void 0===o?"div":o,c=h(e,v),l=b(a,"row"),m=l+"-cols",u=[];return y.forEach((function(e){var t,a=c[e];delete c[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&u.push(""+m+n+"-"+t)})),r.a.createElement(s,p({ref:t},c,{className:d.a.apply(void 0,[n,l,i&&"no-gutters"].concat(u))}))}));E.displayName="Row",E.defaultProps={noGutters:!1};var k=E,w=["bsPrefix","className","as"],x=["xl","lg","md","sm","xs"],j=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,o=void 0===i?"div":i,s=h(e,w),c=b(a,"col"),l=[],m=[];return x.forEach((function(e){var t,a,n,r=s[e];if(delete s[e],"object"==typeof r&&null!=r){var i=r.span;t=void 0===i||i,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";t&&l.push(!0===t?""+c+o:""+c+o+"-"+t),null!=n&&m.push("order"+o+"-"+n),null!=a&&m.push("offset"+o+"-"+a)})),l.length||l.push(c),r.a.createElement(o,p({},s,{ref:t,className:d.a.apply(void 0,[n].concat(l,m))}))}));j.displayName="Col";var _=j,S=a(59);function N(e){var t=e.title,a=e.img,n=e.description,i=e.href;return r.a.createElement(_,{className:u.a.mainCardColumn},r.a.createElement("h1",{style:{fontSize:24}}," ",r.a.createElement(s.a,{to:i},t)),a&&r.a.createElement("div",{style:{paddingLeft:40,paddingRight:40,paddingTop:20,paddingBottom:20}},r.a.createElement("img",{src:Object(l.a)(a)})),r.a.createElement("p",{style:{marginBottom:0}},n))}t.default=function(){return Object(c.default)().siteConfig,r.a.createElement(o.a,{title:"EkiLab - the Ekimetrics technology & innovation website",description:"EkiLab - the Ekimetrics technology & innovation website. Behind the scenes of the Data Science Company",keywords:["EkiLab","Ekimetrics","Eki.Lab","Data Science","Machine Learning","Artificial Intelligence"]},r.a.createElement("header",{className:Object(i.a)("hero hero--primary",u.a.heroBanner),style:{backgroundImage:"url("+Object(l.a)("img/10-cubecube03.jpg")+")",backgroundSize:"cover",backgroundPosition:"bottom",minHeight:"calc(100vh - 200px)",zIndex:-1}},r.a.createElement("div",{className:Object(i.a)("container",u.a.card)},r.a.createElement("h1",{className:"hero__subtitle",style:{color:"white",fontSize:"40px"}},"Eki",r.a.createElement("span",{className:"gold"},"."),"Lab"),r.a.createElement("h1",{className:"hero__subtitle",style:{color:"white"}},"Welcome to Ekimetrics' technology & innovation website!"),r.a.createElement("p",{className:"hero__subtitle",style:{color:"white",marginBottom:0}},"Behind the scenes of ",r.a.createElement("a",{href:"https://ekimetrics.com"},"the Data Science Company")))),r.a.createElement("main",{style:{marginTop:"-40px"}},r.a.createElement("div",{className:Object(i.a)("container",u.a.card)},r.a.createElement(k,null,r.a.createElement(N,{title:"Blog",href:"/blog",img:"img/icons/Search engine _Monochromatic.svg",description:"Browse our latest articles and experiments on Data Science & AI"}),r.a.createElement(N,{title:"Trainings",href:"/trainings",img:"img/icons/Email campaign_Monochromatic.svg",description:"Find out about our trainings on various issues"}),r.a.createElement(N,{title:"Best practices",href:"/docs",img:"img/icons/Spotlight _Monochromatic.svg",description:"Learn about our convictions and tech best practices"}),r.a.createElement(N,{title:"Hackathons",href:"/hacks",img:"img/icons/Competition_Monochromatic.svg",description:"Test your data science skills with our hackathons & challenges"}),r.a.createElement(N,{title:"Open Source",href:"/opensource",img:"img/icons/World wide web_Monochromatic.svg",description:"Discover our open source contributions to the Data Science community"}))),r.a.createElement("div",{className:Object(i.a)("container",u.a.card)},r.a.createElement(k,null,r.a.createElement(N,{title:"Our latest blog posts",href:"",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:{listStyleType:"none",padding:0,margin:0}},S.items.slice(0,5).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:""+e.permalink},e.title))}))))})))))}},149:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},173:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)a.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},59:function(e){e.exports=JSON.parse('{"title":"Recent posts","items":[{"title":"Demand Forecasting - Improving Supply Chain operations in uncertain times","permalink":"/blog/2022/02/22/demand_forecasting_supply"},{"title":"Ekimetrics implements Data Mesh. Here is why, and why you should join us","permalink":"/blog/2022/02/09/ekimetrics_implements_data_mesh"},{"title":"Building a datalake - Part 1 - Usable, Useful, Used, or how to avoid dataswamp and empty shell traps","permalink":"/blog/2022/02/07/building_datalake_part_1"},{"title":"Which AutoML platform to choose to start your Data Science project?","permalink":"/blog/2022/01/27/automl_benchmark"},{"title":"Hackathon Stories - Ensuring access to affordable and clean energy","permalink":"/blog/2022/01/06/hackathon"}]}')}}]);