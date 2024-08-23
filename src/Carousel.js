import { data } from './data';
import { useState } from 'react';
import './App.css';

function Carousel(){
    const [place, setPlace] = useState(0);
    const {id, placeName, description, image, source } = data[place];
    const [showText, setShowText] = useState(false);


    const previousPlace = () => {
        setPlace((place => {
          place --;
          if (place < 0) {
            return data.length - 1;
          }    
          return place;
        }))
      }
    
      const nextPlace = () => {
        setPlace((place => {
          place ++;
          if (place > data.length-1) {
            place = 0;
          };
          return place;
        }))
      }
    
      const showTextClick = () => {
        setShowText(showText => !showText);
      }


      return (
        <div>
          <div className='carousel'>
             <h1>Create your travel list!</h1>
          </div>    
          <div className='carousel' >
            <img src={image} alt='place' width='500'/>
          </div>
          <div className='carousel'>
            <h2>{id} {placeName}</h2>
          </div>
          <div className='carousel'>
            <p className='source'>{source}</p>
          </div>
          <div className='description carousel'>
            <p>{showText ? description : description.substring(0,80) + '...'}
              <button className='show' onClick={showTextClick}>{showText ? 'show less' : 'show more'}</button>
            </p>
          </div>
    
          <div className='btn carousel'>
          <button className='click' onClick={previousPlace}>Previous</button>
          <button className='click' onClick={nextPlace}>Next</button>
        </div>       
     
        </div>
      );



}

export default Carousel;