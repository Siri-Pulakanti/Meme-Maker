import "./App.css";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <h2>Meme Generator</h2>
      <Meme url="https://api.imgflip.com/get_memes" />
    </div>
  );
}

export default App;
