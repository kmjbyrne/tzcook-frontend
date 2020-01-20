export interface User {
    id: number;
    active: string;
    created: Date;
    username: string;
    forename: string;
    surname: string;
    password: string;
    admin: string;
    roles: any;
    lastLoggedIn: any;
}
