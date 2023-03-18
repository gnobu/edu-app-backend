import express from "express"
import { IController } from "../types/controller.interface"

class AuthController implements IController {
    public path
    public router

    constructor() {
        this.path = '/auth'
        this.router = express.Router()

        this.initializeRoutes()
    }
    public initializeRoutes() {
        this.router.post(`${this.path}/login`, this.login)
        this.router.post(`${this.path}/signup`, this.signup)
    }
    private login(req: express.Request, res: express.Response) {
        res.send('Login')
    }
    private signup(req: express.Request, res: express.Response) {
        res.send('Signup')
    }
}

export default AuthController