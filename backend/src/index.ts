import express from "express";
import http from "http";

import { getDB } from "./database.js";


//
const app = express();

const corsOptions = {
  origin: true, // change here when used properly
  // origin: "http://localhost:3000",
  credentials: true,
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  headers:
    "Content-Type,cache-control,user-agent,Origin, X-Requested-With, Accept",
};

const server = http.createServer(app);

const FRONTEND_URL = "http://localhost:3000";
// Changed port to 3001. 3000 is taken up by react.
const port = 3001;

const db = getDB();

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  console.log("request sent to root");
  res.send(
    `<p>You are accessing the backend, frontend at <a href="${FRONTEND_URL}">${FRONTEND_URL}</a></p>`,
  );
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
