const express = require("express");
const responseTimeLogger = require("./middleware/responseTime");

const app = express();
const PORT = 8000;

app.use(responseTimeLogger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
