module.exports = {

"[externals]/node:inspector [external] (node:inspector, cjs, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_node:inspector_10d23a46._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/node:inspector [external] (node:inspector, cjs)");
    });
});
}}),
"[project]/sentry.server.config.ts [instrumentation] (ecmascript, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/sentry_server_config_ts_766cf762._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/sentry.server.config.ts [instrumentation] (ecmascript)");
    });
});
}}),

};