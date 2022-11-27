import { useState } from 'react';
import './App.css';
import Home from './components/home';
import Product from './components/products';
import ThemeContext from "./context/theme";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>Change Theme</button>
      <ThemeContext.Provider value={theme}>
        <Home />
        <Product />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
