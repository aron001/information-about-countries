import React from "react";
import { useState, useEffect } from "react";
import AllCountrys from "./AllCountrys";

function Home() {

  const [countriesdata, setCountriesdata] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

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



   async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      if (data.length>0) {
        setSearchResult(data);   
        setError(null);
      } else {
        setSearchResult([]);
        setError('No search results found');
      }
         

    } catch (error) {
      setSearchResult([]);
      console.error(error);
      setError('Error: Name not found');    }
  }

   function handleFilterByRegion(e) {
    e.preventDefault();
    filterByRegion();
  }

    function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  const countriesToDisplay = searchResult.length > 0 ? searchResult : countriesdata;

  return (
    <>




      {!countriesdata ? (
        <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
          Loading...
        </h1>
      ) : (
        <section className="container mx-auto p-8">
 <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
           
             <form
              onSubmit={handleSearchCountry}
              autoComplete="off"
              className="max-w-4xl md:flex-1"
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a country by its name"
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="py-3 px-4 text-gray-600 placeholder-gray-600 w-full shadow rounded outline-none  transition-all duration-200"
              />
            </form>

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

    
        <>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">         

            {error && <p>{error}</p>}
      
    

      {countriesToDisplay.map((country) => (
        <AllCountrys key={country.name.common} {...country} />
      ))}

          </div>
          
          </>
          
        </section>
        
      )}
    </>
  );
}

export default Home;
