
import express from "express";
import dotenv from "dotenv";
import cors from "cors";


const app = express();
dotenv.config();

app.use(cors());


app.use(express.json());

// Variables globales
app.set("port", process.env.port || 3000);



app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"))

export default app;