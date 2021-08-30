import React from 'react';
import { NavLink } from 'react-router-dom';
import rm from '../src/images/rm.jpg'
import "./Main.css"
const Main =() =>{
    return (
    <>
    <section id ="header" className="d-flex allign-items-center">
      <div className="container-fluid nav_bg">
        <div className='row'>
            <div className="col-10 ms-auto">
                <div className='row'>                
                <div className="col-md-10 pt-5 pt-lg-0 order-5 d-flex justify-content-center flex-column" >
                <h1>
                 <strong className="brand-name" className="text-center">Senatus Populusque Romanus</strong>
                </h1>
                <div className="mt-3">
                    <NavLink class="btn btn-primary" to="/Jobs" role="button">Join us</NavLink>
                </div>
                </div>
                </div>
                        <div>
                            <img alt="spqr" className="img-fluid animated" src={rm} width="1000" />
                        </div>
            </div>
            
        </div>
   </div>
   </section>    
    </>
    );
};
export default Main;
