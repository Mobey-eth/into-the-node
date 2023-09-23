const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set("views", "mobiViews"); // to set custom views path

// listen for requests

app.listen(3000);

app.get("/", (req, res) => {
  // res.send("<p>Home Page</p>");

  const blogs = [
    {
      title: "Moby is a Whale",
      snippet: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Moby Loves plantains",
      snippet: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Moby OTR?",
      snippet: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];

  res.render("index", { title: "Home Page", blogs });
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// redirects

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
  //  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
