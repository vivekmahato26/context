import { useContext } from "react";
import ThemeContext from "../context/theme";

import styles from "../styles/product.module.css"
const Product = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme == "light" ? "lightTheme": "darkTheme"}>
            <p className={styles.para}>Product Page</p>
        </div>
    )
}

export default Product;