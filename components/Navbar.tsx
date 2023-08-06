import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center py-14">
      <div className="flex items-center">
        <Image
          src="https://res.cloudinary.com/dj4pfykc3/image/upload/v1691205071/zyro-image-PhotoRoom.png-PhotoRoom_tdtlhb.png"
          alt="Logo"
          width={240}
          height={200}
        />
      </div>
    </nav>
  )
}

export default Navbar
