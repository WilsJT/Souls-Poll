import {useState, useEffect} from "react"
import Axios from "axios"
import "./App.css"

function App() {
  const [poll, setPoll] = useState({})

  useEffect(() => {
    Axios.get("http://localhost:3001")
      .then((response) => {
        console.log(response)
        setPoll(response.data)
      })
  }, [])

  useEffect(() => {
    Axios.post("http://localhost:3001", poll)
    .then((response) => console.log("Data sent"))
    .catch((err) => console.log(err))
  }, [poll])

  const vote = (title) => {
    // Create deep copy
    let temp = JSON.parse(JSON.stringify(poll))
    temp[title] += 1
    setPoll(temp)
    console.log(poll)
  }

  return (
    <div className="App">
      <div className="poll">
        {Object.entries(poll).map((game) =>
          Number.isInteger(game[1]) ?
          <li key={game}>
            <button onClick={() => vote(game[0])}>+</button>
            {game[0]}: {poll[game[0]]}
          </li> :
          null
        )}
      </div>
    </div>
  );
}

export default App;
