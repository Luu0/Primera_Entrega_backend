import express, { json } from "express"
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API de productos!");
});

app.use("/api/products",productRouter);
app.use("/api/carts",cartRouter);



app.listen(port, () => console.log(`Server listening on port ${port}`));




