import React from 'react'
import { useState, useEffect } from "react";
import AllCountrys from './AllCountrys';
function Home() {

    const [countriesdata, setCountriesdata] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const getCountriesinfo = async () => {
          try {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            setCountriesdata(data.slice(25,49));
          } catch (error) {
            console.error(error);
          }
        };
    
        getCountriesinfo();
      }, []);

  return (
    
    <>
    {!countriesdata ? (
      <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
        Loading...
      </h1>
    ) : (
      <section className="container mx-auto p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {countriesdata.map((country) => (
            <AllCountrys key={country.name.common} {...country} />
          ))}
        </div>
      </section>
    )}
  </>
  )
}

export default Home