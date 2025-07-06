import { useState } from "react";

import "./App.css";
import GifSearch from "./components/GifSearch";
import GifList from "./components/GifList";

function App() {
  return (
    <>
      <GifSearch></GifSearch>
      <GifList query="car"></GifList>
    </>
  );
}

export default App;
