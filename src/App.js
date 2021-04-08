import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="Container">
      <div className="App">
        <Search defaultCity="London" />
      </div>
      <Footer />
    </div>
  );
}
