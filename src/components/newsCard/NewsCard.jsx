import React from 'react'
import styles from "./NewsCard.module.css"
import newslogo from "../../assets/news logo 1.jpg"
const NewsCard = ({title,author,url,urlToImage,content}) => {
  return (
    <div className={styles.card}>
        <img src={urlToImage? urlToImage : newslogo} alt='news-img'/>
        <div className={styles.cardDetail}>
            <h3>{title}</h3>
            <p>{content}</p>
            <div className={styles.a}>
                <a href={url} rel='noreferror' target='_blank' className={styles.link}>
                    Detail
                </a>
            </div>
        </div>
    </div>
  )
}

export default NewsCard