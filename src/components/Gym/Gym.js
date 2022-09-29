import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Equipment from '../Equipment/Equipment';
import Header from '../Header/Header';
import './Gym.css';

const Gym = () => {
     const [equipments, setEquipment] = useState([]);
     const [time, setTime] = useState([]);

     const addTime = (para) =>{
          const totalTime = [...time,para];
          setTime(totalTime);
          // console.log(totalTime);
     }

     useEffect(() =>{
          fetch('gym.json')
          .then(res => res.json())
          .then(data => setEquipment(data))

     },[])
     return (
          <div className='container'>
               <div className='left-side-container'>
                    <Header></Header>
                    <div className="accessories-container">
                         {
                              equipments.map( equipment => <Equipment 
                                   key={equipment.id}
                                   equipment={equipment}
                                   addTime ={addTime}

                                   ></Equipment>)
                         }
                    </div>
               </div>
               <div className="details-container">
                    <Details time={time}></Details>
               </div>
          </div>
     );
};

export default Gym;