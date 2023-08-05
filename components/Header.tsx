import Head from 'next/head'

interface HeaderProps {
  title: string
  description: string
}

const Header= ({ title, description }: HeaderProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />
    </Head>
  )
}

export default Header
