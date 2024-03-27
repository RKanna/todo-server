import express from "express";
import router from "./routes/todoRoutes.js";
import cors from "cors";
import mongoose from "mongoose";
import UsersModel from "./Models/todoModal.js";
import bodyParser from "body-parser";

const app = express();
// app.use(cors());
// app.use(
//   cors({
//     origin: ["https://tame-pink-pike-sock.cyclic.app"],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
  })
);
app.options("*", cors());

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/todos", router);
// app.use(express.urlencoded({ extended: false }));

// mongoose.connect("mongodb://127.0.0.1:27017/TodoFullStackDB");

mongoose.connect(
  "mongodb+srv://rkannanbalakrishnan:pKeuSy2MParodAuI@blog.8bifagg.mongodb.net/TodoFullStackDB"
);

app.get("/", (req, res) => {
  res.status(200).send("<h2>Auth Page</h2>");
});

app.listen(3001, () => {
  console.log("server is running");
});
