import styles from "./Home.module.css";
import { Header } from "../../components/Header/Header";
import Starfield from "../../components/Starfield";

export const Home = () => {
    return (
        <div>
            <Header />
            <Starfield />
            
        </div>
    )
}