import { IUser, ID, IDBResponse } from "../types/db.interface"

export interface IAuthService {
    authenticate(email: string): Promise<IUser>;
    createUser(userDetails: IUser): Promise<IUser>;
    deleteUser(userId: ID): Promise<IDBResponse>;
    findUserByEmail(email: string): Promise<IUser | null>;
    findUserById(id: string): Promise<IUser | null>;
    getAdminMail(): Promise<string>;
    getAllUsers(): Promise<IUser[]>;
    updateAvatar(userId: ID, avatar: string): Promise<IDBResponse>;
    updatePassword(userId: ID, password: string): Promise<void>;
    verifyUser(userId: ID): Promise<IDBResponse>;
}