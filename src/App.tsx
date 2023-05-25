import "./App.css";

import AllRoutes from "./Routes";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AllRoutes />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "black", color: "white" }}
      />
    </>
  );
}

export default App;
