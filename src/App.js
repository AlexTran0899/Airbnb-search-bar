import logo from './logo.svg';
import './App.css';
import Date from'./date'
import {useState} from "react"
import Location from "./location"
function App() {
  const [showResults, setShowResults] = useState(false)
  const click = (item) => setShowResults(item)
  return (
    <div className="App">
      <Location/>
      <button onClick={()=> click("date")}>date</button>
      { showResults === "date" ? <Date/> : null}
    </div>
  );
}

export default App;
