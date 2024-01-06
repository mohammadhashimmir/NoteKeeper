import { useState } from "react";
import "../Styles/AddNotes.css"
function AddNotes({ save, close }) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteTag, setNotetag] = useState("");
    const [noteDescription, setNoteDescription] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    //  form sumbit 
    const onFormSubmit = (e) => {
        e.preventDefault();

        const titleError = noteTitle === "";
        const descriptionError = noteDescription === "";

        setTitleError(titleError);
        setDescriptionError(descriptionError);

        if (titleError || descriptionError) {
            return;
        }
        save(noteTitle, noteTag, noteDescription);
        close(false)
    };
    // cross button click 
    const onCrossClick = () => {
        close(false)
    }
    // cancel button click 
    const onCancelClick = () => {
        close(false)

    }
    return (
        <>
            <div className="modal is-active">
                <div className="modal-background"></div>
                <form onSubmit={onFormSubmit}>
                    <div className="modal-card m1">
                        <header className="modal-card-head h1">
                            <p className="modal-card-title">Add Notes</p>
                            <button className="delete d1" aria-label="close" onClick={onCrossClick}></button>
                        </header>

                        <section className="modal-card-body b1">
                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <label className="label is-small">Title</label>
                                        {titleError ? <p class="help is-danger">This field cannot be empty</p> : null}
                                        <input className="input"
                                            type="text"
                                            value={noteTitle}
                                            onChange={(e) => setNoteTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className="field">
                                        <label className="label is-small">Tagline</label>
                                        <input className="input"
                                            type="text"
                                            value={noteTag}
                                            onChange={(e) => setNotetag(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <label className="label is-small">Description</label>
                                    {descriptionError ? <p class="help is-danger">This field cannot be empty</p> : null}
                                    <textarea
                                        className="textarea"
                                        maxLength={100}
                                        value={noteDescription}
                                        onChange={(e) => setNoteDescription(e.target.value)} />
                                </div>
                            </div>
                        </section>

                        <footer className="modal-card-foot f1">
                            <button className="button is-success" type="submit">Save Task</button>
                            <button type="button" className="button" onClick={onCancelClick}>Cancel</button>
                        </footer>
                    </div>
                </form>
            </div>
        </>

    )
};
export default AddNotes;