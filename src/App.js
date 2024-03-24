import "./App.css";
import { Navbar } from "./Component/Navbar";
import { MainRoutes } from "./Component/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
