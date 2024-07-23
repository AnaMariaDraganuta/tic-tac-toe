import PropTypes from 'prop-types';
import './Controls.css';

const Controls = ({ onReset, onNewGame }) => {
  return (
    <div className="controls">
      <button className="reset-btn" onClick={onReset}>Reset Game</button>
      <button className="new-btn" onClick={onNewGame}>New Game</button>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
    onReset: PropTypes.func,
    onNewGame: PropTypes.func
  };