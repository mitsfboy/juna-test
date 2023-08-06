import Image from 'next/image'
import { Carousel } from '@material-tailwind/react'

const Promotions = () => {
  return (
    <div className="flex justify-center items-center">
      <Carousel
        className="rounded-xl overflow-hidden w-full mx-4 md:mx-16"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-10 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="h-[50vh] w-full relative">
          <Image
            src="https://res.cloudinary.com/dj4pfykc3/image/upload/v1691264592/1308389_nfatnu.jpg"
            alt="Imagen promocional de una tienda de comida rápida"
            fill
            objectFit='cover'
          />
        </div>
        <div className="h-[50vh] w-full relative">
          <Image
            src="https://res.cloudinary.com/dj4pfykc3/image/upload/v1691264661/276815_dtn7vo.jpg"
            alt="Imagen promocional de una tienda de comida rápida"
            fill
            objectFit='cover'
          />
        </div>
      </Carousel>
    </div>
  )
}

export default Promotions
