import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Quote from "./Components/Quote/Quote";

import { data } from "./Components/Data/Data";
import { characterData } from "./Components/Data/CharacterData"
import CharacterBios from "./Components/CharacterBios/CharacterBios";
import Header from "./Components/Header/Header";

function App() {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const randomise = () => {
    const randomNumber = Math.floor(Math.random() * data.length);
    setQuote(data[randomNumber]);
  };
  //math.floor makes it a whole number, and the equation above goes through the data at random
  useEffect(() => {
    randomise();
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>Quote Generator</h1>
      {isLoading ? <p>Quote now loading...</p> : <Quote data={quote} />}
      <button onClick={randomise}>Generate Quote</button>
      <CharacterBios characterData={characterData} />
      <Footer />
    </div>
  );
}

export default App;
