import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note/Note';

class App extends Component {
  constructor(props) {
    super(props);
    
    //We are going to setup the React state of our component
    this.state = {
      notes: [
        { id: 1, noteContent: 'Note 1 here' },
        { id: 2, noteContent: 'Note 2 here' }
      ],
    }
  }

  render() {
    return (
      <div className='notesWrapper'>
        <div className='notesHeader'>
          <div className='heading'>
            <h1>React and Firebase Notes</h1>
          </div>
        </div>
        <div className='notesBody'>
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={ note.noteContent } noteId={ note.id } key={ note.id } />
              )
            })
          }
        </div>
        <div className='notesFooter'>
          Footer will go here...
        </div>
      </div>
    );
  }
}

export default App;
