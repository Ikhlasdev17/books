export interface IUserSignUpData {
	name: string
	email: string
	key?: string
	secret?: string
}

export interface IAuthResponse {
	data: IAuthResponseData
	isOk: boolean
	message: string
}

export interface IAuthResponseData {
	email: string
	id: number
	key: string
	name: string
	secret: string
}
