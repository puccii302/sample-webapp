import express from "express";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("change me to see updates, express, hmr");
});

if (process.env.NODE_ENV === "production") {
  app.listen(process.env.PORT ? parseInt(process.env.PORT, 10) : 3000);
}

export const viteNodeApp = app;
