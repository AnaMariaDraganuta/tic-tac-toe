import './Message.css';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return (
    <div className={`msg-container ${message ? '' : 'hide'}`}>
      <p id="msg">{message}</p>
    </div>
  );
};

export default Message;
Message.propTypes = {
    message: PropTypes.array
  };
