const express = require("express");
const UAParser = require("ua-parser-js");

const app = express();
const defaultPort = 3000;
let port = defaultPort;

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Browser detector app listening at http://localhost:${port}`);
  });
};

const checkPort = (port) => {
  const server = app.listen(port);
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${port} is in use. Trying next port...`);
      checkPort(port + 1); // Try the next port
    }
  });
  server.on("listening", () => {
    server.close(); // Close the server once we confirm the port is free
    startServer(port);
  });
};

// Start checking from the default port
checkPort(port);

app.get("/", (req, res) => {
  const parser = new UAParser();
  const ua = req.headers["user-agent"];
  parser.setUA(ua);
  const result = parser.getResult();

  const browserInfo = {
    browser: result.browser.name,
    os: result.os.name,
    platform: result.device.type || "desktop",
    model: result.device.model || "N/A",
  };

  res.json(browserInfo);
});
