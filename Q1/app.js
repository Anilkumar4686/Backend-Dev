const express = require("express");
const app = express();

const PORT = 8000;

const users = [
    { id: 1, name: "Arpit" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" },
    { id: 4, name: "Priya" }
];

// Route with query parameter filtering
app.get("/users", (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.json(users);
    }

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(filteredUsers);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
