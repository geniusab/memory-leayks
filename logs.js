const fs = require("fs");

const minute = 1000 * 60; // 1 minute
const fileName = "start";
let tick = 0;

module.exports.run = function () {
  setInterval(() => {
    fs.appendFile(
      `${fileName}.txt`,
      `
    rss: ${process.memoryUsage().heapUsed / 1e6}Mb;
    heapTotal: ${process.memoryUsage().heapTotal / 1e6}Mb;
    heapUsed: ${process.memoryUsage().heapUsed / 1e6}Mb;
    external: ${process.memoryUsage().external / 1e6}Mb;
    arrayBuffers: ${process.memoryUsage().arrayBuffers / 1e6}Mb;
    `,

      function (err) {
        if (err) throw err;
      }
    );
  }, minute / 2);

  setInterval(() => {
    fs.appendFile(
      `${fileName}.txt`,
      `[${(tick += 1)} minutes] `,
      function (err) {
        if (err) throw err;
        console.log(`[${(tick += 1)} minutes] `);
      }
    );
  }, minute);
};
