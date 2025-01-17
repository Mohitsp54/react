// import NetflixSeries from "./components/NetflixSeries";
import React from 'react';
import './App.css'
import NetflixSeries from './components/NetflixSeries';
import "./components/Netflix.css";

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
  <section className='container'>
  <h1 className='card-heading'>List of Best Netflix Series</h1>
  <NetflixSeries />
  </section>)
};
