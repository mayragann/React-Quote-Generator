import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Quote from "./Components/Quote/Quote";
import "./App.css"
import { data } from "./Components/Data/Data";
import { characterData } from "./Components/Data/CharacterData";
import CharacterBios from "./Components/CharacterBios/CharacterBios";
import Header from "./Components/Header/Header";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const numberOfQuotes = 3;

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
    <div className="App">
        <Header />
      <div className="main">
        <div className="body">

        <h1>Quote Generator</h1>
        {isLoading ? <p>Quote now loading...</p> : <Quote data={quotes} />}
        <button onClick={randomise}>Generate Quote</button>
        <CharacterBios characterData={characterData} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
