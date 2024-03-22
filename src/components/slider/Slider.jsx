import React, { useState } from 'react'
import styles from "./Slider.module.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
const Slider = ({ sliderNews }) => {
    const [current,setCurrent]=useState(0);
    const length=sliderNews.length;
    const nextSlide = ()=>{
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(sliderNews) || length <=0) {
        return null;
    }
  return (
    <div className={styles.slider}>
        <FaArrowAltCircleRight className={styles.right} onClick={nextSlide}/>
        <FaArrowAltCircleLeft className={styles.left} onClick={prevSlide}/>
        
        {sliderNews.map((item,index)=>{
            return(
                <div key={index}>
                    {index === current && (
                        <div className={styles.container}>
                            <img src={item.urlToImage} alt='img' className={styles.image}/>
                            <h3>{item.title}</h3>
                            <div className={styles.link}>
                                <a href={item.url} target='_blank' rel='noreferror'>
                                    Detail
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default Slider