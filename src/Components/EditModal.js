import { useState } from "react";
import "../Styles/EditModal.css"

function EditModal({ note, onSave, toggleIt }) {
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editTag, setEditTag] = useState(note.tagline);
    const [editDescription, setEditDescription] = useState(note.description);
    const [EditTitleError, setEditTitleError] = useState(false);
    const [EditDescriptionError, setEditDescriptionError] = useState(false);

    // edit form Submit
    const onFormSubmit = (e) => {
        e.preventDefault();
        const EditTitleError = editedTitle === "";
        const EditDescriptionError = editDescription === "";
        setEditTitleError(EditTitleError);
        setEditDescriptionError(EditDescriptionError);
        if (EditTitleError || EditDescriptionError) {
            return;
        }
        onSave(note.id, editedTitle, editTag, editDescription);
        toggleIt(false);
    }
    // edit modal cancel 
    const onEditCancelClick = () => {
        toggleIt(false);
    }
    // edit modal cancel 
    const onEditCrossClick = () => {
        toggleIt(false);
    }
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <form
                onSubmit={onFormSubmit}
            >
                <div className="modal-card c2">
                    <header className="modal-card-head h2">
                        <p className="modal-card-title">Edit</p>
                        <button className="delete d2" aria-label="close" onClick={onEditCrossClick}></button>
                    </header>

                    <section className="modal-card-body b2">
                        <div className="columns editCols">
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label is-small">Title</label>
                                    {EditTitleError ? <p class="help is-danger">This field cannot be empty</p> : null}
                                    <input className="input"
                                        type="text"
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                    />
                                </div>
                                <div className="field">
                                    <label className="label is-small">Tagline</label>
                                    <input className="input"
                                        type="text"
                                        value={editTag}
                                        onChange={(e) => setEditTag(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="field">

                                    <label className="label is-small">Description</label>
                                    {EditDescriptionError ? <p class="help is-danger">This field cannot be empty</p> : null}
                                    <textarea
                                        className="textarea"
                                        maxLength={100}
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>

                    </section>

                    <footer className="modal-card-foot f2">
                        <button className="button is-success" type="submit">Save</button>
                        <button type="button" className="button" onClick={onEditCancelClick}>Cancel</button>
                    </footer>
                </div>
            </form>
        </div>
    )
};
export default EditModal;