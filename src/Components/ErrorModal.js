function ErrorModal({error, close}){
    const onDismissClick=()=>{
        close(false);
    }
    return (
        <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <section className="modal-card-body" style={{textAlign:"center"}}>
            <p className="title is-4 has-text-danger">{error}</p>
            <button className="button is-success" onClick={onDismissClick}>Dismiss</button>
          </section>     
        </div>
      </div>
)
};
export default ErrorModal;