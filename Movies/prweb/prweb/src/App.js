import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/navbar.js";
import Header from "./Components/Header";
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
    </>
  );
}

export default App;
