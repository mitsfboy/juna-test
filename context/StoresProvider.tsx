import { useState, useEffect, createContext, ReactNode } from 'react'
import axios from 'axios'
import { Store } from '@/types/Store'
import { StoreContext } from '@/types/StoreContext'

export const StoresContext = createContext<StoreContext>({
  stores: [],
  storesBySpecialty: [],
  obtenerEspecialidad: () => [],
})

type StoresProviderProps = {
  children: ReactNode
}

export function StoresProvider({ children }: StoresProviderProps) {
  const [stores, setStores] = useState<Store[]>([])
  const [storesBySpecialty, setStoresBySpecialty] = useState<Store[]>([])

  const fetchStores = async () => {
    try {
      const { data } = await axios('/api/stores')
      
      setStores(data)
      setStoresBySpecialty(data)
    } catch (error) {
      console.log('Error fetching stores: ', error)
    }
  }

  useEffect(() => {
    fetchStores()
  }, [])

  const obtenerEspecialidad = (especialidad: string) => {
    if (especialidad === 'todos') {
      setStoresBySpecialty(stores) 
    } else {
      const especialidadEncontrada = stores.filter(
        store => store.especialidad.toLowerCase() === especialidad
      )
      setStoresBySpecialty(especialidadEncontrada)
    }
  }
  
  return (
    <StoresContext.Provider
      value={{
        stores,
        storesBySpecialty,
        obtenerEspecialidad,
      }}
    >
      {children}
    </StoresContext.Provider>
  )
}
