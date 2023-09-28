const express = require("express");
// to use 3rd party middleware

const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
require("dotenv").config();

// express app
const app = express();

// mongoURI
const dbURI = process.env.DBURI;

mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to DB");
    // listen for requests
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");
// app.set("views", "mobiViews"); // to set custom views path

// app.use((req, res, next) => {
//   console.log("New request made:");
//   console.log("host:", req.hostname);
//   console.log("path:", req.path);
//   console.log("method:", req.method);
//   next();
// }); // express hangs because it doest know how to move on so we use next().

// 3RD PARTY MIDDLEWARE
app.use(express.static("public"));
app.use(morgan("dev"));

// mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "Newer Blog2",
//     snippet: "About my newer blog",
//     body: "Even more about my newer blog",
//   });

//   // to save it
//   blog
//     .save()
//     .then((result) => {
//       console.log("Save success toast");
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // to retrieve all blogs
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // to retrieve single blog
// app.get("/single-blog", (req, res) => {
//   Blog.findById("6512a9b8f6a62218630dee0a")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/", (req, res) => {
  // res.send("<p>Home Page</p>");
  res.redirect("/blogs");
  /**
   * 
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
   */
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// redirects --blog routes

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
  //  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
