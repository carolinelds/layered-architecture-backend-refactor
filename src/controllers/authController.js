import { signUpService } from "../services/authServices";

export async function signUp(req,res){
    const { name, email, password } = req.body;

    await signUpService(name, email, password);

    res.sendStatus(201);
}