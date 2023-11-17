import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="header__container">
                    <Link to="/"><h1 className="header__title">Logo</h1></Link>
                    <ToggleTheme />
                </div>
            </div>
        </header >
    );
}

export default Header;