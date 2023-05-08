import './App.css';
import { useState } from 'react';
import Score from './components/Score';
import Board from './components/Board';

const cardIds = Array(16).fill(0).map((val, index)=> index + 1);
cardIds.sort(() => 0.5 - Math.random())

function App() {

  // const [cardIds] = useState<Array<number>>
  const [moves, setMoves] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(
    parseInt(localStorage.getItem('bestScore') || '0')
  )
  const finishGameCallback = () => {
    const newBestScore = moves < bestScore ? moves : bestScore
    setBestScore(newBestScore)
    localStorage.setItem('bestScore', '' + newBestScore)
  }

  return (
    <div className="app-container">
      <Score
        moves={moves}
        bestScore={bestScore}
      />
      <Board
        setMoves={setMoves}
        finishGameCallback={finishGameCallback}
        cardIds={cardIds}
      />
    </div>
  );
}

export default App;