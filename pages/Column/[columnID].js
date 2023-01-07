import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import parse from 'html-react-parser'
import styles from '../../styles/Layout.module.css'

function ShowOne() {

  const [ article,  setArticle  ] = useState({});
  const [ title,    setTitle    ] = useState('');
  const [ subtitle, setsubTitle ] = useState('');
  const [ body,     setBody     ] = useState('');

  const router = useRouter();
  const { columnID } = router.query;

  useEffect( () => {
    const fetchcols = async () => {
    const s1 = `https://LPinter.com/Test/IncCounter.aspx?id=${columnID}` ;
    // Changed from "http"
    await axios.get(s1);
    const response = await axios.get(`https://LPinter.com/Test/getColumn.aspx?id=${columnID}`);
    // Changed from "http"
    const theData  = await response.data;
    setArticle  ( theData[0] );
    setTitle    ( theData[0].Title );
    setsubTitle ( theData[0].subtitle );
    setBody     ( parse(theData[0].Body) );
    };
    fetchcols();
  }, []);

  return (
  <div 
   style={{ margin: "10px",
           backgroundColor: "LightGray"}}>
    {/* <h4>{columnID}</h4> */}
    <p className={styles.h2}>{title}</p>
    <p className={styles.h3}>{subtitle}</p>
    <p className={styles.p}>{body}</p>
    <p className={styles.Sign30}>{""}</p>
  </div>)
}
export default ShowOne