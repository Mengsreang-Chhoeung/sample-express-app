import express, { Request, Response } from "express";
const app = express();
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
