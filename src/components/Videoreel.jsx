import React from 'react';
import Header from './Header';
import {Switch, Link, Route} from 'react-router-dom'

const Videoreel = (props) => {
//   console.log(props.allBeers)
//   console.log(props)

//   let beerName = props.match.params.beerName;
//   let allBeers = props.allBeers;

console.log(props.btclinks[0])

  const showVids = () =>{

    let links = props.btclinks
    
    return links.map(eachVid  =>{
        return (
        
            

                <a href={'https://www.youtube.com/watch?v=' + eachVid.id.videoId}> <img id="video_thumb" src={eachVid.snippet.thumbnails.default.url} alt="the Vid" /> </a>
            
        );
    })
    }

 
// if(props.ready) 
  return (<div>{showVids()} </div>)
// else 
//   return(<div>Loading...</div>)  

};

export default Videoreel;