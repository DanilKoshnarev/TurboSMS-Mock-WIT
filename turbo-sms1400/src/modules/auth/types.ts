export interface ILogin {
    email: string
    password: string
}

export interface IRegistration {
    email: string
    password: string
    confirmPassword: string
    username: string
}

export interface IPersonalInfo {
    firstName: string
    lastName: string
    avatar: string // base64 image string
    phoneNumber: string
}