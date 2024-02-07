import Banner from "./components/Banner";
import Details from "./components/Details";
import Details2 from "./components/Details2";
import Footer from "./components/Footer";
import Places from "./components/Places";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <Details />
      <Places />
      <Details2 />
      <Footer />
    </div>
  );
}

export default App;
