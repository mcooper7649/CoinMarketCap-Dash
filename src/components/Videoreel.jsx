import React from 'react';


const Videoreel = (props) => {
//   console.log(props.allBeers)
//   console.log(props)

//   let beerName = props.match.params.beerName;
//   let allBeers = props.allBeers;

// console.log(props.btclinks[0])

  const showVids = () =>{
    
    let links = props.btclinks
    return links.map(eachVid =>{
        return (
        
            <div>
                <iframe width="420" height="315" title={eachVid.id.title}
                src={"https://www.youtube.com/embed/" + eachVid.id.videoId}>
                </iframe>
                {/* <a href={'https://www.youtube.com/watch?v=' + eachVid.id.videoId}> <img id="video_thumb" src={eachVid.snippet.thumbnails.default.url} alt="the Vid" /> </a> */}
            </div>
        );
    })
    }

 
// if(props.ready) 
  return (<div>{showVids()} </div>)
// else 
//   return(<div>Loading...</div>)  

};

export default Videoreel;