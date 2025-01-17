import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () =>{
  return (
   <ul> 
    {seriesData.map((curElem)=>(
      <SeriesCard key={curElem.id} data={curElem}/>
   ))}
  </ul>);
};
  export default NetflixSeries;// default export can only be 1 in a file

  export const Header = ()=>{
    return <p>copyright @Netflix</p>;
  }

  export const Footer = ()=>{
    return <p>copyright @Netflix</p>;
  };