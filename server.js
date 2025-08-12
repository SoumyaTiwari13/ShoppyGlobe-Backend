import express from "express";
import mongoose from "mongoose";
const app = express();
import { productRoutes } from "./routers/product.router.js";
import { cartRoutes } from "./routers/cart.router.js";
import { userRoutes } from "./routers/user.router.js";

mongoose.connect('mongodb+srv://engrsoumyatiwari:Uxlhg6fxTM7gaRxM@cluster1.xojxw5s.mongodb.net/')//connect reurns a promise
.then(() =>{
    console.log("DB connected");
})
.catch(()=>{
    console.log("DB failed", err);
})


app.use(express.json());
app.get('/', (req,res)=>{
    res.send("WELCOME TO ROOT ROUTE")
})

// Routes
productRoutes(app);
cartRoutes(app);
userRoutes(app);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
});


//engrsoumyatiwari
//Uxlhg6fxTM7gaRxM
//mongodb+srv://engrsoumyatiwari:Uxlhg6fxTM7gaRxM@cluster1.xojxw5s.mongodb.net/
                     