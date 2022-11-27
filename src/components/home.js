import { useContext } from "react";
import ThemeContext from "../context/theme";
import "../App.css"
// import styles  from "../styles/home.module.css"

import "../styles/home.scss";

const Home = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme == "light" ? "lightTheme": "darkTheme"}>
            <p className="para">This is home</p>
            <p className="para1">This is home</p>
            <p className="para2">This is home</p>
            <p className="para3">This is home</p>
            <div className="container">
                <p className="nested">This is nested Para</p>
                <p className="nested1">This is nested Para</p>
            </div>
        </div>
    )
}

export default Home;