const express = require("express");
const httpProxy = require("http-proxy");
const app = express();
const proxy = httpProxy.createProxyServer();

proxy.on("proxyReq", function (proxyReq) {
  for (const header in proxyReq.getHeaders()) proxyReq.setHeader(header, "");
  proxyReq.setHeader("host", proxyReq.host);
});

app.use("/", express.static("dist/"));
app.all("/proxy(/*)", (req, res) => {
  req.url = req.url.replace("/proxy", "");
  proxy.web(req, res, { target: "https://kahoot.it" });
});

app.listen(80, () => console.log("Listening on 80"));
