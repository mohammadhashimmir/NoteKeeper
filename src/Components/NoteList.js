import { useState } from "react";
import ToDisplay from "./ToDisplay";
import Pagination from "./Pagination";

function NoteList({ notes, deleteIt, onSave, checkBox, clickPin, searchTerm }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalItems = notes.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // search through notes 
    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // sort by date created
    const sortedNotes = [...filteredNotes].sort((a, b) => {
        const dateA = new Date(a.dateTimeCreated).getTime();
        const dateB = new Date(b.dateTimeCreated).getTime();
        return dateA - dateB;
    });

    // sort by pinned notes 
    const pinnedNotes = sortedNotes.filter((note) => note.pinned);
    const unpinnedNotes = sortedNotes.filter((note) => !note.pinned);

    const renderNotes = () => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentNotes = [...pinnedNotes, ...unpinnedNotes].slice(indexOfFirstItem, indexOfLastItem);

        return currentNotes.map((note) => (
            <ToDisplay note={note} key={note.id} deleteIt={deleteIt} onSave={onSave} checkBox={checkBox} clickPin={clickPin} />
        ));
    };
    return (
        <div>
            <div className="columns is-multiline">{renderNotes()}</div>
            <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};
export default NoteList;