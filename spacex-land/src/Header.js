import ToggleTheme from "./ToggleTheme";

const Header = () => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="header__container">
                    <h1 className="header__title">Logo</h1>
                    <ToggleTheme />
                </div>
            </div>
        </header>
    );
}

export default Header;