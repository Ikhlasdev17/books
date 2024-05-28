import CryptoJS from 'crypto-js'

export const getHashedHeaders = (
	method: string,
	url: string,
	body?: string
) => {
	const userSecretFromLS = localStorage.getItem('userSecret')
	const secretKeyForCrypto = import.meta.env.VITE_SECRETKEY
	const key = localStorage.getItem('userKey') as string

	const secretKetBytes = CryptoJS.AES.decrypt(
		userSecretFromLS as string,
		secretKeyForCrypto
	)
	const decryptedSecretKey = JSON.parse(
		secretKetBytes.toString(CryptoJS.enc.Utf8)
	)

	const signString = `${method}/${url}${body ? body : ''}${decryptedSecretKey}`

	const sign = CryptoJS.MD5(signString).toString()

	return {
		Key: key,
		Sign: sign,
	}
}
