import Logo from '../assets/logo.png';
import userIcon from '../assets/user-icon.jpg';
import Input from './Input';

export const Main = ({
  handleEnter,
  messages,
  msgEnd,
  input,
  setInput,
  handleSend,
}) => {
  return (
    <div className="main">
      <div className="chats">
        {/* Msg-Text area */}
        {messages.map((message, i) => (
          <div key={i} className={message.isBot ? 'chat bot' : 'chat'}>
            <img
              className="chatImg"
              src={message.isBot ? Logo : userIcon}
              style={
                message.isBot
                  ? {
                      width: '3.5rem',
                      height: '3.5rem',
                      objectFit: 'contain',
                      backgroundColor: 'white',
                    }
                  : {}
              }
              alt={message.isBot ? 'botIcon' : 'userIcon'}
            />
            <p className="txt">{message.text}</p>
          </div>
        ))}
        <div ref={msgEnd} />
      </div>
      <div className="chatFooter">
        {/* input area */}
        <Input
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          handleEnter={handleEnter}
        />
        <p>IA may produce inaccurate information</p>
      </div>
    </div>
  );
};
