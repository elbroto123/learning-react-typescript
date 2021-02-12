import * as express from "express";
import { exampleRouter } from "./routes/example.router";

const PORT = 8080;

let app = express();

let path = require("path");

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(exampleRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
