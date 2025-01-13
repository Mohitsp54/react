import React from 'react';
import './App.css'

// export const App = ()=>{
//   return (
//   <>
//   <NetflixSeries />
//   <NetflixSeries />
//   <NetflixSeries />
//   <NetflixSeries />
//   <NetflixSeries />
//   </>)
// };
// or
export const App = ()=>{
  return (
  <React.Fragment>
  <NetflixSeries />
  <NetflixSeries />
  <NetflixSeries />
  <NetflixSeries />
  <NetflixSeries />
  </React.Fragment>)
};

const NetflixSeries = () =>{
  const name = "Queen of Tears";
  const rating = 8.5;
  const summary = "Nice Movie";
  const returnGenre = () =>{
    const genre = "Romcom";
    return genre;
  };
  let age =14;
  // if(age < 18){
  //   return (
  //     <div>
  //     <div>
  //       <img src="netflix.jpg" alt ="heroSection.svg" 
  //       width="40%" height="40%"/>
  //     </div>
  //     <h2>Name: {name}</h2>
  //     <h3>Rating:{rating}</h3>
  //     <p>summary:{summary}</p>
  //     <p>Genre:{returnGenre()}</p>
  //     <button>Not Available</button>
  //   </div> 
  //   )
  // }

  return (
    <div>
      <div>
        <img src="netflix.jpg" alt ="heroSection.svg" 
        width="40%" height="40%"/>
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating:{rating}</h3>
      <p>summary:{summary}</p>
      <p>Genre:{returnGenre()}</p>
      <button>{age >= 18?"Watch Now":"Not Available"}</button>
    </div>);
};

