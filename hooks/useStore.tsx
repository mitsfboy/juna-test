import { useContext } from 'react'
import { StoresContext } from '@/context/StoresProvider'

export function useStores() {
  const storeContext = useContext(StoresContext)

  return storeContext
}
