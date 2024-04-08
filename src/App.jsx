import './App.css';
import { useEffect, useRef, useState } from 'react';

import Sidebar from './components/Sidebar';
import { Main } from './components/Main';
import httpHelper from './helpers/HttpHelper'

function App() {
  
  const msgEnd = useRef(null);

  const api = httpHelper();

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: 'Olá',
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const texto = input;
    setInput('');
    setMessages([...messages, { text: texto, isBot: false }]);
    api
      .post('/chats/1/mensagens', { body: {texto: texto} })
      .then(resposta => {
        console.log(resposta);
        setMessages([
          ...messages,
          { text: texto, isBot: false },
          { text: resposta.texto, isBot: true },
        ]);
      })
      .catch(err => console.log(err))    
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') await handleSend();
  };

  const handleQuery = async (e) => {
    const text = e.target.value;
    setMessages([...messages, { text, isBot: false }]);

    const res = await sendMsg(text);
    setMessages([
      ...messages,
      { text: text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  return (
    <div className="App">
      <Sidebar handleQuery={handleQuery} />
      <Main
        handleEnter={handleEnter}
        messages={messages}
        msgEnd={msgEnd}
        input={input}
        setInput={setInput}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;
