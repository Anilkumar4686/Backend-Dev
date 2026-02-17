const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let posts = [
    { id: 1, title: "First Post", content: "This is my first blog post." }
];

app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

app.get("/posts/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render("post", { post });
});

app.get("/posts/new", (req, res) => {
    res.render("new");
});

app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    posts.push({
        id: posts.length + 1,
        title,
        content
    });
    res.redirect("/posts");
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
