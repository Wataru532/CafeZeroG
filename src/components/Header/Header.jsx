import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

// ページパスを管理するオブジェクト
const pages = {
    Home: "/",
    Menu: "/menu",
    SolarSystem: "/solarsystem"
};

export const Header = () => {
    return (
        <div className={styles.bg}>
            <span className={styles.title}>Café Zero-G</span>
            <Button page="Home" />
            <Button page="Menu" /> 
            <Button page="SolarSystem" />
        </div>
    );
};

// Buttonコンポーネントを修正
export const Button = ({ page }) => { // pageを分割代入で受け取る
    const navigate = useNavigate(); // ここでuseNavigateを呼び出す

    // クリックハンドラー
    const handleTransition = () => {
        const path = pages[page]; // pagesオブジェクトから対応するパスを取得
        if (path) {
            navigate(path); // 取得したパスに遷移
        } else {
            console.warn(`Path for "${page}" not found in pages object.`);
        }
    };

    return (
        <div>
            <span className={styles.button_bg}>
                {/* onClickには関数を渡す */}
                <span className={styles.button_txt} onClick={handleTransition}>{page}</span>
            </span>
        </div>
    );
};