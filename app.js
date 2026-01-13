const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Register HBS as the view engine
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "hbs");

// Serve static files from public
app.use(express.static(path.join(__dirname, "public")));

// Register routes
const travelRouter = require("./app_server/routes/travel");
app.use("/", travelRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});