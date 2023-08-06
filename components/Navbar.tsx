import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Image
          src="https://res.cloudinary.com/dj4pfykc3/image/upload/v1691205071/zyro-image-PhotoRoom.png-PhotoRoom_tdtlhb.png"
          alt="Logo"
          className="w-240 h-240"
          width={140}
          height={140}
        />
      </div>

      <div className="flex space-x-4">
        <Link href="/" className="text-[#663300]">
          Inicio
        </Link>
        <Link href="/about" className="text-[#663300]">
          Acerca
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
