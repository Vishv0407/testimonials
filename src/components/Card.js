import React, { useState } from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const Card = (props) => {
    const reviews = props.reviews;

    const [index, setIndex] = useState(0);

    function prevBtnHandler(){
        if(index-1 < 0)
            setIndex(reviews.length - 1);
        else
            setIndex(index-1);
    }

    function nextBtnHandler(){
        if(index+1 >= reviews.length)
            setIndex(0);
        else
            setIndex(index+1);
    }

    function surpriseBtnHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    let review = props.reviews[index];

  return (
    <div className='card'>
        <div className='card-img'>
            <img src={review.image}></img>
        </div>
        <div className='card-name'>
            <p>{review.name}</p>
        </div>
        <div className='card-job'>
            <p>{review.job}</p>
        </div>
        <div className='card-quote'>
            <FaQuoteLeft />
        </div>
        
        <div className='card-text'>
            <p>{review.text}</p>
        </div>
        <div className='card-quote'>
            <FaQuoteRight />
        </div>

        <div className='arrow-button'>
            <GrLinkPrevious className='prev' onClick={prevBtnHandler}/>
            <GrLinkNext className='next'onClick={nextBtnHandler}/>
        </div>
        
        <div>
            <button className='surprise-btn' onClick={surpriseBtnHandler}>Surprise Me</button>
        </div>
    </div>
  )
}

export default Card