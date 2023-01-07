import styles from '../styles/Layout.module.css'

function About() {
  return (
    <div style={{margin: '10px'}}>
      <h2 className={styles.h2}>About</h2>
      <p className={styles.p}>
        Les Pinter has been writing software since 1971, 
        and writing about software since 1989.
      </p>
    </div>
  )
}

export default About