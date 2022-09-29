import React from 'react';
import './Equipment.css';


const Equipment = (props) => {
     // console.log(props.equipment)
     const { img, name, description, age, time } = props.equipment;
     return (
          <div className='equipment-container'>
               <img src={img} alt="" />
               <h4>{name}</h4>
               <small>{description}</small>
               <p>For Age: {age}</p>
               <p>Time required: {time}</p>
               <button onClick={()=>props.addTime(time)}>Add to list</button>
          </div>
     );
};

export default Equipment;