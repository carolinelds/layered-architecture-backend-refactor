import { signUpService, signInService } from "../services/authServices.js";

export async function signUp(req,res){
    const { name, email, password } = req.body;

    await signUpService(name, email, password);

    res.sendStatus(201);
}

export async function signIn(req, res){
    const { email, password } = req.body;

    const token = await signInService(email, password);

    res.send(token);
}