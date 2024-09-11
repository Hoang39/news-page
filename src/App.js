import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  );
}

export default App;
