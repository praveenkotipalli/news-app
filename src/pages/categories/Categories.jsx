import React from 'react'
import Spinner from '../../components/spinner/Spinner';
import styles from  "./Categories.module.css"
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import NewsCard from '../../components/newsCard/NewsCard';
const Categories = () => {
    const [news,setNews]=useState([]);
    const [filter,setFilter]=useState("");
    const [loading,setLoading]=useState(false);


    const {state} =useLocation();
    console.log(state.category);

    const apiKey=process.env.REACT_APP_API_KEY;
    const url=`https://newsapi.org/v2/top-headlines?country=us&category=${state.category}&apiKey=${apiKey}`;
    const filterUrl=`https://newsapi.org/v2/top-headlines?country=${filter}&category=${state.category}&apiKey=${apiKey}`;

    const handleSubmit=(e)=>{
        e.preventDefault();
        getNews(filterUrl);
        setFilter("");
    };



    const getNews=async(url)=>{
        setLoading(true);
        try {
            const {data} =await axios(url);
            setNews(data.articles);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    
    useEffect(() => {
        getNews(url);
      }, [url]);
    //   console.log("NEWS",news)
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <form onSubmit={handleSubmit} className={styles.form} aria-valuemax={filter} onChange={(e)=>setFilter(e.target.value)}>
                <input type='text' placeholder='ex:us,tr,jp,mx..'/>
                <button type='submit'>Filter Country</button>
            </form>
        </div>
        <div className={styles.right}>
            {loading && <Spinner />}
            {news.map((item,index)=>(
                <NewsCard key={index} {...item}/>
            ))}
        </div>
    </div>
  )
}

export default Categories