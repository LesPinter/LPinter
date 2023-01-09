import styles from '../styles/Layout.module.css'
import axios from 'axios'
import Link from 'next/link'

const ListTitles = ( {columns} ) => {
  return (
    <div>
      {<h3>{columns.length} articles</h3>}
      <table>
        <tbody>
        { columns.map ( 
          (art) => 
          <tr key={art.ID} className={styles.rowHeight}>
            <td className={styles.p} style={{width: "170px"}}>
              <Link href={`/Column/${art.ID}`}>
                {art.Title}
              </Link>
            </td>
            <td className={styles.p}>
              <Link href={`/Column/${art.ID}`}>
                {art.subtitle}
              </Link>
            </td>
          </tr>
          ) 
        }
        </tbody>
      </table>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await axios.get("https://LPinter.com/Test/getColumns.aspx");
  return {
    props: { columns: data.data, }, revalidate: 3600
  };
};

export default ListTitles