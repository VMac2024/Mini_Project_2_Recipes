import { useState } from "react";

import "./App.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
