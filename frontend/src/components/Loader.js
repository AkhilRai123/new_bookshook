import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { useState,} from "react";
const Loader = () => {
  let [loading, setLoading] = useState(true);
  return (
    <div  style={{display: 'flex', justifyContent: 'center', marginTop: '150px'}}>
       <div className="sweet-loading ">
         <HashLoader
           color='#61dafb'
           loading={loading}
           cssOverride=''
           size={80}
           aria-label="Loading Spinner"
           data-testid="loader"
         />
       </div>
    </div>
  );
};

export default Loader;
