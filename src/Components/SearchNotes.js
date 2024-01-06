import "../Styles/SearchNotes.css"

function SearchNotes({ searchList, searchTerm }) {
    
    const onSearchTermChange = (e) => {
        searchList(e.target.value)
    };
    return (
        <div className="is-pulled-right">
            <div className="field has-addons">
                <div className="control">
                    <input className="input i1" type="text"
                        value={searchTerm}
                        placeholder="Find notes"
                        onChange={onSearchTermChange}
                    />
                </div>
            </div>
        </div>
    )
};
export default SearchNotes;