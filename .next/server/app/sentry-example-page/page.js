try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="b2cb5e55-acca-4a8f-80bd-6805885e1922",e._sentryDebugIdIdentifier="sentry-dbid-b2cb5e55-acca-4a8f-80bd-6805885e1922")}catch(e){}try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="b2cb5e55-acca-4a8f-80bd-6805885e1922",e._sentryDebugIdIdentifier="sentry-dbid-b2cb5e55-acca-4a8f-80bd-6805885e1922")}catch(e){}(()=>{var e={};e.id=917,e.ids=[917],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},5386:(e,r,t)=>{"use strict";t.r(r),t.d(r,{"7f440c7efeb3ee178ede445214e1559e85a2b464cd":()=>s.at,"7f86fa3b553f8b40993fd00b330b7de214deb09277":()=>s.ai,"7f9dbc1d8e64843f634264bbab6223bf5df897e753":()=>s.ot});var s=t(85475)},8086:e=>{"use strict";e.exports=require("module")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19022:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var s=t(69694),o=t(87945),n=t.n(o),a=t(85186),i=t(10415);class d extends Error{constructor(e){super(e),this.name="SentryExampleFrontendError"}}function p(){let[e,r]=(0,i.useState)(!1),[t,o]=(0,i.useState)(!0);return(0,s.jsxs)("div",{children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:"sentry-example-page"}),(0,s.jsx)("meta",{name:"description",content:"Test Sentry for your Next.js app!"})]}),(0,s.jsxs)("main",{children:[(0,s.jsx)("div",{className:"flex-spacer"}),(0,s.jsx)("svg",{height:"40",width:"40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M21.85 2.995a3.698 3.698 0 0 1 1.353 1.354l16.303 28.278a3.703 3.703 0 0 1-1.354 5.053 3.694 3.694 0 0 1-1.848.496h-3.828a31.149 31.149 0 0 0 0-3.09h3.815a.61.61 0 0 0 .537-.917L20.523 5.893a.61.61 0 0 0-1.057 0l-3.739 6.494a28.948 28.948 0 0 1 9.63 10.453 28.988 28.988 0 0 1 3.499 13.78v1.542h-9.852v-1.544a19.106 19.106 0 0 0-2.182-8.85 19.08 19.08 0 0 0-6.032-6.829l-1.85 3.208a15.377 15.377 0 0 1 6.382 12.484v1.542H3.696A3.694 3.694 0 0 1 0 34.473c0-.648.17-1.286.494-1.849l2.33-4.074a8.562 8.562 0 0 1 2.689 1.536L3.158 34.17a.611.611 0 0 0 .538.917h8.448a12.481 12.481 0 0 0-6.037-9.09l-1.344-.772 4.908-8.545 1.344.77a22.16 22.16 0 0 1 7.705 7.444 22.193 22.193 0 0 1 3.316 10.193h3.699a25.892 25.892 0 0 0-3.811-12.033 25.856 25.856 0 0 0-9.046-8.796l-1.344-.772 5.269-9.136a3.698 3.698 0 0 1 3.2-1.849c.648 0 1.285.17 1.847.495Z",fill:"currentcolor"})}),(0,s.jsx)("h1",{children:"sentry-example-page"}),(0,s.jsxs)("p",{className:"description",children:["Click the button below, and view the sample error on the Sentry ",(0,s.jsx)("a",{target:"_blank",href:"https://neha-03.sentry.io/issues/?project=4509384862072832",children:"Issues Page"}),". For more details about setting up Sentry, ",(0,s.jsx)("a",{target:"_blank",href:"https://docs.sentry.io/platforms/javascript/guides/nextjs/",children:"read our docs"}),"."]}),(0,s.jsx)("button",{type:"button",onClick:async()=>{await a.startSpan({name:"Example Frontend Span",op:"test"},async()=>{if(!(await fetch("/api/sentry-example-api")).ok)throw r(!0),new d("This error is raised on the frontend of the example page.")})},children:(0,s.jsx)("span",{children:"Throw Sample Error"})}),e?(0,s.jsx)("p",{className:"success",children:"Sample error was sent to Sentry."}):t?(0,s.jsx)("div",{className:"success_placeholder"}):(0,s.jsx)("div",{className:"connectivity-error",children:(0,s.jsxs)("p",{children:["The Sentry SDK is not able to reach Sentry right now - this may be due to an adblocker. For more information, see ",(0,s.jsx)("a",{target:"_blank",href:"https://docs.sentry.io/platforms/javascript/guides/nextjs/troubleshooting/#the-sdk-is-not-sending-any-data",children:"the troubleshooting guide"}),"."]})}),(0,s.jsx)("div",{className:"flex-spacer"}),(0,s.jsx)("p",{className:"description",children:"Adblockers will prevent errors from being sent to Sentry."})]}),(0,s.jsx)("style",{children:`
        main {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 16px;
          padding: 16px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
        }

        h1 {
          padding: 0px 4px;
          border-radius: 4px;
          background-color: rgba(24, 20, 35, 0.03);
          font-family: monospace;
          font-size: 20px;
          line-height: 1.2;
        }

        p {
          margin: 0;
          font-size: 20px;
        }

        a {
          color: #6341F0;
          text-decoration: underline;
          cursor: pointer;

          @media (prefers-color-scheme: dark) {
            color: #B3A1FF;
          }
        }

        button {
          border-radius: 8px;
          color: white;
          cursor: pointer;
          background-color: #553DB8;
          border: none;
          padding: 0;
          margin-top: 4px;

          & > span {
            display: inline-block;
            padding: 12px 16px;
            border-radius: inherit;
            font-size: 20px;
            font-weight: bold;
            line-height: 1;
            background-color: #7553FF;
            border: 1px solid #553DB8;
            transform: translateY(-4px);
          }

          &:hover > span {
            transform: translateY(-8px);
          }

          &:active > span {
            transform: translateY(0);
          }
        }

        .description {
          text-align: center;
          color: #6E6C75;
          max-width: 500px;
          line-height: 1.5;
          font-size: 20px;

          @media (prefers-color-scheme: dark) {
            color: #A49FB5;
          }
        }

        .flex-spacer {
          flex: 1;
        }

        .success {
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 20px;
          line-height: 1;
          background-color: #00F261;
          border: 1px solid #00BF4D;
          color: #181423;
        }

        .success_placeholder {
          height: 46px;
        }

        .connectivity-error {
          padding: 12px 16px;
          background-color: #E50045;
          border-radius: 8px;
          width: 500px;
          color: #FFFFFF;
          border: 1px solid #A80033;
          text-align: center;
          margin: 0;
        }
        
        .connectivity-error a {
          color: #FFFFFF;
          text-decoration: underline;
        }
      `})]})}},19063:e=>{"use strict";e.exports=require("require-in-the-middle")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19771:e=>{"use strict";e.exports=require("process")},21820:e=>{"use strict";e.exports=require("os")},23416:(e,r,t)=>{"use strict";let s,o;t.r(r),t.d(r,{default:()=>m,generateImageMetadata:()=>f,generateMetadata:()=>h,generateViewport:()=>g});var n=t(63033),a=t(60948),i=t(93084),d=(0,a.registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/neha/lms-app/app/sentry-example-page/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/neha/lms-app/app/sentry-example-page/page.tsx","default");let p={...n},l="workUnitAsyncStorage"in p?p.workUnitAsyncStorage:"requestAsyncStorage"in p?p.requestAsyncStorage:void 0,c="function"==typeof d?new Proxy(d,{apply:(e,r,t)=>{let s,o,n;try{let e=l?.getStore();s=e?.headers.get("sentry-trace")??void 0,o=e?.headers.get("baggage")??void 0,n=e?.headers}catch(e){}return i.wrapServerComponentWithSentry(e,{componentRoute:"/sentry-example-page",componentType:"Page",sentryTraceHeader:s,baggageHeader:o,headers:n}).apply(r,t)}}):d,u={...n},x="workUnitAsyncStorage"in u?u.workUnitAsyncStorage:"requestAsyncStorage"in u?u.requestAsyncStorage:void 0;o="function"==typeof c?new Proxy(c,{apply:(e,r,t)=>{let s,o,n;try{let e=x?.getStore();s=e?.headers.get("sentry-trace")??void 0,o=e?.headers.get("baggage")??void 0,n=e?.headers}catch(e){}return i.wrapServerComponentWithSentry(e,{componentRoute:"/sentry-example-page",componentType:"Page",sentryTraceHeader:s,baggageHeader:o,headers:n}).apply(r,t)}}):c;let h=void 0,f=void 0,g=void 0,m=o},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31421:e=>{"use strict";e.exports=require("node:child_process")},33873:e=>{"use strict";e.exports=require("path")},36686:e=>{"use strict";e.exports=require("diagnostics_channel")},37067:e=>{"use strict";e.exports=require("node:http")},38522:e=>{"use strict";e.exports=require("node:zlib")},41692:e=>{"use strict";e.exports=require("node:tls")},44708:e=>{"use strict";e.exports=require("node:https")},46055:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(53377);let o=async e=>[{type:"image/x-icon",sizes:"32x31",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},48161:e=>{"use strict";e.exports=require("node:os")},52404:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.default,__next_app__:()=>l,pages:()=>p,routeModule:()=>c,tree:()=>d});var s=t(22808),o=t(64519),n=t(36281),a=t(83536),i={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>a[e]);t.d(r,i);let d={children:["",{children:["sentry-example-page",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,23416)),"/home/neha/lms-app/app/sentry-example-page/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,44057)),"/home/neha/lms-app/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(t.bind(t,36281)),"/home/neha/lms-app/app/global-error.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,71309,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,12912,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,98081,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,p=["/home/neha/lms-app/app/sentry-example-page/page.tsx"],l={require:t,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/sentry-example-page/page",pathname:"/sentry-example-page",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},53053:e=>{"use strict";e.exports=require("node:diagnostics_channel")},55511:e=>{"use strict";e.exports=require("crypto")},56801:e=>{"use strict";e.exports=require("import-in-the-middle")},57075:e=>{"use strict";e.exports=require("node:stream")},57975:e=>{"use strict";e.exports=require("node:util")},58310:(e,r,t)=>{Promise.resolve().then(t.bind(t,19022))},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},66558:(e,r,t)=>{Promise.resolve().then(t.bind(t,23416))},73024:e=>{"use strict";e.exports=require("node:fs")},73566:e=>{"use strict";e.exports=require("worker_threads")},74998:e=>{"use strict";e.exports=require("perf_hooks")},75919:e=>{"use strict";e.exports=require("node:worker_threads")},76760:e=>{"use strict";e.exports=require("node:path")},77030:e=>{"use strict";e.exports=require("node:net")},77598:e=>{"use strict";e.exports=require("node:crypto")},79551:e=>{"use strict";e.exports=require("url")},79646:e=>{"use strict";e.exports=require("child_process")},80481:e=>{"use strict";e.exports=require("node:readline")},83997:e=>{"use strict";e.exports=require("tty")},84297:e=>{"use strict";e.exports=require("async_hooks")},86592:e=>{"use strict";e.exports=require("node:inspector")},87945:(e,r)=>{"use strict";function t(){return null}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t}}),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},94735:e=>{"use strict";e.exports=require("events")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[912,84,465,377,346],()=>t(52404));module.exports=s})();
//# sourceMappingURL=page.js.map