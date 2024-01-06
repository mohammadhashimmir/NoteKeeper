function DeleteModal({ deleteIt, noteId, cancelDel }) {
    // delete Confirmation 
    const onConfirmClick = () => {
        deleteIt(noteId);
    };
    // delete Cancel 
    const onDeleteCancelClick = () => {
        cancelDel(false)
    };
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card is-responsive">
                <header className="modal-card-head">
                    <p className="modal-card-title">Confirm Deletion</p>
                </header>
                <footer className="modal-card-foot">
                    <button className="button is-danger" onClick={onConfirmClick}>Confirm</button>
                    <button className="button" onClick={onDeleteCancelClick}>Cancel</button>
                </footer>
            </div>
        </div>
    )
};
export default DeleteModal;