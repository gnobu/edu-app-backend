import mongoose from 'mongoose'

const { MONGO_URI, MONGO_PASSWORD } = process.env

export interface IDatabase {
    connect: () => Promise<void>
}

class Database implements IDatabase {
    private db_uri: string
    constructor() {
        this.db_uri = MONGO_URI!.replace(/\<password\>/ig, encodeURIComponent(MONGO_PASSWORD!))
    }
    async connect() {
        await mongoose.connect(this.db_uri)
    }
}

export default Database