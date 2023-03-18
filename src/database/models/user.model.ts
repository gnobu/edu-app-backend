import { model, Schema } from 'mongoose'
import { IUser } from '../../types/db.interface'

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: {
        type: String,
        get: (): undefined => undefined,
        required: true
    },
}, {
    toJSON: { getters: true },
    timestamps: true
})

const User = model<IUser>('User', userSchema)
export default User