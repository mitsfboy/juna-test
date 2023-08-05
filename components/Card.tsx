import Image from 'next/image'
import Link from 'next/link'
import { Location, MapIcon } from '@/components/Icons'
import { Store } from '@/types/Store'
import { FaInstagram } from 'react-icons/fa'

const Card = ({ store }: { store: Store }) => {
  const sliceDescription = (description: string) => {
    if (description.length > 90) {
      return description.slice(0, 90) + '...'
    }

    return description
  }

  const capitalizeFirstLetter = (string: string) => {
    return string.toLocaleLowerCase().replace(' ', '_')
  }

  const handleMapLink = (store: Store) => {
    const ciudad = capitalizeFirstLetter(store.ciudad)
    const comuna = capitalizeFirstLetter(store.comuna)

    return `https://www.google.com/maps/search/?api=1&query=${store.direccion}+${comuna}+${ciudad}`
  }

  const ciudadComuna = `${store.ciudad}, ${store.comuna}`

  return (
    <div
      className="my-2 px-6 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      key={store.nombre}
    >
      <article className="overflow-hidden rounded-lg shadow-md h-full">
        <aside className="relative">
          <Image
            className="w-full h-44 overflow-hidden rounded-t-2xl object-cover"
            src={store.imagen_tienda}
            alt={`Imagen default para la tienda ${store.nombre}`}
            width={400}
            height={200}
            priority
          />
          <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md mr-4 -mb-4 cursor-pointer hover:scale-110 hover:contrast-125 transform transition duration-300 ease-in-out">
            <Image
              className="h-14 w-14 object-cover rounded-full overflow-hidden"
              src={store.logo}
              alt={`Logo de la tienda ${store.nombre}`}
              width={70}
              height={70}
            />
          </div>
        </aside>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <div className="flex flex-col md:items-start">
            <Link href={`${store.url}`} passHref>
              <span className="no-underline hover:underline font-bold text-[#663300] text-2xl my-1 md:my-0">
                {store.nombre}
              </span>
            </Link>

            <div className="h-10 overflow-hidden text-sm text-[#333] mt-1">
              {sliceDescription(store.descripcion)}
            </div>
          </div>
        </header>

        <section className="flex justify-between p-3 md:p-4">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row text-sm text-[#333]">
              <Location />
              {ciudadComuna}
            </div>

            <div className="flex flex-row text-sm text-[#333] mt-3">
              <FaInstagram className="h-5 w-6 text-[#7d5d3d] mr-2 flex-shrink-0" />
              <Link href={`${store.redes}`} passHref className="text-[#333] ">
                {capitalizeFirstLetter(store.nombre)}
              </Link>
            </div>

            <div className="flex flex-row text-sm text-[#333] mt-3">
              <MapIcon />
              {store.direccion}
            </div>
          </div>
        </section>

        <div className="flex items-center justify-end leading-none p-2 md:p-4">
          <button
            type="button"
            className="text-[#663300] font-bold mx-2 mt-auto"
            onClick={() => window.open(handleMapLink(store), '_blank')}
          >
            Ver en Google Maps
          </button>
        </div>
      </article>
    </div>
  )
}

export default Card
