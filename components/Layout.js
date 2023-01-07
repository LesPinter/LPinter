import styles from '../styles/Layout.module.css'
import Link from 'next/link'

const Layout = ({children}) => {
  return ( <>
    {/* <div className = {styles.container}> */}
    <h1 className={styles.h1}>Les Pinter OpEd Columns</h1>
      <div>
        <nav className={styles.nav} >
          <Link href="/">
            <button className={styles.button} >Home</button>
          </Link>
          
          <Link href="/ListTitles">
            <button className={styles.button} >Columns</button>
          </Link>

          <Link href="/about">
            <button className={styles.button} >About</button>
          </Link>
        </nav>
        {children}
      </div>
    {/* </div> */}
  </> )
}

export default Layout