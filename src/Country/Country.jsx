import { useState } from "react";
import "./Country.css"
const Country = ({country,handlecountryvisited,handlevisitedflag}) => {
    

    const [visited,setVisited] =useState (false)

    // console.log(handlecountryvisited);
//  console.log(country.area.area);

    const handleClick2 = () =>{
        // console.log("btn click");
        // basic system
    //    if(visited){
    //     setVisited(false)
    //    }else{
    //     setVisited(true)
    //    }
        // second system ternary
    // setVisited(visited ? false : true);
        // third system ternary
    setVisited(!visited)
     handlecountryvisited(country);

    }
    

    return (
        <div className= {`country ${visited && 'countries-visited' }`}>

        {/* // <div className={`country border-lg text-center ${visited ? 'countries-visited' : 'countries-not-visited'}`}>     */}
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h2>name: {country.name.common}</h2>
            <p>population: {country.population.population}</p>
            <p>capital: {country.capital.capital}</p>
            <p>languages: {country.languages.languages.eng} </p>
            <p>area:{country.area.area} 
            {country.area.area> 300000 ? "big Country" :"small Country"} </p>
            <button onClick={handleClick2}>
                {visited ? "visited" : "not visited"}
            </button>
      <button onClick={() => {handlevisitedflag (country?.flags?.flags?.png)}}
      >Add visited Flag</button>
        </div>
    );
};

export default Country;