import { useState } from "react";
import Player from "../components/Player"
import SingleDie from "../components/SingleDie";

export default function DiceGame() {
  const [ players, setPlayers ] = useState([
    { id: 1, name: "Jan", score: 0 },
    { id: 2, name: "Piet", score: 0 }
  ])

  const rollDice = id => {
    const roll = Math.floor(Math.random() * 7)
    console.log(roll)

    const new_players_array = players.map(player => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + roll 
        }
       } else {
          return player;
        }
      })
      setPlayers(new_players_array)
  } 

return (
  <div>
    {/* <button onClick={rollDice}>Roll Dice!</button> */}
   {players.map(player => (
     <Player 
     key={player.id} 
     id={player.id} 
     name={player.name} 
     score={player.score}
     rollDice={rollDice} />
   ))}
  

  </div>
)
}
