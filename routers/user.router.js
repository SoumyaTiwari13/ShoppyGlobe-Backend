import { registerUser, loginUser } from "../controllers/userController.js";

export function userRoutes(app){

// Public routes
app.post("/api/register", registerUser);
app.post("/api/login", loginUser);

}


