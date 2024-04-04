import ReactDOM from "react-dom/client";
import MHC2 from "./components/Navbar";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

function render() {
  root.render(
    <main>
      <MHC2 />      
    </main>
  );
}

render();
