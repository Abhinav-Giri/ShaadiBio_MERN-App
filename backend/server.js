import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import notFound from "./middlewares/notFoundMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import biodataRoutes from "./routes/biodataRoutes.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/biodata", biodataRoutes);

app.use(notFound);         // catches unknown routes
app.use(errorHandler);     // handles global errors

app.listen(PORT, () => console.log("Server running"));