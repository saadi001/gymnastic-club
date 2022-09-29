import React from 'react';
import '../../images/image1.jpg';

const Details = () => {
     return (
          <div className='details'>
               <div className='name-location'>
                    <img src="../../images/image1.jpg" alt="" />
                    <div>
                         <p>Md. Sheikh Saadi</p>
                         <p><small>chandpur, chittagong, Dhaka</small></p>
                    </div>

               </div>
          </div>
     );
};

export default Details;