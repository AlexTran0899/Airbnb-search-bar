
import {useState} from "react"
import ZipCode from "zipcodes";
function App() {
  const [value, setValue] = useState("")
  const [data, setData] = useState(null)
  const handelChanges = (e) => {
    const { value } = e.target;
    setValue(value);
    console.log(ZipCode.lookup(value))

    setData(ZipCode.lookup(value))
  };
  return (
    <div className="App">
        <input
                name="zipcode"
                onChange={handelChanges}
                value={value}
              />
        <p>City:{data?.city}</p>
        <p>State:{data?.state}</p>

    </div>
  );
}

export default App;
