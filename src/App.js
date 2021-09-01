import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Munich" />
      </div>
      <footer className=" mt-3">
        <a
          href="xxxx"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <br></br> by Victoria
      </footer>
    </div>
  );
}

export default App;