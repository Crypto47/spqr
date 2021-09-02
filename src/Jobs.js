import React from 'react';
import rm3 from "../src/images/rm3.jpg"
import rm4 from "../src/images/rm4.jpg"
import rm5 from "../src/images/rm5.jpg"
import rm6 from "../src/images/rm6.jpg"


const Contact =() =>{
    return (
        <>

<div className="ms-4">
<h1 className="text-center">JOIN US</h1>
</div>


       <div className="container-fluid mb-5">
        <div className='row '>
            <div className="col-max mx-auto">
                <div className="row gy-4">
                    <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
  <img class="card-img-top" src={rm3} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">JOIN THE SENATE</h5>
    <a href="#" class="btn btn-primary">Become a Roman Senator</a>
  </div>
</div>
                          <div class="card" >
  <img class="card-img-top" src={rm4} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">JOIN THE ROMAN LEGIONS</h5>
    <a href="#" class="btn btn-primary">Become a Praetorian Guard</a>
  </div>
</div>
                          <div class="card" >
  <img class="card-img-top" src={rm5} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">JOIN THE MINT</h5>
    <a href="#" class="btn btn-primary">Become a Roman Engraver</a>
  </div>
</div>

<div class="card" >
  <img class="card-img-top" src={rm6} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Join the Architecture Division</h5>
    <a href="#" class="btn btn-primary">Become a Professional Roman Architect</a>
  </div>
</div>
                        </div>
                </div>
            </div>
        </div>
   </div>       
        </>
    );
};
export default Contact;
