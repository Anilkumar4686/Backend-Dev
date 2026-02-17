const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Home Page");
});

// 404 Middleware (must be last)
app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
