import { Types } from "mongoose"

/** TYPES */
export type ID = Types.ObjectId | string



/** INTERFACES */
export interface IDBResponse {
    statusCode: number;
    message: string;
}

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface IRepository<T> {
    all(): Promise<T[]>;
    find(): Promise<T>;
    create(data: T): Promise<T>;
    delete(data: T): Promise<T>;
}