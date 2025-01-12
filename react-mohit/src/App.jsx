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
  return (
    <div>
      <div>
        <img src="netflix.jpg" alt ="heroSection.svg" 
        width="40%" height="40%"/>
      </div>
      <h2>Name: Queen of Tears</h2>
      <h3>Rating:8.5</h3>
      <p>summary:Nice Movie</p>
    </div>);
};

