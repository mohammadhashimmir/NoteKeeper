import "../Styles/LandingPage.css"
function LandingPage({ onAdd }) {
    return (
        <div className="landingDiv">
            <div className="columns">
                <div className="column is-half has-text-centered c1">
                    <button className="button is-medium is-responsive is-family-sans-serif"onClick={onAdd}>Add a note</button>
                </div>
                <div className="column is-half has-text-centered c2">
                    <h2 className="title is-1 is-size-5-mobile is-size-4-touch is-size-3-tablet">"Good Order is<br />the Foundation of<br />all things"</h2>
                    <h6 className="subtitle is-6">-Edmund Burke</h6>
                </div>
            </div>
        </div>
    )
};
export default LandingPage;

