import React from 'react';


const VideoList = (props) => {
//   console.log(props.allBeers)
//   console.log(props)

//   let beerName = props.match.params.beerName;
//   let allBeers = props.allBeers;


  const showVids = () =>{

    let links = props.links 
    return links.map( eachVid =>{
        return (
            <div className="card" id="video-card">
            <div key={eachVid.id.videoId}>
                <h2 id="video-links">
                    {eachVid.snippet.title}
                </h2>
                {/* <h4>{eachVid.snippet.description}</h4> */}
               <a href={'https://www.youtube.com/watch?v=' + eachVid.id.videoId}> <img id="video_thumb" src={eachVid.snippet.thumbnails.medium.url} alt="the Vid"/> </a>
            </div>
            </div>
        )
    })
    }

 
// if(props.ready) 
  return (<div>{showVids()} </div>)
// else 
//   return(<div>Loading...</div>)  

};

export default VideoList;
 
