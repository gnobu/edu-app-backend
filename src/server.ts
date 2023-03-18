import 'dotenv/config'
import App from './app'
import AuthController from './controllers/auth.controller'
import Database from './database/connect'
import validateEnv from './utils/validateEnv'

(
    async () => {
        validateEnv()
        const PORT = process.env.PORT || 5000
        const database = new Database()
        try {
            await database.connect()
            process.env.NODE_ENV === 'development' && console.log('CONNECTED TO DB')
        } catch (error) {
            process.env.NODE_ENV === 'development' && console.log(error)
            return error
        }
        const app = new App([new AuthController()])
        app.listen(PORT)
    }
)()