import { addToCart, updateCartItem, removeCartItem } from "../controllers/cartController.js";
import {protect} from "../middleware/verify.js";

export function cartRoutes(app){

app.post("/api/cart", protect, addToCart);
app.put("/api/cart/:id", protect, updateCartItem);
app.delete("/api/cart/:id", protect, removeCartItem);

}
