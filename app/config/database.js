import mongoose from "mongoose";
import { mongoDbUrl } from "./config.mjs";

//Conexión con la base de datos
mongoose
  .connect(mongoDbUrl)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log("DB error", err));
