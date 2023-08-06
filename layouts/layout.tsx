import { ReactNode } from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface LayoutProps {
  title: string
  description: string
  children: ReactNode
}

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <>
      <Header title={title} description={description} />

      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
