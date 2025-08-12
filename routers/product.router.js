
import { getProducts, getProductById , addProducts} from "../controllers/productController.js";

export function productRoutes(app){

app.get("/api/products", getProducts);
app.get("/api/products/:id", getProductById);
app.post("/api/products",  addProducts);


}