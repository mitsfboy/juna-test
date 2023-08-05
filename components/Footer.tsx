import { Typography } from '@material-tailwind/react'
import Image from 'next/image'

const Footer = () => {
  const handleEmailLink = () => {
    const emailAddress = 'contact@example.com'
    const subject = 'Consulta sobre tu servicio'
    const body =
      'Hola,\n\nEstoy interesado en obtener más información sobre tus servicios. ¿Podrías proporcionarme más detalles?\n\nGracias.'
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <footer className="w-full h-100 bg-[#f1f1f1] p-6">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#f1f1f1] text-center md:justify-between">
        <Image
          src="https://res.cloudinary.com/dj4pfykc3/image/upload/v1691205071/zyro-image-PhotoRoom.png-PhotoRoom_tdtlhb.png"
          alt="logo-ct"
          className="w-60"
          width={240}
          height={240}
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              onClick={handleEmailLink}
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Ayudanos a Mejorar!
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-300" />
      <Typography color="blue-gray" className="text-center text-xs font-normal">
        &copy; by{' '}
        <a href="https://github.com/nachodev-ui" className="text-blue-500">
          nachodev-ui
        </a>{' '}
        and{' '}
        <a href="https://github.com/PatoSuar3z" className="text-blue-500">
          PatoSuar3z
        </a>
      </Typography>
    </footer>
  )
}

export default Footer
