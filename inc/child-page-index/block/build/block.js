(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,n=window.React;var a,r,l;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(null,arguments)}var i=function(e){return n.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),a||(a=n.createElement("path",{fill:"#000",d:"m10.89 14.778-3.267.007a.11.11 0 0 0-.102.076l-.25.722c-.022.076.03.152.103.152h1.27c.095 0 .146.122.08.19L6.7 18.105h.007l1.042 3.397c.022.076-.03.144-.103.144h-1.02a.104.104 0 0 1-.102-.076L6 19.83c-.029-.106-.168-.106-.205-.007l-.426 1.223a.1.1 0 0 0 0 .069l.39 1.481c.014.046.058.084.102.084H9.15c.073 0 .125-.076.103-.145l-1.329-4.277c-.014-.038 0-.084.03-.114l3.016-3.176c.066-.069.015-.19-.08-.19"})),r||(r=n.createElement("path",{fill:"#D8141C",d:"m7.022 13-1.99.008a.11.11 0 0 0-.102.076l-.257.721c-.03.076.03.152.103.152h.836c.074 0 .125.076.103.152l-2.37 6.717a.108.108 0 0 1-.206 0l-1.703-4.848a.112.112 0 0 1 .103-.152h.859a.11.11 0 0 1 .103.076l.616 1.748a.108.108 0 0 0 .206 0l.954-2.72a.112.112 0 0 0-.103-.152H.108c-.073 0-.125.076-.103.152l3.127 8.996a.108.108 0 0 0 .205 0l3.787-10.774c.022-.076-.029-.152-.102-.152"})),l||(l=n.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M1.5 6.5v-5h8v5zM0 1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm1.5 12.278V11.5h8v1.781l1.39-.003q.056 0 .11.003V11a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v2.281q.052-.003.108-.003zM3.368 13l-.1.278H3V13zm6.805 4.985a1 1 0 0 0 .82-.863zM14.5 1.5v5h8v-5zM14 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 16.5v-5h8v5zM13 11a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1zM3 3v2h2V3zm13 0v2h2V3zm0 12v-2h2v2z",clipRule:"evenodd"})))};const c=JSON.parse('{"apiVersion":2,"name":"vk-blocks/child-page-index","title":"Child Page Index","category":"veu-block","description":"Page List of Child Page","textdomain":"vk-all-in-one-expansion-unit","attributes":{"postId":{"type":"number","default":-1}},"supports":{"className":true}}'),s=window.wp.i18n,u=window.wp.blockEditor,p=window.wp.serverSideRender;var v=e.n(p);const d=window.wp.components,m=(0,window.wp.data.withSelect)((function(e){return{pages:e("core").getEntityRecords("postType","page",{_embed:!0,per_page:-1})}}))((function(e){var t=e.attributes,n=e.setAttributes,a=e.pages,r=t.postId,l=[{label:(0,s.__)("This Page","vk-all-in-one-expansion-unit"),value:-1}];if(null!=a){var o=a.length,i=[],c=0;for(c=0;c<o;c++)0!==a[c].parent&&i.push(a[c].parent);for(c=0;c<o;c++)i.includes(a[c].id)&&l.push({label:a[c].title.rendered,value:a[c].id})}var p=(0,u.useBlockProps)({className:"veu_child_page_list_block"});return React.createElement(React.Fragment,null,React.createElement(u.InspectorControls,null,React.createElement(d.PanelBody,{title:(0,s.__)("Parent Page","vk-all-in-one-expansion-unit"),initialOpen:!0},React.createElement(d.SelectControl,{label:(0,s.__)("Parent Page","vk-all-in-one-expansion-unit"),value:r,options:l,onChange:function(e){n({postId:parseInt(e,10)})}}))),React.createElement("div",p,React.createElement(v(),{block:"vk-blocks/child-page-index",attributes:t})))}));function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}var f,h,w,g=c.name,y={icon:React.createElement(i,null),edit:m};(0,t.unstable__bootstrapServerSideBlockDefinitions)((f={},w=c,(h=function(e){var t=function(e,t){if("object"!=b(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=b(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:t+""}(h=g))in f?Object.defineProperty(f,h,{value:w,enumerable:!0,configurable:!0,writable:!0}):f[h]=w,f)),(0,t.registerBlockType)(c,y)})();