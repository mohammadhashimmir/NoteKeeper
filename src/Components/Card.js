import { useState } from 'react';
import DeleteModal from './DeleteModal';
import "../Styles/Card.css";
import Icon from '@mdi/react';
import { mdiPin, mdiDelete } from '@mdi/js';

function Card({ note, toggleIt, deleteIt, checkBox, clickPin }) {
    const [deleteMod, setDeleteMod] = useState(false)

    // Toggle Edit Modal 
    const onCardBodyClick = () => {
        toggleIt(true)
    };
    // Delete button Click 
    const onDeleteClick = () => {
        setDeleteMod(!deleteMod);
    };
    // cancel Delete Callback 
    const onCancelDelClick = (val) => {
        setDeleteMod(val)
      
    };
    // checkbox change
    const onCheckboxChange = () => {
        checkBox(note.id, !note.checked)
    }
    // pinned notes 
    const onPinClick = () => {
        clickPin(note.id, !note.pinned)
    }

    return (
        <>
            <div className="column is-4" title='Edit/View note'>
                <div className="card">

                    <header className="card-header" >
                        <p className={note.checked ? 'card-header-title title-line-through' : 'card-header-title'}>{note.title}</p>
                        <input
                            className='checkbox-inp'
                            type='checkbox'
                            checked={note.checked}
                            onChange={onCheckboxChange}
                            title='Mark as Done'
                        />
                        <div style={{padding:"4px"}}>
                        <button className={note.pinned ? 'button is-success' : 'button'} onClick={onPinClick}  title='Pin Note'>
                            <Icon path={mdiPin} size={0.8} />
                        </button>
                        <button className="button" onClick={onDeleteClick} title='Delete Note'>
                            <Icon path={mdiDelete} size={0.8} />
                        </button>
                        </div>
                       
                    </header>

                    <div className="card-content" onClick={onCardBodyClick} style={{overflow:"hidden"}}>
                        <span className="is-family-code is-size-7">Created:{note.dateTimeCreated}</span>
                        <p className={note.checked ? 'title is-6 title-line-through' : 'title is-6'}>{note.tagline}</p>
                        <div className="content">{note.description}</div>
                    </div>
                </div>
            </div>

            {deleteMod ? <DeleteModal deleteIt={deleteIt} noteId={note.id} cancelDel={onCancelDelClick} /> : null}
        </>
    )
};
export default Card;