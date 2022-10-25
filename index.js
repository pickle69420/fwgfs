import { fileURLToPath } from "url";
import http from 'http';
import serveStatic from "serve-static";

const port = process.env.PORT || 8080;
const serve = serveStatic(fileURLToPath(new URL("./static/", import.meta.url)), { fallthrough: false });
const server = http.createServer();

server.listen({ port: port, });

console.log("Server running on port " + port)