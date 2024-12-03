import { MainRoute } from "../../Route/MainRoute/MainRoute";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Menu } from "../Menu/Menu";
import "./MainLayout.css";

export function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header>
                <Header/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                <MainRoute/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
