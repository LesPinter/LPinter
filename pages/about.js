import styles from '../styles/Layout.module.css'
import Link from 'next/link'

function About() {
  return (
    <div style={{margin: '10px'}}>
      
      <p className={styles.p}>
      Les Pinter has been writing OpEd columns for over 30 years. The current collection comes from the Editorial Page of the Porterville Recorder, published in Porterville, California, a town of 80,000 located on the western slopes of the Sierra Nevada a hundred and fifty miles north of Los Angeles.</p>
      
      <p className={styles.p}>Most of my columns are about politics. The Republican Party and its enablers try to make their supporters angry enough to vote by telling them lies. I hope to make you angry enough to vote by telling you facts.</p>
      <p className={styles.p}>If you hear something that sounds suspicious, go to <Link href="http://Politifact.com">Politifact.com</Link> and find out if it's true. You owe it to yourself and to your country.</p>

      <p style={{height: "50px"}}>&nbsp;</p>

      <table>
      <tbody>
        <tr>
          <td style={{width: "150px"}}>
            <img src="./assets/Les1965.jpg" alt="Les in college" width={140} height={170} />
          </td>
          <td style={{width: "150px"}}>
            <img src="./assets/LesNow.jpg"  alt="Les today" width={120} height={170} />
          </td>
        </tr>
        <tr>
          <td>
            <p className={styles.p}>Les in 1965</p>
          </td>
          <td>
            <p className={styles.p}>Les Today</p>
          </td>
        </tr>
      </tbody>
    </table>


    </div>

  )
}

export default About