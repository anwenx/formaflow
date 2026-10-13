import express from "express";
import cors from "cors";

const app = express();
const port = Number(process.env.API_PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ success: true, service: "formaflow-api" });
});

app.listen(port, () => {
  console.log(`FormaFlow API listening on port ${port}`);
});
