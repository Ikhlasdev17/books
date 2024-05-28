export interface ISearchResponse {
	data: IBook[]
	isOk: boolean
	message: string
}

export interface IBook {
	author: string
	cover: string
	isbn: string
	published: number
	title: string
}

export interface IFavroiteBooksResponse {
	data: IFavroiteBooksResponseData[]
	isOk: boolean
	message: string
}

export interface IFavroiteBooksResponseData {
	book: IFavBook
	status: number
}

export interface IFavBook extends IBook {
	id?: number
	pages?: number
}

export interface IAddFavBookResponse {
	data: IFavBook
	isOk: boolean
	message: string
}
