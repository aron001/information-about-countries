import React from "react";
import { useState, useEffect } from "react";
import AllCountrys from "./AllCountrys";

function Home() {

  const [countriesdata, setCountriesdata] = useState([]);
  const [searchText, setSearchText] = useState("");


  const regions = [
    
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
  ];

  useEffect(() => {
    const getCountriesinfo = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountriesdata(data.slice(25, 49));
      } catch (error) {
        console.error(error);
      }
    };

    getCountriesinfo();
  }, []);


    async function filterByRegion(region) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountriesdata(data);
    } catch (error) {
      console.error(error);
    }
  }

   function handleFilterByRegion(e) {
    e.preventDefault();
    filterByRegion();
  }
  return (
    <>




      {!countriesdata ? (
        <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
          Loading...
        </h1>
      ) : (
        <section className="container mx-auto p-8">
 <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
           

            <form onSubmit={handleFilterByRegion}>
              <select
                name="filter-by-region"
                id="filter-by-region"
                className="w-52 py-3 px-4 outline-none shadow rounded text-gray-600 "
                value={regions.name}
                onChange={(e) => filterByRegion(e.target.value)}
              >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {countriesdata.map((country) => (
              <AllCountrys key={country.name.common} {...country} />
            ))}
          </div>
          
        </section>
        
      )}
    </>
  );
}

export default Home;
