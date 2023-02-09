import express from 'express'
import dataSource from './config/ormconfig'
import cors from 'cors'

class App {
    public app: express.Application



    constructor() {
        this.app = express()

        this.connectToDatabase()
        this.initializeMiddlewares()
    }

    public listen() {
        this.app.listen(9000, () => {
            console.log('server running...')
        })
    }

    public getServer() {
        return this.app
    }

    private initializeMiddlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    private async connectToDatabase() {
        try {
            const database = await dataSource.initialize()

            if (database) console.log("initialized database");

        } catch (error) {
            console.log(error);

        }
    }
}
export default App;