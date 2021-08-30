import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Main from './Main';
import  History  from './History';
import Warriors from './Warriors';
import Jobs from './Jobs'
import  Connect from './Connect';
import { Switch,Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const App =() =>{
    return (
   <>
   
    <Navbar />                    
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/History" component={History} />
            <Route exact path="/Jobs" component={Jobs} />
            <Route exact path="/Warriors" component={Warriors} />
            <Route exact path="/Connect" component={    Connect } />

            <Redirect to="/" /> 

            
            <Main />
        </Switch>
        <Footer />
    </>
    );
};
export default App;
