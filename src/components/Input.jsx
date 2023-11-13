import SendImg from '../assets/send.svg';

const Input = ({ input, setInput, handleSend, handleEnter }) => {
  return (
    <div className="inp">
      <input
        type="text"
        placeholder="Send a message"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleEnter}
      />
      <button className="send" onClick={handleSend}>
        <img src={SendImg} alt="send" />
      </button>
    </div>
  );
};

export default Input;
