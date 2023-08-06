/* eslint-disable no-unused-vars */
import { Store } from './Store'

export type StoreContext = {
  stores: Store[]
  storesBySpecialty: Store[]
  obtenerEspecialidad: (especialidad: string) => void
}


