const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Use apiRoutes
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

// app.listen(PORT, () => {
//   console.log(`API server now on port ${PORT}!`);
// });
// const notesRoutes = require("./develop/public/notes.html");
// const htmlRoutes = require("./develop/public/index.html");
