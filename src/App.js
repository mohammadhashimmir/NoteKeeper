import 'bulma/css/bulma.min.css';
import Header from './Components/Header';
import { useState, useEffect } from 'react';
import AddNotes from './Components/AddNotes';
import "./Styles/App.css"
import LandingPage from './Components/LandingPage';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from './config/Firestore';
import NoteList from './Components/NoteList';
import ErrorModal from './Components/ErrorModal';
import Loader from './Components/Loader';

function App() {
  const [add, setAdd] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [showLoader, setShowLoader]=useState(false);

  //  handling error 
  const handleError = (error, errorMessage) => {
    console.error(error);
    setError(errorMessage);
    setErrorModalVisible(true);
  };

  // getting data 
  const fetchNotes = async () => {
    setShowLoader(true);
    try {
      const querySnapshot = await getDocs(collection(db, "notes"));
      const fetchedNotes = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setNotes(fetchedNotes);
    } catch (error) {
      handleError(error, "Error Fetching Notes")
    }
    finally{
      setShowLoader(false)
    }
  };
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  opening modal 
  const onAddClick = () => {
    setAdd(true)
  }
  //  closing modal
  const onModalClose = (val) => {
    setAdd(val)

  }

  // adding data 
  const onSaveNote = async (value1, value2, value3) => {
    const newTask = {
      dateTimeCreated: new Date().toLocaleString(),
      title: value1,
      tagline: value2,
      description: value3,
      checked: false,
      pinned: false
    };
    try {
      await addDoc(collection(db, 'notes'), {
        ...newTask
      });
    } catch (error) {
      handleError(error, "Error Adding Notes")
    }
    await fetchNotes();
  };

  //  deleting data 
  const onDelete = async (val) => {
    try {
      await deleteDoc(doc(db, "notes", val));
      await fetchNotes();
    } catch (error) {
      handleError(error, "Error Deleting Note")
    }
  }

  // saving edited Data
  const onSaveEdit = async (id, val1, val2, val3) => {
    try {
      const updatedNote = {
        title: val1,
        tagline: val2,
        description: val3
      }
      const noteRef = doc(db, "notes", id);
      const currentNoteSnapshot = await getDoc(noteRef);
      const currentNote = currentNoteSnapshot.data();
      const updated = { ...currentNote, ...updatedNote };
      await updateDoc(noteRef, updated);
      await fetchNotes();
    } catch (error) {
      handleError(error, "Error modifying note")
    }
  };

  // checkbox click 
  const checkCheckBox = async (id, value) => {
    try {
      const noteRef = doc(db, "notes", id);
      await updateDoc(noteRef, {
        checked: value
      });
      await fetchNotes();
    } catch (error) {
      handleError(error, "could not Mark")
    }
  };

  // pin cick 
  const onPinClick = async (id, value) => {
    try {
      const noteRef = doc(db, "notes", id);
      await updateDoc(noteRef, {
        pinned: value
      });
      await fetchNotes();
    } catch (error) {
      handleError("Could not Pin")
    }
  };

  // search 
  const getSearchTerm = (val) => {
    setSearchTerm(val)
  };

  // close Error modal 
  const closeError = (value) => {
    setErrorModalVisible(value)
  };
  return (
    <div>

      <div>
        {errorModalVisible ? <ErrorModal error={error} close={closeError} /> : null}
        <Header searchList={getSearchTerm} searchTerm={searchTerm} />
        <LandingPage onAdd={onAddClick} />
        <p><span className="is-size-4 counter">{notes.length === 1 ? `1 task` : `${notes.length} tasks`}</span></p>
      </div>

      {add ? <AddNotes save={onSaveNote} close={onModalClose} /> : null}
      <br />
      { showLoader ? <Loader/>
      :<NoteList notes={notes} deleteIt={onDelete} onSave={onSaveEdit} checkBox={checkCheckBox} clickPin={onPinClick} searchTerm={searchTerm} load={showLoader}/> }

    </div>
  );
}
export default App;
