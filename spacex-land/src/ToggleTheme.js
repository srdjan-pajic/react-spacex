const ToggleTheme = () => {
    return (
        <div className="toggle__holder">
            <img className="toggle__icon" src="../sun.svg" alt="img" />
            <button type="button" className="toggle__theme">
                <span className="sr-only">Toggle</span>
                <span className="toggle__ring"></span>
            </button>
            <img className="toggle__icon" src="../moon.svg" alt="img" />
        </div>
    );
}

export default ToggleTheme;