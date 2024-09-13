import express from "express";
import welcomeRoutes from "./src/routes/welcome";
import cors from "cors";
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // Replace with your allowed origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

const port = process.env.PORT || 5000;

app.use(cors(corsOptions));

app.use("/", welcomeRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
