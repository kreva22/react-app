import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the list of notes
  const [notes, setNotes] = useState([]);
  // State to manage the content of the new note
  const [newNote, setNewNote] = useState('');

  // Function to handle changes in the input field
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  // Function to handle form submission (adding a new note)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newNote.trim() !== '') { // Ensure note is not empty
      setNotes([...notes, newNote]); // Add the new note to the list
      setNewNote(''); // Clear the input field
    }
  };

  // Function to handle deleting a note
  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1); // Remove the note at the specified index
    setNotes(updatedNotes); // Update the notes list
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Note Making App</h1>
      </header>
      <div className="note-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your note"
            value={newNote}
            onChange={handleChange}
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
      <div className="note-list">
        <h2>Notes</h2>
        {/* Map through the notes array and render each note */}
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note}</p>
            {/* Button to delete the note */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
