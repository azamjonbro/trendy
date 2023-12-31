import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import Router from "./Router.jsx";
import { Oval } from "react-loader-spinner";
import Allert from './components/alert'
import Error from './components/error'
function App() {
  const { t } = useTranslation();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 8000);
  }, []);
  return (
    <>
      {load ? (
        <div className="loading">
          <div className="loading-card">
          <Oval
            height={300}
            width={300}
            color="#fff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#0567FA"
            strokeWidth={1}
            strokeWidthSecondary={0}
            
            
          />
          <h2 className='load-txt'>TRENDY</h2>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Router/>}/>
          <Route path="/*" element={<Error/>}/>
          <Route path="/shop" element={<Allert/>}/>


        </Routes>

        )}
    </>
  );
}

export default App;
