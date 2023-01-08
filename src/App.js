import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"

export default function App() {
/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

    const [dice, setDice] = React.useState(allNewDice())
    
    function handleChange(id) {
      setDice(oldDice => {
        return oldDice.map(oldDie => {
          return (
            oldDie.id === id ? {
              ...oldDie,
              isHeld: !oldDie.isHeld
            }:
              oldDie
          )
      })})
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }
    
    function rollDice() {
        return setDice(oldDice => oldDice.map(oldDie => {
          return (
            oldDie.isHeld === false ?
              {...oldDie, value: Math.ceil(Math.random() * 6)} :
              oldDie
          )
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
          key={die.id} 
          value={die.value} 
          handleChange={() => handleChange(die.id)}
          isHeld={die.isHeld}
        />
    ))
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}