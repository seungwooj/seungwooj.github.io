(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6616)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(6495).Z,n=r(2648).Z,o=r(1598).Z,a=r(7273).Z,s=o(r(7294)),l=n(r(2636)),c=r(7757),d=r(3735),u=r(3341);r(4210);var f=n(r(7746));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,n,o,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}function x(e){let[t,r]=s.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let _=s.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fetchPriority:h,fill:p,placeholder:m,loading:_,srcString:v,config:j,unoptimized:b,loader:w,onLoadRef:y,onLoadingCompleteRef:E,setBlurComplete:N,setShowAltText:C,onLoad:S,onError:z}=e,P=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return _=f?"lazy":_,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},P,x(h),{loading:_,width:o,height:n,decoding:"async","data-nimg":p?"fill":"1",className:c,style:i({},d,u)},r,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(z&&(e.src=e.src),e.complete&&g(e,v,m,y,E,N,b))},[v,m,y,E,N,z,b,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,m,y,E,N,b)},onError:e=>{C(!0),"blur"===m&&N(!0),z&&z(e)}})))}),v=s.forwardRef((e,t)=>{let r,n;var o,{src:g,sizes:v,unoptimized:j=!1,priority:b=!1,loading:w,className:y,quality:E,width:N,height:C,fill:S,style:z,onLoad:P,onLoadingComplete:k,placeholder:R="empty",blurDataURL:O,fetchPriority:I,layout:L,objectFit:A,objectPosition:M,lazyBoundary:D,lazyRoot:H}=e,T=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=s.useContext(u.ImageConfigContext),B=s.useMemo(()=>{let e=h||F||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[F]),G=T,W=G.loader||f.default;delete G.loader;let q="__next_img_default"in W;if(q){if("custom"===B.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:r}=t,i=a(t,["config"]);return e(i)}}if(L){"fill"===L&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(z=i({},z,e));let t={responsive:"100vw",fill:"100vw"}[L];t&&!v&&(v=t)}let V="",U=m(N),Z=m(C);if("object"==typeof(o=g)&&(p(o)||void 0!==o.src)){let e=p(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,O=O||e.blurDataURL,V=e.src,!S){if(U||Z){if(U&&!Z){let t=U/e.width;Z=Math.round(e.height*t)}else if(!U&&Z){let t=Z/e.height;U=Math.round(e.width*t)}}else U=e.width,Z=e.height}}let Y=!b&&("lazy"===w||void 0===w);(!(g="string"==typeof g?g:V)||g.startsWith("data:")||g.startsWith("blob:"))&&(j=!0,Y=!1),B.unoptimized&&(j=!0),q&&g.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(j=!0),b&&(I="high");let[J,Q]=s.useState(!1),[X,K]=s.useState(!1),$=m(E),ee=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:M}:{},X?{}:{color:"transparent"},z),et="blur"===R&&O&&!J?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:Z,blurWidth:r,blurHeight:n,blurDataURL:O,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,i)=>"".concat(s({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:s({config:t,src:r,quality:o,width:l[d]})}}({config:B,src:g,unoptimized:j,width:U,quality:$,sizes:v,loader:W}),ei=g,en=s.useRef(P);s.useEffect(()=>{en.current=P},[P]);let eo=s.useRef(k);s.useEffect(()=>{eo.current=k},[k]);let ea=i({isLazy:Y,imgAttributes:er,heightInt:Z,widthInt:U,qualityInt:$,className:y,imgStyle:ee,blurStyle:et,loading:w,config:B,fetchPriority:I,fill:S,unoptimized:j,placeholder:R,loader:W,srcString:ei,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:Q,setShowAltText:K},G);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},ea,{ref:t})),b?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:G.crossOrigin},x(I)))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,s=i||t,l=n||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},6616:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var i=r(5893),n=r(9008),o=r.n(n),a=r(5675),s=r.n(a),l=r(9034),c=r.n(l);function d(){return(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:c().main,children:[(0,i.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,i.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,i.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,i.jsx)("code",{className:c().code,children:"pages/index.js"})]}),(0,i.jsxs)("div",{className:c().grid,children:[(0,i.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,i.jsx)("h2",{children:"Documentation →"}),(0,i.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,i.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,i.jsx)("h2",{children:"Learn →"}),(0,i.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,i.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:c().card,children:[(0,i.jsx)("h2",{children:"Examples →"}),(0,i.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,i.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,i.jsx)("h2",{children:"Deploy →"}),(0,i.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,i.jsx)("footer",{className:c().footer,children:(0,i.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,i.jsx)("span",{className:c().logo,children:(0,i.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},9034:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);