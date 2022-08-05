import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Quote from "./Components/Quote/Quote";
import TestHookCounter from "./Components/TestHookCounter/TestHookCounter";
import UpdateTitle from "./Components/UpdateTitle/UpdateTitle";
import { data } from "./Components/Data/Data";

function App() {
  const [quote, setQuote] = useState(data[1]);
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
      {/* <UpdateTitle /> */}
      <h1>Quote Generator</h1>
      {isLoading ? <p>Quote now loading...</p> : <Quote data={quote} />}
      <button onClick={randomise}>Generate Quote</button>
      {/* <TestHookCounter /> */}
      <Footer />
    </div>
  );
}

export default App;
