import React from "react";
import styles from "../styles";

const AllCountrys = ({flags,name}) => {
  
  return (
    <div
      className={`w-full block bg-white rounded-lg  "unset" : "mb-12"} lg:block p-2
      `} 
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src={flags.svg} className="md:h-72 w-full object-cover"/>
      </div>

      <h2 className={`${styles.productTitle}`}> {name.common}</h2>

        
        
        
      </div>
    
  );
};

export default AllCountrys;