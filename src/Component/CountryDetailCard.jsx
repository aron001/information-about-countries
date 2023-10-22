import React from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../styles";
function CountryDetailCard({ setOpen, flags, name, region,subregion,languages,continents,capital,population }) {
  return (
    /*<div>{name.common} 
    Region={region}
     </div>*/

    <div className="bg-[#fff]">
      {name ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />

            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img src={flags.svg} />
                <div className="flex">
                  <div>
                    <h3 className={`${styles.shop_name}`}>{name.common}</h3>
                  </div>
                </div>
              </div>

              <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {name.common}
                </h1>
                <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 ">
                  <li>Capital: {capital[0]}</li>
                  <li>Population: {population.toLocaleString()}</li>
                  <li>Region: {region}</li>
                  <li>Subregion: {subregion}</li>
                  <li>languages: {languages[0]}</li>


                </ul>


              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CountryDetailCard;
