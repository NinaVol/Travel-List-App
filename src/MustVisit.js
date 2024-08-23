import { data } from './data';
import { useState } from 'react';
import './App.css';

function MustVisit() {
 const [selectedPlaces, setSelectedPlaces] = useState(data);

 const removeItem = (id) => {
        let newItem = selectedPlaces.filter(item => item.id !== id)
        setSelectedPlaces(newItem)
      }


   return(
    <div>
    <div className='container'>
      <h1>You have chosen {selectedPlaces.length} places:</h1>
    </div>
    <div className='container'>
      <p>Remove places you don`t plan to go to.</p>
    </div>


    <div className='wrapper'>
    
    {selectedPlaces.map((item => {
      const {id, placeName, image} = item;
      return(
        <div key={id}>
          <div className='container'>
            <h3>{id} {placeName}</h3>
          </div>
          <div className='container'>
            <img src={image} alt='place' width='250'/>
          </div>
          <div className='container'>
            <button className='click remove' onClick={() => removeItem(id)}>Remove</button>
          </div>
        </div>
      )
    }))}
    </div>

    </div>
   )

}

export default MustVisit;