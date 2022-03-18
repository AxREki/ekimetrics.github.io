(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(155)),i=["components"],s={title:"Power BI - Improve your development process by using multiple environments",author:"Samuel Cordano",author_title:null,author_url:"mailto:samuel.cordano@ekimetrics.com",header_image_url:"img/blog/windmills.jpg",tags:["Power BI","Environments"],draft:!1,description:" Learn in this article why and how to use different environments when developing products in Power BI. ",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Power BI","Environments","Data Science for business"]},c={permalink:"/blog/2022/03/16/powerbi_multiple_environments",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2022-03-16-powerbi_multiple_environments.md",source:"@site/blog/2022-03-16-powerbi_multiple_environments.md",description:" Learn in this article why and how to use different environments when developing products in Power BI. ",date:"2022-03-16T00:00:00.000Z",tags:[{label:"Power BI",permalink:"/blog/tags/power-bi"},{label:"Environments",permalink:"/blog/tags/environments"}],title:"Power BI - Improve your development process by using multiple environments",readingTime:5.57,truncated:!0,nextItem:{title:"Newsletter for February 2022",permalink:"/blog/2022/02/28/newsletter_Feb-2022"}},p=[{value:"In Power BI Desktop, make your data sources dynamic",id:"in-power-bi-desktop-make-your-data-sources-dynamic",children:[{value:"Step 0 - (Baseline) Have a Power BI report connected to hard-coded data sources",id:"step-0---baseline-have-a-power-bi-report-connected-to-hard-coded-data-sources",children:[]},{value:"Step 1- Creating Parameters inside your reports",id:"step-1--creating-parameters-inside-your-reports",children:[]},{value:"Step 2- Using the \u2018Advanced Editor\u2019 to use the parameters when connecting to your data source",id:"step-2--using-the-advanced-editor-to-use-the-parameters-when-connecting-to-your-data-source",children:[]}]},{value:"Part 2: In the Power BI Web Portal, create a deployment pipeline and assign parameters to each workspace",id:"part-2-in-the-power-bi-web-portal-create-a-deployment-pipeline-and-assign-parameters-to-each-workspace",children:[{value:"Step 0 - (Baseline) Have your Power BI report already published to a Workspace",id:"step-0---baseline-have-your-power-bi-report-already-published-to-a-workspace",children:[]},{value:"Step 1- Creating a Deployment Pipeline from your Workspace",id:"step-1--creating-a-deployment-pipeline-from-your-workspace",children:[]},{value:"Step 2- Deploy your report from the Power BI Development Workspace to the Power BI Test Workspace",id:"step-2--deploy-your-report-from-the-power-bi-development-workspace-to-the-power-bi-test-workspace",children:[]},{value:"Step 3- Modify the Deployment Parameters to use the correct parameters",id:"step-3--modify-the-deployment-parameters-to-use-the-correct-parameters",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],l={toc:p};function b(e){var t=e.components,s=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When building a piece of software, you don\u2019t want your users to see every messy part of your application creation process. In order to make sure you control what people see and when they have access to it, development teams use environments to create \u201cstages\u201d of the app which they consider good for releasing."),Object(o.b)("p",null,"Each environment has its own unique purpose. There are different naming standards across the industry, although almost every process starts with a 'development' stage and ends with a 'production' stage. Here is a typical set of environments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Development environment")," : where data scientist/data engineers/software engineers actually develop the product. The end user doesn\u2019t have access to this environment which allows developers to try new features freely. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"QA environment / Testing environment")," : once a product is sufficiently mature to be tested, it is deployed to a new environment in order for testers to work on a stable version, while allowing developers to continue working in the development environment at the same time. The end user doesn\u2019t have access to this environment")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Production environment")," : where the product will be deployed after testing and made accessible to the end client. Every features should work when the product reaches this stage."))),Object(o.b)("p",null,Object(o.b)("img",{src:a(238).default})),Object(o.b)("p",null,"Furthermore, each environment should have its own database because in the same way that product evolve through development, databases also evolve: tables may be modified, added or deleted. Thus, the actual development process actually looks like this:"),Object(o.b)("p",null,Object(o.b)("img",{src:a(239).default})),Object(o.b)("p",null,"Now that you know ",Object(o.b)("strong",{parentName:"p"},"why")," you should use different environments when developing products, this article explains ",Object(o.b)("strong",{parentName:"p"},"how")," to do that in Power BI! "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In Power BI, the product you are developing is a ",Object(o.b)("strong",{parentName:"p"},"Report")," and the environments are ",Object(o.b)("strong",{parentName:"p"},"Workspaces")))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Disclaimer  ")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"This guide supposes you have already developed a Power BI report using ",Object(o.b)("a",{parentName:"li",href:"https://powerbi.microsoft.com/en-us/desktop/"},"Power BI Desktop")," and published this report to a Power BI Workspace, accessible through the ",Object(o.b)("a",{parentName:"li",href:"https://powerbi.microsoft.com/fr-fr/"},"Power BI Web Portal"),". "),Object(o.b)("li",{parentName:"ul"},"These assumptions will be stated again at the beginning of each Part, in Step 0 - (Baseline).")))),Object(o.b)("h2",{id:"in-power-bi-desktop-make-your-data-sources-dynamic"},"In Power BI Desktop, make your data sources dynamic"),Object(o.b)("h3",{id:"step-0---baseline-have-a-power-bi-report-connected-to-hard-coded-data-sources"},"Step 0 - (Baseline) Have a Power BI report connected to hard-coded data sources"),Object(o.b)("p",null,"As explained in the disclaimer, you should already have a report connected to data sources. Check out this documentation for more information about ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-quickstart-connect-to-data"},"data sources")," in ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources"},"Power BI"),". "),Object(o.b)("p",null,"A typical report would have several tables in the pane Fields: "),Object(o.b)("p",null,Object(o.b)("img",{src:a(240).default})),Object(o.b)("p",null,"As a little foreshadowing and making sure we are on the same page, open the Power Query editor (by clicking ",Object(o.b)("em",{parentName:"p"},"Home")," (Top Ribbon) \u2192 ",Object(o.b)("em",{parentName:"p"},"Transform Data")," \u2192 ",Object(o.b)("em",{parentName:"p"},"Transform Data"),"; then ",Object(o.b)("em",{parentName:"p"},"Advanced Editor"),") for one of your tables, and notice that all your data sourcing information are hard-coded."),Object(o.b)("p",null,Object(o.b)("img",{src:a(241).default})),Object(o.b)("p",null,Object(o.b)("img",{src:a(242).default})),Object(o.b)("p",null,"In the last picture, we have the following information hard-coded:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The server is: dev-sql-01.database.windows.net")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The database is: dev-db-01")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The schema is: dev-rfd-crm"))),Object(o.b)("p",null,"This hard-coded information is problematic as when we publish the report from one workspace to the next, the datasource will not change: we will always get our information from \u201cdev\u201d. What we need are parameters that change automatically as we change workspaces."),Object(o.b)("h3",{id:"step-1--creating-parameters-inside-your-reports"},"Step 1- Creating Parameters inside your reports"),Object(o.b)("p",null,"In the Power Query Editor, click the ",Object(o.b)("em",{parentName:"p"},"Manage Parameters")," (top ribbon under the Home tab) \u2192 ",Object(o.b)("em",{parentName:"p"},"New Parameter"),". (Or you can click ",Object(o.b)("em",{parentName:"p"},"Manage Parameters")," and select the ",Object(o.b)("em",{parentName:"p"},"New")," button on the top to create a parameter). You can fill in this form and select OK to create a new parameter."),Object(o.b)("p",null,Object(o.b)("img",{src:a(243).default})),Object(o.b)("p",null,"You should create parameters for every variable that needs to change as you change workspaces. In my case, I needed to create 5 parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"One server parameter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"One database parameter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Two schema parameters")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"One parameter called \u201cenv\u201d (with simply the options \u2018dev\u2019, \u2018ppd\u2019 and \u2018prd')"))),Object(o.b)("p",null,Object(o.b)("img",{src:a(244).default})),Object(o.b)("h3",{id:"step-2--using-the-advanced-editor-to-use-the-parameters-when-connecting-to-your-data-source"},"Step 2- Using the \u2018Advanced Editor\u2019 to use the parameters when connecting to your data source"),Object(o.b)("p",null,"Now that you have created your parameters, use the following syntax to refer to your parameters when connecting to your datasource. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#"ParameterName"\n')),Object(o.b)("p",null,"Here is what the difference looks like for me. When the data sources variables are hard coded:"),Object(o.b)("p",null,Object(o.b)("img",{src:a(245).default})),Object(o.b)("p",null,"When the data sources variables use parameters:"),Object(o.b)("p",null,Object(o.b)("img",{src:a(246).default})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You made it through Part 1!")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You now know how to make your data sources dynamic inside your reports, you implemented it and pushed your report to your workspace.  "),Object(o.b)("p",{parentName:"div"},"And know you ask yourself: \u201c",Object(o.b)("em",{parentName:"p"},"But now, how can I make multiple workspaces and how do I change my report parameters automatically as I publish my report between workspaces?"),"\u201d "),Object(o.b)("p",{parentName:"div"},"Check out Part 2 for the answer ! "))),Object(o.b)("h2",{id:"part-2-in-the-power-bi-web-portal-create-a-deployment-pipeline-and-assign-parameters-to-each-workspace"},"Part 2: In the Power BI Web Portal, create a deployment pipeline and assign parameters to each workspace"),Object(o.b)("p",null,"In order to use parameters, we will leverage Power BI\u2019s Deployment Pipeline feature. I encourage you to read Microsoft\u2019s official documentation ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/create-reports/deployment-pipelines-get-started"},"here")," if you encounter any issues when working with Deployment pipelines as it is fairly comprehensive. "),Object(o.b)("h3",{id:"step-0---baseline-have-your-power-bi-report-already-published-to-a-workspace"},"Step 0 - (Baseline) Have your Power BI report already published to a Workspace"),Object(o.b)("p",null,"Check out this ",Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=E0L1uXfefms"},"video")," if you haven\u2019t already published your report to a Power BI Workspace (don\u2019t hesitate to watch at speed x1.75 \ud83d\ude09 ) ."),Object(o.b)("h3",{id:"step-1--creating-a-deployment-pipeline-from-your-workspace"},"Step 1- Creating a Deployment Pipeline from your Workspace"),Object(o.b)("p",null,Object(o.b)("img",{src:a(247).default})),Object(o.b)("h3",{id:"step-2--deploy-your-report-from-the-power-bi-development-workspace-to-the-power-bi-test-workspace"},"Step 2- Deploy your report from the Power BI Development Workspace to the Power BI Test Workspace"),Object(o.b)("p",null,Object(o.b)("img",{src:a(248).default})),Object(o.b)("h3",{id:"step-3--modify-the-deployment-parameters-to-use-the-correct-parameters"},"Step 3- Modify the Deployment Parameters to use the correct parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the pipeline stage you want to create a dataset rule for, select ",Object(o.b)("strong",{parentName:"p"},"Deployment settings"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"From the Deployment settings pane, select the dataset you want to create a rule for.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select ",Object(o.b)("strong",{parentName:"p"},"Parameter rules"),", expand the list, and then select ",Object(o.b)("strong",{parentName:"p"},"Add rule"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select a parameter from the list of parameters; the current value is shown. Edit the value to the value you want to take effect after each deployment."))),Object(o.b)("p",null,Object(o.b)("img",{src:a(249).default})),Object(o.b)("p",null,Object(o.b)("img",{src:a(250).default})),Object(o.b)("p",null,Object(o.b)("img",{src:a(251).default})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Notice on the bottom of the last screenshot the following mention: \u201c",Object(o.b)("em",{parentName:"p"},"Rules will be applied when you deploy to this stage"),"\u201d."),Object(o.b)("p",{parentName:"div"},"Thus: once you have set the deployment settings for your report, you need to redeploy your report immediately to this workspace because the rules haven\u2019t been applied yet \ud83d\ude05 .  "))),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"So this is how to use different environments in Power BI in a nutshell. We went from one workspace with a hard-coded data source, to three separate workspaces where when a report is pushed from one workspace to an other, its data source changes automatically! "),Object(o.b)("p",null,"Definitely a lot of moving pieces here, but understanding theses concepts will make your workflow easier and less error-prone in the long-run ! "),Object(o.b)("p",null,"I hope this information can help you on your Power BI journey!"))}b.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(a),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?n.a.createElement(m,s(s({ref:t},p),{},{components:a})):n.a.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},238:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/1_pbi-7fba92ca104a1e21a8a0cb954366abca.png"},239:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2_pbi-a2fd174f02de181e7229cb902e9e9bd6.png"},240:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/3_pbi-a79129f5734dead688f2050862358db0.png"},241:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/4_pbi-c2429c7124c92539f7905d0ccae07274.png"},242:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/5_pbi-6132b957d5cc458faa7ff7adeac543d8.png"},243:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/6_pbi-cac756688b33cb6d56f5a6b97031819f.png"},244:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/7_pbi-89490893349517986e76afafc9a840f5.png"},245:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/8_pbi-6132b957d5cc458faa7ff7adeac543d8.png"},246:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/9_pbi-2e3251dd4849eef049f68ff688e41776.png"},247:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/10_pbi-9e58c88d0464b8c1bbfd9b8049f5a4d0.png"},248:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/11_pbi-b76cec09a1ad258ad02ae279b16c20fe.png"},249:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/12_pbi-88b95be953eb9c1dd28e2316ad1eed1f.png"},250:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/13_pbi-76e9ba92a694789e303b7271df2bf614.png"},251:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/14_pbi-976587e38b0e5f0a9996df0f089deba6.png"}}]);