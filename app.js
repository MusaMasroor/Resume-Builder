const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(require("./routes/auth"));

// Serve static assets from the client/build directory
app.use(express.static(path.join(__dirname, "./client/build")));

// Serve CSS files with the correct MIME type
// app.use("/static/css/*.css", function (req, res, next) {
//   res.setHeader("Content-Type", "text/css");
//   next();
// });

// Catch-all route for serving the index.html file
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
const startServer = async () => {
  try {
    require("./db/connection");
    app.listen(port, () => {
      console.log(`listening for requests at port ${port}`);
    });
  } catch (error) {
    console.error(`Error starting server: ${error}`);
    throw error;
  }
};
startServer();
