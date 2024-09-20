import express from "express";
import welcomeRoutes from "./src/routes/welcome";
import cors from "cors";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const corsAddress = process.env.CORS;
console.log("corsAddress", corsAddress);

const corsOptions = {
  origin: corsAddress, // Replace with your allowed origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors());

app.use("/", welcomeRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
