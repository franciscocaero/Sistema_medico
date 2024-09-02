
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import  PacienteRoutes from "./routers/paciente_routes.js";


const app = express();
dotenv.config();

app.use(cors());


app.use(express.json());

// Variables globales
app.set("port", process.env.port || 3000);

app.use('/api',PacienteRoutes)

app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"))

export default app;