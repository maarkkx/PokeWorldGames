export type User = {
	name: string,
	email: string,
	password: string
}

export type AuthResponse = {
    created: boolean;
    message?: string;
    user?: any;
}