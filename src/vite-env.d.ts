/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BASEURL: string
	readonly VITE_SECRETKEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
