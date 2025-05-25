module.exports = {

"[project]/sentry.server.config.ts [instrumentation] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$cjs$2f$index$2e$server$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/nextjs/build/cjs/index.server.js [instrumentation] (ecmascript)");
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$cjs$2f$index$2e$server$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["init"])({
    dsn: "https://a648d36675774012fb6b19410b18d7dc@o4508857401671680.ingest.us.sentry.io/4509384862072832",
    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false
});
}}),

};

//# sourceMappingURL=sentry_server_config_ts_766cf762._.js.map