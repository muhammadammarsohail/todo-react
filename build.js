const { build } = require("esbuild");

build({
  entryPoints: ["src/index.js"],
  outfile: "dist/main.js",
  bundle: true,
  minify: true,
  sourcemap: true,
  loader: { ".js": "jsx" },
})
  .then(() => {
    console.log("Build complete!");
  })
  .catch((error) => {
    console.error("Build error:", error);
  });
