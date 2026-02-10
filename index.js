const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(express.json());


const students = [
    { id: 1, name: "Alice", branch: "CSE" },
    { id: 2, name: "Bob", branch: "ECE" },
    { id: 3, name: "Charlie", branch: "MECH" },
];


app.get("/", (req, res) => {
    res.send("Welcome to Expressjs Backend!");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/search", (req, res) => {
    const branch = req.query.branch;

    if (!branch) {
        return res.json(students);
    }

    const foundStudents = students.filter(
        s => s.branch === branch
    );

    res.json(foundStudents);
});

// app.get("/students/:id", (req, res) => {
//     const id = Number(req.params.id);

//     const student = students.find(
//         s => s.id === id
//     );

//     if (!student) {
//         return res.status(404).json("student not found");
//     }

//     res.json(student);
// });

app.post("/students/register", (req, res) => {
    const data = req.body;

    if (!data || !data.name || !data.branch) {
        return res.status(400).json("name or branch missing");
    }

    students.push(data);
    res.status(201).json(data);
});


app.post("/student/register", (req, res) => {
    if (!req.body) {
        return res.status(400).json("request body missing");
    }

    const { name, branch } = req.body;

    if (!name || !branch) {
        return res.status(400).json("detail missing");
    }

    fs.readFile("./student.json", "utf-8", (err, data) => {
    if (err) {
        return res.status(500).json({ error: "could not read file" });
    }

    const students = JSON.parse(data || "[]");

    const newStudent = {
        id: students.length > 0
            ? student[students.length - 1].id + 1
            : 1,
        name,
        branch
    };

    students.push(newStudent);

    fs.writeFile(
        "./student.json",
        JSON.stringify(students, null, 2),
        (err) => {
            if (err) {
                return res.status(500).json({ error: "error writing to file" });
            }

            return res.status(201).json({
                message: "registered!",
                students: newStudent
            });
        }
    );
});
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.put("/students/:id",(req,res)=>{
    const userId=parseInt(req.params.id);

    const foundIndex=students.findIndex(s=> s.id==userId);
    if(foundIndex==-1){
        return res.status(404).send("student not found")
    }
    students[foundIndex]={...students[foundIndex],...res.body};
    const result={message:"student record updated successfully",students:students};
    return res.status(200).json(result)

})