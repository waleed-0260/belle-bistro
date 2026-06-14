const express = require("express");
const cors = require("cors");
require("dotenv").config();

const menuRoutes = require("./routes/menu");
const contactRoutes = require("./routes/contact");
const reservationRoutes = require("./routes/reservation");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bellé Bistro API" });
});

app.use("/api/menu", menuRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/reservation", reservationRoutes);

app.listen(PORT, () => {
  console.log(`Bellé Bistro server running on port ${PORT}`);
});
