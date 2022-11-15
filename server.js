const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "public"));

const notes = require("./Develop/db/db");

// Use apiRoutes
//get
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//post
app.post("/api/notes", (req, res) => {
  const postIt = req.body;
  notes.push(postIt);
  fs.writeFilySync(
    path.join(__dirname, "./Develop/db/db.json"),
    JSON.stringify(notes)
  );
  res.json(notes);
});

//Use HTML Routes
// app.use("/", htmlRoutes);
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
