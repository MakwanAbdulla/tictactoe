import { useState } from 'react'

import './App.css'

const app = () =>{
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [XTurn, setXTurn] = useState(true);

  const [gameStarted, setGameStarted] = useState(false);


  const handleClick = (index:number) => {
    if (!gameStarted || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = XTurn ? '❌' : '⭕';
    setBoard(newBoard);
    setXTurn(!XTurn);
  }
  const start = () => {
    setBoard(initialBoard);
    setXTurn(true);
    setGameStarted(true);
  };


  const restart = () => {
    setBoard(initialBoard);
    setXTurn(true);
  };
return (
  <div className='container'>
    <h1>Tic Tac Toe</h1>
    <div className='board'>
      {board.map((value, index) => (
        <button key={index} className='tile' onClick={() => handleClick(index)}>
          {value}
        </button>
      ))}
    </div>
    <button className='start-btn' onClick={start}>Start Game</button>
    <button className='restart-button' onClick={restart}>Restart Game</button>
    <p>Next Turn: {XTurn ? 'X' : 'O'}</p>
  </div>
)
}
export default app