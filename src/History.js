import React from 'react';
import rm2 from '../src/images/rm2.jpg'
import rm from '../src/images/rm2.jpg'
import rm8 from '../src/images/rm2.jpg'
import rm9 from '../src/images/rm2.jpg'

import { NavLink } from 'react-router-dom';

const History =() =>{
    return (
    <>
    <section id ="header" className="d-flex allign-items-center">
      <div className="container-fluid nav_bg">
        <div className='row'>
            <div className="col-10 ms-auto">
                <div className='row'>                
                <div className="col-md-11 pt-5 pt-lg-0 order-5 d-flex justify-content-center flex-column" >
                <h1 className="text-center">
                    HISTORY OF THE ROME
                </h1>
                <div className="mt-3" className="texxt-center">
                    <NavLink class="btn btn-primary" to="/Jobs" role="button">Join us</NavLink>
                </div>
                </div>
                </div>
                        <div>
                            <img alt="abc" className="img-fluid animated" src={rm2} width="950" height="500" />
                        </div>
            </div>
            
        </div>
   </div>
   </section>    
   <h2 className="text-justify-content-center">
   Roman Republic (509–27 BCE)
   </h2>
   <p className="text-left">
   &ensp; The Roman Republic was a state that lasted from the overthrow of the last Roman king, Tarquin, in 509 BCE, to the establishment of the Roman Empire, in 27 BCE, when Octavian was given &ensp;the name Augustus and made princeps.The ancient state centred on the city of Rome that began in 509 BCE, when the Romans replaced their monarchy with elected magistrates, and lasted until 27 BCE, when the Roman Empire was established
   </p>
   <h2>
   The Roman Empire (27-286 AD)
   </h2>
   <p>
   &ensp;  It was the post-Republican period of ancient Rome. As a polity it included large territorial holdings around the Mediterranean Sea in Europe, Northern Africa, and Western Asia ruled by &ensp;emperors. From the accession of Caesar Augustus to the military anarchy of the 3rd century, it was a principate with Italy as metropole of the provinces and the city of Rome as sole capital (27 BC – AD 286)
   </p>
   <h2>
   Byzantine Empire (1453 AD)
   </h2>
   <p>
   &ensp; The Eastern Roman Empire or Byzantium, was the continuation of the Roman Empire in its eastern provinces during Late Antiquity and the Middle Ages, when its capital city was Constantinople. It survived the fragmentation and fall of the Western Roman Empire in the 5th century and continued to exist for an additional thousand years until it fell to the Ottoman Empire in 1453. During most of its existence, the empire was the most powerful economic, cultural, and military force in Europe.
   </p>



    </>
    );
};
export default History;

