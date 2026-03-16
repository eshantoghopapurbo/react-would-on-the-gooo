import React, { use, useState } from 'react';
import Country from '../../Country/Country';
import './Countries.css'

const Countries = ({ Countriespromise}) => {
    const Countriesdata =use (Countriespromise);
    const countries =Countriesdata.countries;

    const [countryvisited, setCountryvisited ] =useState ([]);
    const [visitedFlags, setVisitedFlags] =useState ([]);
    // console.log(countries);
// console.log(countryvisited);

    const handlecountryvisited = (country) =>{
        console.log("handlecountryvisited click",country);

        const newvisited = [...countryvisited,country];
        setCountryvisited(newvisited);

    }

    const handlevisitedflag = (flags) =>{
        console.log('click btn visited flag',flags);
        const newvisitedflag =[...visitedFlags,flags];
        setVisitedFlags(newvisitedflag);
    }

    return (
        <div>
            <h2>In the countries:{countries.length}</h2>
            <h2>Total country visited: {countryvisited.length}  </h2>
            <h3>Total flags Visited: {visitedFlags.length}</h3>

           <ol>

            {
                countryvisited.map(country => <li
                 key={country.cca3.cca3}>
                   
                    {country.name.common}</li>) 
            }

           </ol>
           <div className='visited-flag-container'>
            {
                visitedFlags.map((flag,index ) => <img key={index} src={flag}  /> )  
            }
           </div>


            <div className='countries'>
                {
        countries.map(country => <Country key={country.cca3.cca3} country ={country}
            handlecountryvisited ={handlecountryvisited}
            handlevisitedflag = {handlevisitedflag}
        >
        
        </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;