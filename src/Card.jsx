import React from 'react'
import './Card.css'
import Data from './Data'


export default function Card(props) {
  return (
    <>
    <div className='container'>
        <div className='box'>
        <div className='content'>
            <img className='srcimage' src={props.banner} alt="banner"></img>
            <div className='text'>
            <p className='movie-category'>{props.category}</p>
            <p className='movie-name'>{props.title}</p>
            <p><a href={props.link} target="_blank"><button>Watch Now</button></a></p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
 