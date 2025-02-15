import './Box.css';
import PropTypes from 'prop-types';

const Box = ({ value, onClick, disabled }) => {
  return (
    <button className="box" onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};

export default Box;

Box.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  };