import useSWR from 'swr'
import Layout from '@/layouts/layout'
import Card from '@/components/Card'
import Loader from '@/components/Loader'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Store } from '@/types/Store'
import { useStores } from '@/hooks/useStore'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Home() {
  const { data: stores, error } = useSWR('/api/stores', fetcher)
  const { filteredStores } = useStores()

  const storesToRender = filteredStores.length > 0 ? filteredStores : stores

  if (error) return <div>failed to load</div>

  return (
    <Layout
      title="Dónde usar tu Juna"
      description="Aplicación web para buscar locales de Junaeb en todas las ciudades y comunas de Chile | Junaeb Locales | Junaeb Chile"
    >
      {stores ? (
        <>
          <NavBar />

          <div className="container mx-auto px-4 w-full mt-10">
            <div className="flex flex-wrap -mx-1 lg:-mx-4 p-4 pb-16 gap-y-8">
              {storesToRender.map((store: Store) => (
                <Card store={store} key={store.nombre} />
              ))}
            </div>
          </div>

          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  )
}
