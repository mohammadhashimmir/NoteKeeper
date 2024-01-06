import SearchNotes from "./SearchNotes";
import "../Styles/Header.css"

function Header({searchList, searchTerm}) {
    return (
        <nav className="navbar is-responsive is transparent n1">
            <div className="navbar-start">
                <div className="navbar-item">
                    <p><span className="is-size-5 head-logo">Note Keeper</span></p>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <SearchNotes searchList={searchList} searchTerm={searchTerm}/>
                </div>
            </div>
        </nav>

    )
};
export default Header;

