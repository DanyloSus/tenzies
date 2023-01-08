import React from "react"
import Die from "./components/Die"

function allNewDice() {
  let arr = []
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random()*6+1))
  }
  console.log(arr)
}

allNewDice()
export default function App() {
    return (
        <main>
            <div className="dice-container">
                <Die value="1" />
                <Die value="2" />
                <Die value="3" />
                <Die value="4" />
                <Die value="5" />
                <Die value="6" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
            </div>
        </main>
    )
}