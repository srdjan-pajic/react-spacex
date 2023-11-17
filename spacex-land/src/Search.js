const Search = ({ onSearch }) => {
    return (
        <form onChange={(e) => onSearch(e.target.value)} className="search">
            <label className="search__label sr-only" htmlFor="search">
                Search
            </label>
            <input
                type="text"
                className="search__input"
                id="search"
                placeholder="Search"
            />
        </form>
    );
};

export default Search;