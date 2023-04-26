import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Head>
        <title>Whatsapp clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
    </div>
  )
}
