import React, { Component } from 'react';
import {Link} from 'react-router-dom'


let coins = {
    mainLogo: "./coinlogo.png",
    btcLogo: "./btclogo.jpg",
    ethLogo: "./ethlogo.png",
    chainlinkLogo: "./linklogo.jpeg"
}

class Header extends Component {
    
   

    render() {
        return (
             
            
                <div className="div-logo">
                   <Link to="/"><img className="logo" src={coins.mainLogo}></img></Link>
                </div>
        );
    }
}


class Header1 extends Component {
    
   

    render() {
        return (
             
            
                <div className="div-logo">
                   <Link to="/bitcoin"><img className="logo" src={coins.btcLogo}></img></Link>
                   
                </div>
        );
    }
}

class Header2 extends Component {
    
   

    render() {
        return (
             
            
                <div className="div-logo">
                   <Link to="/ethereum"><img className="logo" src={coins.ethLogo}></img></Link>
                </div>
        );
    }
}

class Header3 extends Component {
    
   

    render() {
        return (
             
            
                <div className="div-logo">
                   <Link to="/chainlink"><img className="logo" src={coins.chainlinkLogo}></img></Link>
                </div>
        );
    }
}
export {Header, Header1, Header2, Header3}