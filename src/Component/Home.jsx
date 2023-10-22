import React from "react";
import { useState, useEffect } from "react";
import AllCountrys from "./AllCountrys";
import { AiOutlineSearch,  AiOutlineHeart,AiOutlineShoppingCart } from "react-icons/ai";

function Home() {
  const [countriesdata, setCountriesdata] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  return (
    <>

<div className="w-[50%] relative align-middle mt-5 sticky top-0">
          <input
            type="text"
            placeholder="Search Product..."
            
            className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          />
          </div>


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
  );
}

export default Home;
