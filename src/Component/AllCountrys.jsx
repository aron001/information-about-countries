import React ,{useState}  from "react";
import styles from "../styles";
import {
  AiOutlineEye,
  
} from "react-icons/ai";
import CountryDetailCard from "./CountryDetailCard";
const AllCountrys = ({flags,name}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full block bg-white rounded-lg  "unset" : "mb-12"} lg:block p-2
      `} 
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src={flags.svg} className="md:h-72 w-full object-cover"/>
      </div>
        <div className="flex">
      <h2 className={`${styles.productTitle}`}> {name.common}</h2>
      <AiOutlineEye
            size={22}
            className="cursor-pointer absolute ml-72 "
            onClick={() => setOpen(!open)}
            color="#333"
            title="detail"
          />
        </div>
        {open ? <CountryDetailCard setOpen={setOpen} />: null}
        
      </div>
    
  );
};

export default AllCountrys;