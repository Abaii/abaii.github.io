import { useState } from 'react'
import './App.css';
const notesWithRelativeMinors = {
  'C': 'A',
  'G': 'E',
  'D': 'B',
  'A': 'F♯',
  'E': 'C♯',
  'B': 'G♯',
  'G♭': 'E♭',
  'D♭': 'B♭',
  'A♭': 'F',
  'E♭': 'C',
  'B♭': 'G',
  'F': 'D',
}
const majorKeyCircle = Object.keys(notesWithRelativeMinors)
const minorKeyCircle = Object.values(notesWithRelativeMinors)

const noteQuality = ['♭', '♯']
const chordType = ['m', 'maj']
const extensions = ['7', '9']
const inversion = ['1st inversion', 'root position', '2nd inversion']

const createChordList = () => {
  const majorChords = majorKeyCircle.map((majorNote) => {
    return `${majorNote}maj`
  })
  const minorChords = minorKeyCircle.map((minorNote) => {
    return `${minorNote}m`
  })
  return [...majorChords, ...minorChords]
}
const generateChord = (chordList) => 
  chordList[Math.floor(Math.random() * chordList.length)];
  

function App() {
  const [chord, setChord] = useState('Cmaj')
  const [chordlist, setChordList] = useState(createChordList())

  const onClick = () => {
    setChord(generateChord(chordlist))
  }
  return (
    <div className="App">
      <div className="navbar">
        <h1>Chord generator</h1>
      </div>
      <div className="container">
        <h2 className="chord">{chord}</h2>
        <p className="inversion">{inversion[Math.floor(Math.random()* inversion.length)]}</p>
        <button className="generate" onClick={() => onClick()}>New chord</button>

      </div>
    </div>
  );
}

export default App;
