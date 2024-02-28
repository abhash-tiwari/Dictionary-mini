import React, {useState} from 'react';
import './App.css';



const data = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]

function App() {
const[text, setText]= useState("")
const[res, setRes] = useState("")

  
  
  const handleInputChange = (e) => {
    const inp = e.target.value
    setText(inp);
  }

const SubmitEvent = () => {
  const result = text.toLowerCase();
  const foundWord = data.find(item => item.word.toLowerCase() === result);
  if (foundWord) {
    setRes(foundWord.meaning);
  } else {
    setRes("Word not found in the dictionary.");
  }

}



  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input type="text" placeholder="Search for a word" value={text} onChange={handleInputChange}/>
      <button type="submit" onClick={SubmitEvent}>Submit</button>
      <h3>Definition:</h3>
      <p>{res}</p>
    </div>
  );
}

export default App;
