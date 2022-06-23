const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./src/routers/users");
const postRoute = require("./src/routers/posts");
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/pages");

app.use((req, res, next) => {
  if (req.query.apiKey === "12345") {
    console.log("Hello World!");
    next();
  } else {
    res.status(401).send("<h1>Access denied!</h1>");
  }
});

app.get("/", (req, res) => {
  res.render("index");
});
app.use("/users", userRoute);
app.use("/posts", postRoute);

app.get("/posts", (req, res) => {
  res.send("<h1>Hello Post</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
