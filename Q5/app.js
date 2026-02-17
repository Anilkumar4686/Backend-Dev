const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

app.get("/gallery", (req, res) => {
    res.render("gallery", { images });
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
