import React, { useState } from "react";
import styles from "../styles";
import { AiOutlineEye } from "react-icons/ai";
import CountryDetailCard from "./CountryDetailCard";
import { Link } from "react-router-dom";

const AllCountrys = ({ flags, name, region,subregion,languages,continents,capital,population }) => {
  const [open, setOpen] = useState(false);

  return (

     
    <div
      className={`w-full block bg-white rounded-lg  "unset" : "mb-12"} lg:block p-2
      `}
    >
      <Link to={`/${name.common}`}>   
      <div className="w-full lg:-w[50%] m-auto">
        <img src={flags.svg} className="md:h-72 w-full object-cover" />
      </div>
      </Link>
      <div className="flex">
        <h2 className={`${styles.productTitle}`}> {name.common}</h2>
        <AiOutlineEye
          size={22}
          className="cursor-pointer absolute ml-72 sm:ml-auto xl:ml-72"
          onClick={() => setOpen(!open)}
          color="#333"
          title="Quick View"
        />
      </div>
     

      {open ? (
        <CountryDetailCard
          setOpen={setOpen}
          name={name}
          flags={flags}
          region={region}
          subregion={subregion}
          languages={languages}
          continents={continents}
          capital={capital}
          population={population}
        />
      ) : null}
    </div>
  
  );
};

export default AllCountrys;
