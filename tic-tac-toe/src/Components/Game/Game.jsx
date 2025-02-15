import { useState } from 'react';
import './Game.css';
import Board from '../Board/Board';
import Message from '../Message/Message';
import Controls from '../Controls/Controls';

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const Game = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [turnO, setTurnO] = useState(true);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(Array(9).fill(false));
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);

  const resetGame = () => {
    setBoxes(Array(9).fill(''));
    setTurnO(true);
    setCount(0);
    setMessage('');
    setDisabled(Array(9).fill(false));
  };

  const restartGame = () => {
    resetGame();
    setXWins(0);
    setOWins(0);
  };

  const handleBoxClick = (index) => {
    if (boxes[index] || disabled[index]) return;

    const newBoxes = boxes.slice();
    newBoxes[index] = turnO ? 'X' : 'O';
    setBoxes(newBoxes);
    setTurnO(!turnO);
    setCount(count + 1);
    checkWinner(newBoxes);
  };

  const checkWinner = (newBoxes) => {
    let winnerFound = false;

    winPatterns.forEach(pattern => {
      const [a, b, c] = pattern;
      if (newBoxes[a] && newBoxes[a] === newBoxes[b] && newBoxes[a] === newBoxes[c]) {
        setMessage(`Felicitări, câștigătorul este ${newBoxes[a]}`);
        setDisabled(Array(9).fill(true));
        if (newBoxes[a] === 'X') {
          setXWins(xWins + 1);
        } else {
          setOWins(oWins + 1);
        }
        winnerFound = true;
      }
    });

    if (count === 8 && !winnerFound) {
      setMessage('Jocul a fost remiză.');
      setDisabled(Array(9).fill(true));
    }
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      <Board boxes={boxes} onClick={handleBoxClick} disabled={disabled} />
      <Message message={message} />
      <div className="scoreboard">
        <p>Victoriile lui X: {xWins}</p>
        <p>Victoriile lui O: {oWins}</p>
      </div>
      <Controls onReset={resetGame} onNewGame={restartGame} />
    </div>
  );
};

export default Game;
