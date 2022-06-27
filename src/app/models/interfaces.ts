
export interface Document {
    id: number;
    filename: string;
    format: string;
    date: Date;
    user: number;
}

export interface User {
    id: number;
    name: string;
    surname: string;
    idnumber: string;
    dateOfBirth: Date
}