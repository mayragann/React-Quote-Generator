import React, { useState, useEffect, createContext } from "react";

import Footer from "./Components/Footer/Footer";
import Quote from "./Components/Quote/Quote";
import "./App.css"
import { data } from "./Components/Data/Data";
import { characterData } from "./Components/Data/CharacterData";
import CharacterBios from "./Components/CharacterBios/CharacterBios";
import Header from "./Components/Header/Header";
import NavbarMobile from "./Components/NavbarMobile/NavbarMobile";

export const ThemeContext = createContext(null)

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const numberOfQuotes = 2;

  const [theme, setTheme] = useState("paragon");
  const handleChangeTheme = () => {
    setTheme((current)=>(current === "paragon" ? "renegade":"paragon"))
  }

  const randomise = () => {
    const tempData = [...data];
    const tempQuotes = [];
    for (let i = 0; i < numberOfQuotes; i++) {
      const randomNumber = Math.floor(Math.random() * tempData.length);
      tempQuotes.push(...tempData.splice(randomNumber, 1));
    }
    setQuotes(tempQuotes);
  };
  //math.floor makes it a whole number, and the equation above goes through the data at random
  useEffect(() => {
    randomise();
    setIsLoading(false);
  }, []);

 

  return (
    <ThemeContext.Provider value={{theme, handleChangeTheme}}>
      {/* needs to be in main-theme-comp for it to toggle */}
    <div className="main-theme-compo" id={theme}>

    <div className="App">
        <Header theme={theme} handleChangeTheme={handleChangeTheme}/>
        <NavbarMobile theme={theme} handleChangeTheme={handleChangeTheme}/>
      <div className="main">
        <div className="body">
          <div className="intro"> Generate Quotes From This Spectacular Universe</div>
        {isLoading ? <p>Quote now loading...</p> : <Quote data={quotes} />}
        <button className="myButton" onClick={randomise}>Generate Quote</button>
        <CharacterBios characterData={characterData} theme={theme} handleChangeTheme={handleChangeTheme} />
        </div>
        <Footer />
      </div>
    </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
