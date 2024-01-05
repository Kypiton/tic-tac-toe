export default function Log({ gameTurns }) {
  return (
    <ol id='log'>
      {gameTurns.map((turn, i) => (
        <li key={i}>
          X - {turn.square?.row}, Y - {turn.square?.col}, Player - {turn.player}
        </li>
      ))}
    </ol>
  );
}
