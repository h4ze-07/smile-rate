import { useState } from "react"
import SmileCard from "./comonents/SmileCard"

function App() {

  const [smile1, setSmile1] = useState(0)
  const [smile2, setSmile2] = useState(0)
  const [smile3, setSmile3] = useState(0)

  const [arr, setArr] = useState([])

  const [winner, setWinner] = useState(null)

  const handleClick = () => {

    let maxValue = 0;

    smiles.forEach((smile) => {
      smile.counter >= maxValue ? maxValue = smile.counter : null
    })

    smiles.forEach((smile) => {
      if (maxValue === smile.counter) {
        setWinner(smile)
      }
    })

    setSmile1(0)
    setSmile2(0)
    setSmile3(0)
    maxValue = 0
  }

  const handleWinner = () => {
    setWinner(null)
  }

  const smiles = [
    {
      id: 1,
      smile: '😊',
      counter: smile1,
      func: setSmile1,
    },
    {
      id: 2,
      smile: '😒',
      counter: smile2,
      func: setSmile2,
    },
    {
      id: 3,
      smile: '❤️',
      counter: smile3,
      func: setSmile3,
    }
  ]

  return (
    <>
      <main>
        <h2 className="title">Smile rating</h2>
        {!winner &&
          <div>
            <div className="container">
              {smiles.map((smile) => (
                <SmileCard key={smile.id} smile={smile} />
              ))}
            </div>
            <button className="winner"
            onClick={handleClick}
            >See a winner!</button>
          </div>
        }
        {winner && 
        <div className="smileContainer">
          <h2 className="title">WINNER!</h2>
          <p>Total clicks: {winner.counter}</p>
          <p className="smile">{winner.smile}</p>
          <button className="rateBtn" onClick={handleWinner}>Got it</button>
        </div>}
      </main>
    </>
  )
}

export default App
