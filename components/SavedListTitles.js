import axios from 'axios'
import Link from 'next/link'
import { useState, useEffect } from 'react'

function ListTitles() {

  const [ articles, setArticles ] = useState ( [] )

  useEffect( () => {
    const fetchcols = async () => {
    const response = await axios.get("http://LPinter.com/Test/getColumns.aspx");
    const theData  = await response.data;
    setArticles(theData);
    };
    fetchcols();
  }, []);

  return (
    <div>
      {<h3>{articles.length} articles</h3>}
      <table>
        <tbody>
        { articles.map ( (art) => 
          <tr key={art.ID}>
            <td style={{width: "170px"}}>
              <Link href={`./column/${art.ID}`}>
                {art.Title}
              </Link>
            </td>
            {/* , fontStyle: "italic" */}
            <td style={{fontSize: "7pt", color:"black"}}>{art.subtitle}</td>
          </tr>
          ) 
        }
        </tbody>
      </table>
    </div>
  )
}

// export async function getStaticProps() {
//   useEffect( () => {
//     const fetchcols = async () => {
//     const response = await axios.get("http://LPinter.com/Test/getColumns.aspx");
//     const theData  = await response.data;
//     setArticles(theData);
//     };
//     fetchcols();
//   }, []);
//   return (
//     { props: { articles: articles }, revalidate: 3600 }
//   );
// }

export default ListTitles