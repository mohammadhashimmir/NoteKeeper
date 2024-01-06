import { useState } from "react";
import Card from "./Card";
import EditModal from "./EditModal";

function ToDisplay({ note, deleteIt, onSave, checkBox, clickPin }) {
    const [toggleEdit, setToggleEdit] = useState(false);
    const toggleIt = (val) => {
        setToggleEdit(val)
    }

    return (
        <>
            {toggleEdit ? <EditModal note={note} onSave={onSave} toggleIt={toggleIt} /> : null}
            <Card note={note} toggleIt={toggleIt} deleteIt={deleteIt} checkBox={checkBox} clickPin={clickPin}/>
        </>
    )
};

export default ToDisplay;