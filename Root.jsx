import PropTypes from 'prop-types';
import React from 'react';
import {HashRouter,Switch,Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import A from "./A"
import B from "./B"
import FormC from "./containers/Form"
import Menu from "./components/Menu"



export default function Root ({
    store
}) {



    return (
        
        <Provider store={store}>

        <div className="appConitaner">


<Menu />

<div className="main">
<HashRouter>
            <Switch>
             <Route path='/Form' name="a" component={FormC}/>
            <Route path='/b' name="b" component={B}/> 

                 </Switch>
            </HashRouter>


</div>
           
        </div>
           
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object
};
