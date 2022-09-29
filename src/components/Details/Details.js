import React from 'react';
import img from '../../images/image1.jpg';
import './Details.css';

const Details = ({time}) => {
     console.log(time);
          let totalTime = 0;
          for(const exerciseTime of time){
               totalTime = totalTime + exerciseTime;
          }
     
     return (
          <div className='details'>
               <div className='name-location'>
                    <img src={img} alt="" />
                    <div className='name'>
                         <h4>Md. Sheikh Saadi</h4>
                         <p><small>chandpur, chittagong, Dhaka</small></p>
                    </div>

               </div>

               <div className='personal-information'>
                    <div>
                         <p>75kg</p>
                         <p>Weight</p>
                    </div>
                    <div>
                         <p>6.5</p>
                         <p>Height</p>
                    </div>
                    <div>
                         <p>25yrs</p>
                         <p>Age</p>
                    </div>
               </div>

               <h3>Add A Break</h3>

               <div className='time'>
                    <div className='single-time'><span id=''>10</span> s</div>
                    <div className='single-time'>20s</div>
                    <div className='single-time'>30s</div>
                    <div className='single-time'>40s</div>
               </div>

               <h3>Exercise Details</h3>

               <div className='ex-time'>
                    <h5>Exercise time</h5>
                    <p>{totalTime} seconds</p>
               </div>
               <div className='ex-time'>
                    <h5>Break time</h5>
                    <p>00 seconds</p>
               </div>

               <button>Activity completed</button>



          </div>
     );
};

export default Details;