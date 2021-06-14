//jshint esversion:6
const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect database
connectDB();
app.get("/", (req, res) => {
    res.json({msg:"Welcome to Contact Keeper API"});
});

//Init Middleware  
app.use(express.json({ extended: true }));

//Define Routes
app.use("/api/users",require("./routes/users"));
app.use("/api/contacts",require("./routes/contacts"));
app.use("/api/auth",require("./routes/auth"));

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`);
});