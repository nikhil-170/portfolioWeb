import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/navbar.js";
import Header from "./Components/Header";
import AboutMe from "./Components/aboutMe";
import Services from "./Components/Services.js";
import Experience from "./Components/Experience.js";
import Portfolio from "./Components/Portfolio.js";

function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
      params = {{
        particles: {
          number:{
            value: 30,
            density: {
              enable: true,
              value_area : 900
            }
          },
          shape: {
            type: "square",
            stroke: {
              width: 6,
              color: "#7df9ff"
            }
          }
        }
      }

      }
      />
      <Navbar />
      <Header/>
      <AboutMe/>
      <Services/>
      <Experience/>
      <Portfolio/>
    </>
  );
}

export default App;
