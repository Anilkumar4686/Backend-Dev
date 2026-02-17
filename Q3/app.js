const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

app.get("/contact", (req, res) => {
    res.render("form");
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    res.render("success", { name, email, message });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
