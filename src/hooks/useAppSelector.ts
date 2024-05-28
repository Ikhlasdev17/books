import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { TypeRootState } from '../store'

const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector

export default useAppSelector
