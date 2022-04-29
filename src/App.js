import React from "react"
import "./App.css"

function App() {
  const [count, setCount] = React.useState(0)
  const [load, setLoad] = React.useState(false)

  console.log(count, load)

  async function getNumberTest() {
    setLoad(true)
    const respone = await fetch("https://counterofnumbers.herokuapp.com/number")
    const data = await respone.json()
    setLoad(false)
    console.log("get: ", data)
    setCount(data[0].number)
  }
  async function setNumberTest() {
    const respone = await fetch(
      "https://counterofnumbers.herokuapp.com/addnumber",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: count,
        }),
      }
    )
  }

  React.useEffect(() => {
    getNumberTest()
  }, [])

  function setNumber(e) {
    setCount(e.currentTarget.value)
    console.log("count", count)
    setLoad(true)
    setNumberTest()
    setLoad(false)
  }
  console.log(count)

  return (
    <div className="App">
      {load ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          <input type="number" onChange={setNumber} />
          <h1>{count}</h1>
        </div>
      )}
    </div>
  )
}

export default App
