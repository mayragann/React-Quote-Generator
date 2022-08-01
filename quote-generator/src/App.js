

import Footer from './Components/Footer/Footer';
import Quote from './Components/Quote/Quote';

function App() {
  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <Quote/>
      <button>Generate Quote</button>
      <Footer />
    </div>
  );
}

export default App;
