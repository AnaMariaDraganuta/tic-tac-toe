import PropTypes from 'prop-types';
import './Board.css';
import Box from '../Box/Box';

const Board = ({ boxes, onClick, disabled }) => {
  return (
    <div className="board">
      {boxes.map((value, index) => (
        <Box key={index} value={value} onClick={() => onClick(index)} disabled={disabled[index]} />
      ))}
    </div>
  );
};

export default Board;

Board.propTypes = {
    boxes: PropTypes.any,
    onClick: PropTypes.any,
    disabled: PropTypes.anyy
  };