const { cpSync, existsSync, mkdirSync, rmSync } = require("node:fs");
const { join } = require("node:path");

const root = join(__dirname, "..");
const output = join(root, "www");
if (existsSync(output)) rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
["index.html", "styles.css", "app.js", "404.html", "robots.txt", "sitemap.xml"].forEach(file => cpSync(join(root, file), join(output, file)));
console.log("Recursos web preparados para Android.");
