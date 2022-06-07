export default function Player(props) {
  const onClickRoll = () => {
  props.rollDice(props.id)
  }

  return (
     <div>
      <p>{props.name} Score: {props.score}</p>
      <button onClick={onClickRoll}>Roll Dice!</button>
     </div>
  )
}