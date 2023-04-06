const fs = require("fs");

fs.cpSync("./apps/docs/build", "./apps/client/dist/wiki", { recursive: true });
