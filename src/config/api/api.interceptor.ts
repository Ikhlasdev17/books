import axios from 'axios'
export const baseUrl = import.meta.env.VITE_BASEURL

const apiClient = axios.create({
	baseURL: baseUrl,
})

apiClient.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

apiClient.interceptors.response.use(
	response => {
		return response
	},
	error => {
		return Promise.reject(error)
	}
)

export default apiClient
