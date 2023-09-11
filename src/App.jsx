import { useEffect, useState } from "react"
import SmileCard from "./comonents/SmileCard"
import { data } from "./db/data";

function App() {

  const [dataFromBc, setDataFromBc] = useState([])

  useEffect(() => {
    setDataFromBc(data)
  }, [])

  const [arr, setArr] = useState([])


  return (
    <>
      <main>
        <h2 className="title">Smile rating</h2>
        <div className="container">
          {dataFromBc.map((item) => (
            <SmileCard key={item.id} smile={item.smile} />
          ))}
        </div>
        <button className="winner"
        
        >See a winner!</button>
        <span>{arr}</span>
      </main>
    </>
  )
}

export default App
