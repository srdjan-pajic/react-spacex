const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Logo</h1>
                <button type="button" className="header__toggle-theme">Toggle</button>
            </div>
        </header>
    );
}

export default Header;