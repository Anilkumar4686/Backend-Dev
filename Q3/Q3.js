const os = require("os");
const fs = require("fs");

function logSystemInfo() {
    const cpuInfo = os.cpus()[0].model;
    const totalMemory = (os.totalmem() / (1024 * 1024)).toFixed(2); 
    const freeMemory = (os.freemem() / (1024 * 1024)).toFixed(2);  
    const platform = os.platform();
    const time = new Date().toLocaleString();

    const logData = `
Time: ${time}
Platform: ${platform}
CPU: ${cpuInfo}
Total Memory: ${totalMemory} MB
Free Memory: ${freeMemory} MB
----------------------------
`;

    fs.appendFile("system_log.txt", logData, (err) => {
        if (err) {
            console.error("Error writing log:", err);
        } else {
            console.log("System info logged");
        }
    });
}

setInterval(logSystemInfo, 5000);
