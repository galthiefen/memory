import './App.css';
import { useState } from 'react';
import Score from './components/Score';
import Board from './components/Board';

const cardIds = Array(16).fill(0).map((val, index)=> index + 1);
cardIds.sort(() => 0.5 - Math.random())

function App() {

  const [score, setScore] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(
    parseInt(localStorage.getItem('bestScore') || '0')
  )
  const finishGameCallback = () => {
    const newBestScore = score < bestScore || bestScore === 0 ? score : bestScore
    setBestScore(newBestScore)
    localStorage.setItem('bestScore', newBestScore.toString())
  }

  return (
    <div className="app-container">
      <Score
        moves={moves}
        score={score}
        bestScore={bestScore}
      />
      <Board
        setMoves={setMoves}
        setScore={setScore}
        finishGameCallback={finishGameCallback}
        cardIds={cardIds}
      />
    </div>
  )
}

export default App