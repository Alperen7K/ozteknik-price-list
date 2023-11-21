/*
 * * Written by Mehmet Alperen Yedik <mehmetalperenyedik@gmail.com>, October 2023
 */
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/price/1");
  }, []);
  return <div>Home</div>;
};
