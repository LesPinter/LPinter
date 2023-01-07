import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Layout.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Head>
        <title>Les Pinter OpEd Columns</title>
        <meta name="description" content="Les Pinter's OpEd columns" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className={styles.grid}>
        </div>

      </main>

    </>
  )
}
