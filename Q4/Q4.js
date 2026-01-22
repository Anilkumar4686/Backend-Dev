const express = require("express");
const app = express();

app.use(express.json());

let todos = [];
let idCounter = 1;


app.post("/todos", (req, res) => {
    const { title, completed } = req.body;

    const newTodo = {
        id: idCounter++,
        title,
        completed: completed || false
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.get("/todos", (req, res) => {
    res.json(todos);
});


app.get("/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
});


app.put("/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    const { title, completed } = req.body;
    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
});


app.delete("/todos/:id", (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }

    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
