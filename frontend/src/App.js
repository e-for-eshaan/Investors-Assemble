import "./App.css";
import Footer from "./components/homepage/Footer";
import Homepage1 from "./components/homepage/Homepage1";
import Homepage2 from "./components/homepage/Homepage2";
import Navbar from "./components/homepage/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage1 />
      <hr />
      <Homepage2 />
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
