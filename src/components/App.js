import React from "react";

import Main from './layout/main/Main';
import Header from './layout/header/Header';
import Nav from "./nav/Nav";
import Footer from './layout/footer/Footer';
import Loader from "./Loader/Loader";
import WeatherWidget from "./weatherWidget/WeatherWidget";

import {useAPIContext} from "../context/APIContext";

function App() {
  const { isLoading } = useAPIContext();

  if ( isLoading ) { return <Loader/> }

  return (
    <>
      <Header>
        <Nav/>
      </Header>
      <Main>
        <WeatherWidget/>
      </Main>
      <Footer/>
    </>
  );
}

export default App;
