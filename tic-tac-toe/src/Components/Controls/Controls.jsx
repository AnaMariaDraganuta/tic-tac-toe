import PropTypes from 'prop-types';
import './Controls.css';

const Controls = ({ onReset, onNewGame }) => {
  return (
    <div className="controls">
      <button id="reset-btn" onClick={onReset}>Reset</button>
      <button id="new-btn" onClick={onNewGame}>New Game</button>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
    onReset: PropTypes.any,
    onNewGame: PropTypes.any


  };