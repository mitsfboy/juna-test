import { ReactNode } from 'react'
import Header from '@/components/Header'

interface LayoutProps {
  title: string
  description: string
  children: ReactNode
}

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <>
      <Header title={title} description={description} />

      <main>{children}</main>
    </>
  )
}

export default Layout
