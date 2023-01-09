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

          <p className={styles.p}>This website contains the OpEd columns by Les Pinter published on Tuesdays in the Porterville Recorder during the past several years.</p>

          <p className={styles.p}>
            If you've never been to this website before, you might want to start with the column entitled "The Long Con", which lends perspective to our current political mess. 
          </p>

          <p className={styles.p}>
            And if you've been told that "both sides lie equally", after fact-checking everything I've read for the past two years, I make it about 100 to 1. So no, both sides don't lie equally.
          </p>

          <img 
            className={styles.mountains}
            src="./assets/Foothills.jpeg"  
            title="View out the front window"
            alt="View out the front window" />

        </div>

      </main>

    </>
  )
}
