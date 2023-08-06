import Layout from '@/layouts/layout'
import Card from '@/components/Card'
import Loader from '@/components/Loader'
import Promotions from '@/components/Promotions'
import { Store } from '@/types/Store'
import { useStores } from '@/hooks/useStore'
import Filters from '@/components/Filters'
import FiltersCity from '@/components/FiltersCity'

export default function Home() {
  const { stores, storesBySpecialty } = useStores()

  return (
    <Layout
      title="Dónde usar tu Juna"
      description="Aplicación web para buscar locales de Junaeb en todas las ciudades y comunas de Chile | Junaeb Locales | Junaeb Chile"
    >
      <Promotions />

      <FiltersCity />
      
      <Filters />

      {stores ? (
        <>
          <div className="container mx-auto px-4 w-full mt-10">
            <div className="flex flex-wrap -mx-1 lg:-mx-4 p-4 pb-16 gap-y-8">
              {storesBySpecialty.map((store: Store) => (
                <Card store={store} key={store.nombre} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  )
}
