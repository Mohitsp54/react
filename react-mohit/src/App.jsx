// import NetflixSeries from "./components/NetflixSeries";
import React from 'react';
import './App.css'
import NetflixSeries,{ Footer,Header } from './components/NetflixSeries';

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
  <Header/>
  <NetflixSeries />
  <NetflixSeries />
  <NetflixSeries />
  <NetflixSeries />
  <NetflixSeries />
  <Footer/>
  </React.Fragment>)
};
