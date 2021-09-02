import React,{Component} from 'react';
import rm1 from '../src/images/rm1.jpg'
import "./index.css"
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import "./index.css";

<Helmet bodyAttributes={{style: 'background-color : #ff0000'}}/>

const Warriors =() =>{
    return (
    <>
    <section id ="header" className="d-flex allign-items-center">
      <div className="container-fluid nav_bg">
        <div className='row'>
            <div className="col-10 ms-auto">
                <div className='row'>                
                <div className="col-md-7 pt-5 pt-lg-0 order-5 d-flex justify-content-center flex-column" >
                <h1>
                    THE ROMAN ARMY
                </h1>
                <div className="mt-5">
                    <NavLink class="btn btn-primary" to="/Jobs" role="button">Join us</NavLink>
                </div>
                </div>
                </div>
                         <div>
                            <img alt="abc" className="img-fluid animated" src={rm1} width="950" height="850" />
                        </div>
            </div>
            
        </div>
   </div>

   </section> 
   <h2>
   &ensp;The Praetorian Guard
   </h2>
   <p>
   &ensp;The Praetorian Guard (Latin: Cohortes praetoriae) was a unit of the Imperial Roman army that served as personal bodyguards and intelligence agents for the Roman emperors. During the Roman Republic, the Praetorian Guard were an escort for high-rank political officials (senators and procurators) and were bodyguards for the senior officers of the Roman legions. In the year 27 BC, after Rome's transition from republic to empire, the first Emperor of Rome, Caesar Augustus, designated the Praetorians as his personal security escort. For three centuries, the guards of the Roman emperor also were known for their palace intrigues, by which influence upon imperial politics the Praetorians could overthrow an emperor, and then proclaim his successor as the new Caesar of Rome. In AD 312, Constantine the Great disbanded the cohortes praetoriae and destroyed their barracks at the Castra Praetoria.
   </p>
   <h2>
   &ensp;Equestris Legion
</h2>
       <p>
       &ensp;The Legio X Equestris or the 10th Mounted Legion was created by Julius Caesar in 61 BC during his governor days at Hispania Ulterior. Around the time when Caesar started his governing duties at Hispania, he realized he was one legion short in order to kick off his carefully planned campaign. That is when he formed the Equestris Legion, the first legion Caesar levied personally, and one that proved to be the most trustworthy. 
       </p>   
       <h2>
       &ensp; Augusta Legion</h2>
       <p>
       &ensp;Legio II Augusta, one can easily conclude that this famous legion got its cognomen from the legendary emperor of imperial Rome, Augustus himself.The legion was a formidable force in the Battle of Actium that took place in 31 BC.The Augusta held the Roman might in the brutal battles against the Durotriges and Dumnonii tribes under the leadership of Emperor Vespasian. The legion has also been noted to have helped build Hadrian’s Wall in 122 AD and Antonine Wall in 142 AD.
       </p> 
    </>
    );
};
export default Warriors;
