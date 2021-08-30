import React from 'react';
import { NavLink } from 'react-router-dom';
import spqr from '../src/images/spqr.jpg'
import "./Main.css"
const Common =(props) =>{
    return (
    <>
    <section id ="header" className="d-flex allign-items-center">
      <div className="container-fluid nav_bg">
        <div className='row'>
            <div className="col-10 ms-auto">
                <div className='row'>                
                <div className="col-md-7 pt-5 pt-lg-0 order-5 d-flex justify-content-center flex-column" >
                <h1>
                    {props.name} 
                </h1>

                </div>
                </div>
                        <div>
                            <img alt="spqr" className="img-fluid animated" src={props.imgsrc}  />
                        </div>
                        <div className='row'>
                        <div className="mt-3">
                    <NavLink class="btn btn-primary" to="props.visit" role="button">CARPE DIEM</NavLink>
                </div>
            </div>
          </div>            
        </div>
   </div>
   </section>    
    </>
    );
};
export default Common;