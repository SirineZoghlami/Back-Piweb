const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./config/connectDB");
require("dotenv").config();
connectDB();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/pulic/auth", require("./routes/authRoutes"));
app.use("/api/air-entretiens", require("./routes/airEntretienRoutes"));
app.use("/api/air-equipment", require("./routes/airEquipmentRoutes"));
app.use("/api/superviseur", require("./routes/superviseurRoutes"));

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
