import "./App.css";
import Search from "./Search";
import Overview from "./Overview";
import DetailedOverview from "./DetailedOverview";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="Container">
      <div className="App">
        <Search />
        <Overview />
        <DetailedOverview />
      </div>
      <Footer />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
