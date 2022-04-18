(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return p}));var n=t(0),i=t.n(n);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var a=i.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=u(e.components);return i.a.createElement(c.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},b=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,p=d["".concat(o,".").concat(b)]||d[b]||h[b]||s;return t?i.a.createElement(p,r(r({ref:a},c),{},{components:t})):i.a.createElement(p,r({ref:a},c))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=b;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<s;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},216:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/data_journey_through_datalake_full-61f1e356cfda2c8d3c455e00f78f1c00.png"},217:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/pipeline_separation_full-9d5a8850e22af998c0407c312fef1eb7.png"},218:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/technical_functional_data_validation_full-7ef228be08cc7bf082afc04a0a556328.png"},219:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/datasources_to_breakpoint_full-86c1df7c11dfea49df5efdae49e0bb48.png"},220:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/data_storage_architecture_full-c50a8426b67694b08480e3ed0fad3a52.png"},221:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/core_data_model_full-9eee3df156f98cfedb2204804e73ba06.png"},79:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return d}));var n=t(3),i=t(7),s=(t(0),t(160)),o=["components"],r={title:"Building a datalake - Part 1 - Usable, Useful, Used, or how to avoid dataswamp and empty shell traps",author:"Emilien BOUCAUD",author_title:null,author_url:"mailto:emilien.boucaud@ekimetrics.com",header_image_url:"img/blog/image_overview_article_datalake_1.jpg",tags:["Datalake","Data Engineering","Architecture","Data Governance","Data Mesh"],draft:!1,description:"In this article, learn how to create your first datalake following best practices in order to make it robust, evolutive and central to your company's information architecture, as well as take advantage of the opportunities it presents.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Datalake","Data Engineering","Lakehouse","Data Architecture","Data Governance","Data Validation","Data Mesh","Azure","AWS","GCP"]},l={permalink:"/blog/2022/02/07/building_datalake_part_1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2022-02-07-building_datalake_part_1.md",source:"@site/blog/2022-02-07-building_datalake_part_1.md",description:"In this article, learn how to create your first datalake following best practices in order to make it robust, evolutive and central to your company's information architecture, as well as take advantage of the opportunities it presents.",date:"2022-02-07T00:00:00.000Z",tags:[{label:"Datalake",permalink:"/blog/tags/datalake"},{label:"Data Engineering",permalink:"/blog/tags/data-engineering"},{label:"Architecture",permalink:"/blog/tags/architecture"},{label:"Data Governance",permalink:"/blog/tags/data-governance"},{label:"Data Mesh",permalink:"/blog/tags/data-mesh"}],title:"Building a datalake - Part 1 - Usable, Useful, Used, or how to avoid dataswamp and empty shell traps",readingTime:16.43,truncated:!0,prevItem:{title:"Ekimetrics implements Data Mesh. Here is why, and why you should join us",permalink:"/blog/2022/02/09/ekimetrics_implements_data_mesh"},nextItem:{title:"Which AutoML platform to choose to start your Data Science project?",permalink:"/blog/2022/01/27/automl_benchmark"}},c=[{value:"Article Scope",id:"article-scope",children:[]},{value:"Introduction",id:"introduction",children:[{value:"What is a datalake?",id:"what-is-a-datalake",children:[]},{value:"Is building a datalake the right solution?",id:"is-building-a-datalake-the-right-solution",children:[]},{value:"The data swamp and empty shell traps",id:"the-data-swamp-and-empty-shell-traps",children:[]}]},{value:"The foundation architecture",id:"the-foundation-architecture",children:[]},{value:"Usable and Useful through architecture and design",id:"usable-and-useful-through-architecture-and-design",children:[{value:"Usable through clear storage and pipelines architecture",id:"usable-through-clear-storage-and-pipelines-architecture",children:[]},{value:"Usable through data validation",id:"usable-through-data-validation",children:[]},{value:"Useful through a business driven design",id:"useful-through-a-business-driven-design",children:[]}]},{value:"Used through scalability of business impact",id:"used-through-scalability-of-business-impact",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],u={toc:c};function d(e){var a=e.components,r=Object(i.a)(e,o);return Object(s.b)("wrapper",Object(n.a)({},u,r,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"article-scope"},"Article Scope"),Object(s.b)("p",null,"Scalable and distributed, datalakes have become the new go-to for centralizing storage and insights. The main challenge is not to create one, but rather to do it right and avoid falling into the so-called ",Object(s.b)("strong",{parentName:"p"},"data swamp and empty shell traps"),". In this article, we\u2019ll go through how you can create your first datalake following best practices in order to make it robust, evolutive and central to your company\u2019s information architecture, as well as take advantage of the opportunities it presents."),Object(s.b)("p",null,"In this post, we\u2019ll be technology agnostic. The focus here is a smart architecture that will help solve functional and technical challenges, whether you\u2019re using Azure, Amazon Web Services, Google Cloud Platform, any other provider or even building & managing the infrastructure yourself."),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,"Before talking about how to design a datalake, let\u2019s review what it is, why it\u2019s useful and the main aspects that will ensure its quality."),Object(s.b)("h3",{id:"what-is-a-datalake"},"What is a datalake?"),Object(s.b)("p",null,"A datalake is a global storage space allowing to interact with all data type: unstructured (e.g. text documents, images, videos), semi-structured (e.g. XML / JSON files), structured (e.g. SQL tables, CSV files). Data is extracted from all relevant sources, loaded into the datalake, then transformed into their use case specific target."),Object(s.b)("p",null,"A well-designed datalake is flexible and scalable, allowing it to handle the increase in data volume, velocity, and variety. Because a datalake stores raw data before transforming it, it is extremely useful for extracting potential value from the data for the future. By centralizing data sources into a global storage space, it helps data scientists and analysts explore data to generate new use cases and business insights."),Object(s.b)("h3",{id:"is-building-a-datalake-the-right-solution"},"Is building a datalake the right solution?"),Object(s.b)("p",null,"The goal shouldn\u2019t be to build a datalake for the sake of building one. A datalake is only the foundation, corner pieces in your larger data analytics and data architecture puzzle. Your goal should be to find a use case from which you can build a robust and evolutive foundation to your technical and functional architecture. Having a clear vision as to how your datalake can grow in a 2-year horizon, with new data sources and analytical use cases, is essential."),Object(s.b)("h3",{id:"the-data-swamp-and-empty-shell-traps"},"The data swamp and empty shell traps"),Object(s.b)("p",null,"Chasing the dream of a datalake that meets all current and future analytics needs or that unites all of your organization\u2019s stakeholders around a single vision is an excellent way to fall into the data swamp or empty shell traps."),Object(s.b)("p",null,"By trying to collect all current \u2013 and future \u2013 data sources from the start, there is a risk that your datalake will become a swamp. When that\u2019s the case, due to unorganized, unvalidated or simply hard to exploit data, it can be incredibly challenging to make your datalake useable."),Object(s.b)("p",null,"Your first goal should be to analyze which high impact use cases will be used by your organization\u2019s stakeholders and target data for these specific use cases. Starting with the business needs instead of chasing a technical achievement, you can be sure that your datalake will be used and useful, instead of an empty shell: a good foundation but unable to attract your organization\u2019s stakeholders. Read more about how we can avoid missing out on business impact in ",Object(s.b)("a",{parentName:"p",href:"https://ekimetrics.com/white-paper/data-science-industrialization-business-impact/"},"this whitepaper"),"."),Object(s.b)("h2",{id:"the-foundation-architecture"},"The foundation architecture"),Object(s.b)("p",null,"Let us first establish the building blocks of your datalake. This foundation is the basis for logical separation of your data and use cases in the platform you'll be building."),Object(s.b)("p",null,"A datalake can ingest any type of data: from structured tables to unstructured files, whether ingested by batch or through streaming processes. Data will transit through four zones in sequence, from its raw form to fully processed for use cases, and from a technical to a business orientation."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Landing LAN : temporary zone for all sources. Once data is extracted, it transits through this zone and is dispatched into the next zone by validation mechanisms.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"RAW (also known as bronze): data extraction pipelines will fetch data in the landing zone and validate it technically as well as functionally to make sure it is usable. This zone is the main storage component for all your data, and contains every extracted source, raw and untransformed, only with a concern for what is technically and functionally usable."))),Object(s.b)("p",null,"In landing and raw zone, data is organized logically by source: CRM, Point of Sales, WEB, etc."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Trusted TRD (also known as silver): in this zone, you'll find the output of your data pipelines. Here, data is deduplicated, cleaned, transformed, and aggregated for your target use cases. Data is organized logically by data domain (Marketing, Finance, Sales, Operations\u2026) and use case (Reporting, API exposition, AI training\u2026).")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Refined RFD (also known as gold): this is the final zone for your data. It is the exposition layer for your use cases and is organized logically by use case."))),Object(s.b)("p",null,"These four zones are a representation of your data's journey through the datalake. From the refined zone, a serving layer can be added, taking shape in data marts, APIs, file exposition, etc. Your apps and users can then fetch or be sent data through this serving layer and make decisions that will give your data value."),Object(s.b)("p",null,Object(s.b)("img",{src:t(216).default})),Object(s.b)("div",{align:"center"}," Data\u2019s journey through a datalake, from source to usage"),Object(s.b)("br",null),Object(s.b)("p",null,"Your data\u2019s journey from sources to serving layers is managed by pipelines, which are themselves managed by orchestrators. Pipelines describe how data is moved and transformed, be it with highly customized code or low code interfaces: in terms of concept, pipelines are close to ELTs (Extract, Load, Transform) mechanisms. Orchestrators are an ensemble of pipelines, defining parameters for each of them and specifying when and how they should be run: periodically, when an event triggers, using larger or smaller computing power, etc."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"A sandbox storage zone and computing environment can be made available with access to some of your storage zones. That sandbox allows for exploration of data by data scientists and data analysts, motivating new use cases."))),Object(s.b)("p",null,"Based on this architecture, it all seems too simple: find a high value use case to start off the building process, then add new use cases and sources later. Following the design principles in the next section, it could in fact be that simple, all the while avoiding falling into the data swamp and empty shell traps."),Object(s.b)("h2",{id:"usable-and-useful-through-architecture-and-design"},"Usable and Useful through architecture and design"),Object(s.b)("p",null,"We\u2019ve gathered some best practices and design principles that work well to counteract the possibility of your datalake becoming messy or unused. We like to think of each of these best practices as serving a goal that is threefold: building a datalake that is ",Object(s.b)("strong",{parentName:"p"},"usable, useful, and used")," - what we refer to as our three \u201cU\u201ds. The first \u201cU\u201d is targeted towards the data swamp trap, the latter two towards the empty shell trap."),Object(s.b)("h3",{id:"usable-through-clear-storage-and-pipelines-architecture"},"Usable through clear storage and pipelines architecture"),Object(s.b)("p",null,"The first step for building a usable datalake is to ",Object(s.b)("strong",{parentName:"p"},"make your storage and pipelines easy to comprehend")," for users as well as automated processes. Technical and functional separation for pipelines and storage is your first step in making your datalake understandable."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Make it clear who does what in the datalake"),". A use case is built on top of data, which needs to be collected: we\u2019ve found it best to separate data collection from its transformation from the start. Using at least different pipelines, and, better still, different scheduler resources will make understanding who (or which pipeline) is doing what much easier. One orchestrator for data collection pipelines, and other orchestrators for each data domain and use case theme \u2013 e.g. finance reporting, marketing CRM, sales exposition... This also sets up your datalake\u2019s functional architecture in a \u201cdata mesh\u201d-like manner, where ",Object(s.b)("strong",{parentName:"li"},"each data domain has its own identifiable perimeter"),". ")),Object(s.b)("p",null,Object(s.b)("img",{src:t(217).default})),Object(s.b)("div",{align:"center"}," Separating pipelines among data domain orchestrators allows for a better understanding of who does what"),Object(s.b)("br",null),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Make it obvious where to find data in your storage"),". We\u2019ve talked a little about Landing, Raw, Trusted and Refined data storage layers. Separating your data by source in the Raw/Bronze layer will help your users and transformation pipelines identify each dataset. Separating transformed data by use case in the Trusted and Refined layers will give a better understanding of the functional architecture behind the storage.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Make it apparent which transformation or collection pipelines is responsible for which data"),"."),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Use identifiers such as date and time \u201cYYYYMMDD_HHMM\u201d for your pipelines and processes. Date and time is a great identifier for ",Object(s.b)("strong",{parentName:"p"},"understanding when data was transformed")," or collected. Sticking to them for your logging as well, you can make sure that monitoring your pipelines and exploring their results is as easy as possible.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Inside your transformation pipelines, we\u2019ve found that using break points is highly useful. Writing a dataset\u2019s state after it\u2019s been cleaned, pre-transformed, etc\u2026 up until its final refined state will make debugging and understanding your pipelines much easier. Using names like ",Object(s.b)("em",{parentName:"p"},"0_deduplicated"),", ",Object(s.b)("em",{parentName:"p"},"1_cleaned"),", ",Object(s.b)("em",{parentName:"p"},"2_calculated")," to show breakpoints in your transformations allow for a better understanding of the data lineage of each use case, also helping exploration in the sandbox."))))),Object(s.b)("h3",{id:"usable-through-data-validation"},"Usable through data validation"),Object(s.b)("p",null,"Now that your storage and pipelines architecture is understandable, your second goal is to ",Object(s.b)("strong",{parentName:"p"},"make your data usable")," so that the datalake doesn\u2019t immediately become a swamp with faulty and unchecked data."),Object(s.b)("p",null,"One mistake to avoid is to consider that since a datalake can store any type of data, all data is good to collect, and you can figure out if it\u2019s usable and useful later. On the contrary: validating data from the get-go is essential. By having your data collection pipelines look at the structure and content of the data, you can make sure that your transformation pipelines will have a smooth time reading it down the line."),Object(s.b)("p",null,"However, this does not mean that you instantly delete any data that is deemed unfit for your use cases. We\u2019ve found that dispatching data into ",Object(s.b)("strong",{parentName:"p"},"rejected and validated subzones")," in the RAW/bronze zone is a good option:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"A rejected subzone for any ",Object(s.b)("strong",{parentName:"p"},"data that will not technically fit")," your use case pipelines: faulty files with bad lines, wrong column count for structured data, corrupt zip files, bad encoding, the list goes on. Deciding which data to move to the rejected subzone ultimately depends on how it will be read by later pipelines.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"We\u2019ve also seen cases where data needs to be ",Object(s.b)("strong",{parentName:"p"},"rejected for functional reasons"),": data from a source can be sent to you even though you\u2019re not allowed to use it, or the data is technically readable but does not match with the sources you accept. In this instance, you can divide your rejected subzone into technical rejects and functional rejects.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Finally, any data that is technically and functionally usable can transit to the validated subzone. When a use case pipeline reads data, it will usually only read that data\u2019s validated zone. This not only ensures that your pipelines are robust and will not fail due to faulty or unexpected data, but it also allows for a stable data model to be built."))),Object(s.b)("p",null,Object(s.b)("img",{src:t(218).default})),Object(s.b)("div",{align:"center"}," Technical and functional data validation guarantee a first level of data quality"),Object(s.b)("br",null),Object(s.b)("p",null,"Why keep rejected data, you\u2019ll ask?"),Object(s.b)("p",null,"Data that is technically rejected is useful for several reasons, the first one being that it is a good indicator of your sources' quality, and allows you to communicate efficiently with your data providers. Secondly, technically invalid data at one point in time may be usable in the future, be it by adjusting your later pipelines to be able to read them or simply correcting the data as a one-shot fix."),Object(s.b)("p",null,"Data that is functionally rejected is also useful, particularly in cases where it\u2019s from a source you\u2019re not sure you\u2019re allowed to collect. An additional subzone can then be a quarantine zone, where you would store data for which you need to check whether you can accept it in your use cases."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"By managing functional and technical rejections, your collection pipelines can be a powerful tool for your Data Steward and apply robust and monitorable governance at the datalake\u2019s entry point."))),Object(s.b)("p",null,Object(s.b)("img",{src:t(219).default})),Object(s.b)("div",{align:"center"}," From validated sources to a specific breakpoint in a run ID of a Use Case in a domain"),Object(s.b)("br",null),Object(s.b)("h3",{id:"useful-through-a-business-driven-design"},"Useful through a business driven design"),Object(s.b)("p",null,"What we mean by \u201cuseful\u201d - the second of our three \u201cU\u201ds, is that your datalake has to ",Object(s.b)("strong",{parentName:"p"},"serve a business use, while not limiting itself")," to the first identified use cases. This in turn means several things."),Object(s.b)("p",null,"The first thing being the importance of starting from a business use case to then identify which data must be collected and transformed. Working from the business needs is always the winning strategy, especially for data science and datalake projects where it is easy to get lost in all the possibilities. Collecting data into your datalake is not an effortless task, especially following the aforementioned tips that help validate the data\u2019s usability, functionally and technically. Which is why the first step is to make sure that the data you collect is indeed useful to your target use case. Our article ",Object(s.b)("a",{parentName:"p",href:"https://ekimetrics.com/article-insights/customer-data-platform/"},"\u201cCustomer Data Platform: Thinking Backwards is the Way to Go\u201d")," summarizes this business driven approach well."),Object(s.b)("p",null,"Now, in order to make the most of that data and not limit a source to the one and only use case, your collection pipeline should only be considering it as that: a source. This means that it is not the role of your collection pipeline to determine which data will be useful and remove all other data: delta calculation, replacing referentials, etc. is not up to the collection, but to the use case pipelines. Making the most of a datalake\u2019s scalability in storage and letting your use cases define what is useful to them in their own pipelines, you\u2019ll allow for more opportunities to use the underlying source down the line."),Object(s.b)("p",null,"One last element to make your datalake useful is to anticipate changing functional parameters. Historical depth for your transformations, functional validation for your sources, ways to trigger custom runs\u2026 If modifying these parameters has a business or data management use, they should be included in the first iteration of your pipeline developments. In our projects, they have allowed us to be extremely flexible if a pipeline needs functional change and focus on adding new use cases and sources rather than tweaking the same pipeline over and over."),Object(s.b)("h2",{id:"used-through-scalability-of-business-impact"},"Used through scalability of business impact"),Object(s.b)("p",null,"Start small, allow it to grow : identify a single use case to automate and build your foundation architecture to host it. Using the best practices presented above you\u2019ll then be able to build on top of this robust architecture."),Object(s.b)("p",null,"The target for your datalake\u2019s first use case should be for it to be ",Object(s.b)("strong",{parentName:"p"},"high impact, low time to value"),". It must be the proof of value your businesses divisions need to invest more in the platform and should be an inspiration for other use cases. Once that use case is identified, along with the data it needs and a design for its transformation pipelines and exposition, you can start building it following the design principles presented above."),Object(s.b)("p",null,"The steps below are a summary of how that first use case is built, but are also highly reproducible to build new use cases once your foundation architecture is in place."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Ingest a new source"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Technical validation: what are the rules that define whether this data is usable? Set up data structure validation and organize the source in an understandable manner.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If the data source is highly likely to evolve over time, make sure that the collection and technical validation pipeline for this source is evolutive as well to anticipate future changes.")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Build a new use case"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Functional validation: for this use case, what are the rules that define whether this data is useful? Once again, it is best to leave functional validation to your use case pipelines, as different use cases will have different requirements for what data they want (useful) and what they can legally use (usable).")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Same goes for how the data is used: delta calculation, targeting referentials, cleaning, etc\u2026 these steps should be part of your use case pipeline.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Build transformations with break points inside the trusted data storage zone, up to the exposition layer (refined zone / gold), where it is fully ready to serve use cases. Which of these transformations is likely to change, and can you anticipate these changes by using simple configurable parameters?"))))),Object(s.b)("p",null,Object(s.b)("img",{src:t(220).default})),Object(s.b)("div",{align:"center"}," This data storage architecture makes it easy to add new sources and use cases"),Object(s.b)("br",null),Object(s.b)("p",null,"These first two steps will show your datalake\u2019s versatility. It is able to ingest any type of data, from unstructured to structured, streaming or batch. It is also able to transform it efficiently to feed use cases, due to the scalability of its computing power."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Build a new serving layer"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"This final step will vary the most between use cases, as depending on your user endpoint, there might not be a unified way to serve refined data.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Here you may need additional resources on top of your foundation architecture: an API management service, a database to efficiently serve structured data, a web service or container to display interfaces\u2026"))))),Object(s.b)("p",null,"That\u2019s it, your use case is fully functional on your datalake. Using the best practices we\u2019ve presented, the use case is robust, evolutive, scalable, understandable, and useful."),Object(s.b)("p",null,"Once the foundation architecture is laid out and more use cases and sources are added, an argument can be made for a ",Object(s.b)("strong",{parentName:"p"},"core data model"),". This model would be built by a single transformation pipeline that unifies deduplication / delta calculation, data cleaning, GDPR compliance transformations and preparation of highly used KPIs for your use cases. The core transformation should be considered as a use case pipeline: its job is to prepare data, saving on computing resources and providing a single source of truth for other use cases. It is also a great way to ease data exploration for data savvy users in the sandbox, allowing them to be inspired through use case agnostic and clean datasets. To maintain relevance, the core data model should be updated with new data sources as they are added, and new use cases using that new source should feed on the cleaned and prepared datasets."),Object(s.b)("p",null,Object(s.b)("img",{src:t(221).default})),Object(s.b)("div",{align:"center"}," A Core data model centralizes all cleaning and pre-calculations, further simplifying the storage architecture"),Object(s.b)("br",null),Object(s.b)("h2",{id:"conclusion"},"Conclusion"),Object(s.b)("p",null,"Starting with the identification of a first high impact use case, you\u2019ve been able to build a robust and evolutive datalake. Following the design principles we\u2019ve reviewed, data and use case pipelines in your datalake are usable and useful. You are now able to show a proof of value for your datalake and grow it into a central data platform for your company."),Object(s.b)("p",null,"The final U we could dive deeper into is \u201cUsed\u201d : your goal is now to maintain, grow and manage the datalake as a unified data platform, centralizing data and solutions for your business. An efficient and relevant datalake project comes with technical design challenges, some of which we\u2019ve talked about here, but also organizational challenges. By finding solutions for technical challenges, your datalake has shown its value and it is now essential to ensure its growth. As you coordinate with business divisions, you\u2019ll be able to draw a roadmap for the datalake and improve processes at an organizational level, using \u201cdata mesh\u201d-like functional architectures that allow for the best flexibility in use cases, growing your platform\u2019s relevance and enhancing data capabilities for your business."))}d.isMDXComponent=!0}}]);