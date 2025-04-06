const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_system_esm_4e62dd11._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_material_esm_ec7feab8._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_18e565d8._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_83952e4f._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__02130a0e._.js");
runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.jsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.jsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
