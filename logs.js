const minute = 1000 * 60; // 1 minute
const fileName = "start";
const start = process.memoryUsage().rss / 1e6 + "Mb;" + "\r\n";
let tick = 0;

fs.writeFile(`${fileName}.txt`, start, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

setInterval(() => {
  fs.appendFile(
    `${fileName}.text`,
    `
    rss: ${process.memoryUsage().heapUsed / 1e6}Mb;
    heapTotal: ${process.memoryUsage().heapTotal / 1e6}Mb;
    heapUsed: ${process.memoryUsage().heapUsed / 1e6}Mb;
    external: ${process.memoryUsage().external / 1e6}Mb;
    arrayBuffers: ${process.memoryUsage().arrayBuffers / 1e6}Mb;
    `,

    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
}, timer / 2);

setInterval(() => {
  fs.appendFile(
    `${fileName}.text`,
    `[${(tick += 1)} minutes] `,
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
}, timer);
