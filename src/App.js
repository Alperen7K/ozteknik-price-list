import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { PriceContextProvider } from "./context";
import { Router } from "./router";

function App() {
  return (
    <PriceContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PriceContextProvider>
  );
}

export default App;
