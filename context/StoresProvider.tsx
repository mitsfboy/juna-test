import { useState, useEffect, createContext, ReactNode } from 'react'
import { Store } from '@/types/Store'
import axios from 'axios'

type StoreContext = {
  stores: Store[]
  filteredStores: Store[]
  especialidadActive: string
  handleFilterChange: (especialidad: string) => void
}

export const StoresContext = createContext<StoreContext>({
  stores: [],
  filteredStores: [],
  especialidadActive: 'todos',
  handleFilterChange: () => {},
})

type StoresProviderProps = {
  children: ReactNode
}

export function StoresProvider({ children }: StoresProviderProps) {
  const [stores, setStores] = useState<Store[]>([])
  const [especialidadActive, setEspecialidadActive] = useState<string>('todos')

  const fetchStores = async () => {
    try {
      const { data } = await axios('/api/stores')
      setStores(data)
    } catch (error) {
      console.log('Error fetching stores: ', error)
    }
  }

  useEffect(() => {
    fetchStores()
  }, [])

  const handleFilterChange = (especialidad: string) => {
    setEspecialidadActive(especialidad)
  }

  const filteredStores = stores.filter(store => {
    if (especialidadActive === 'todos') return true
    return store.especialidad === especialidadActive
  })

  return (
    <StoresContext.Provider
      value={{
        stores,
        filteredStores,
        especialidadActive,
        handleFilterChange,
      }}
    >
      {children}
    </StoresContext.Provider>
  )
}
