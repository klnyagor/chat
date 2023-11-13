import './App.css';
import { useEffect, useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import { Main } from './components/Main';

function App() {
  const msgEnd = useRef(null);

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: 'Hi',
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  // gambiarra/função para enviar a msg para o modelo
  const gambiarra =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis illo debitis perspiciatis, impedit, minus placeat maiores quo, consequatur atque omnis quam ratione assumenda aspernatur distinctio nulla porro maxime libero tempora!';
  const sendMsg = (msg) => {
    // ...= async (msg)...
    const res = `Mensagem recebida: ${msg} ${gambiarra}`; //...= await <função que envia msg e retorna resposta do modelo>...
    return res;
  };

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([...messages, { text, isBot: false }]);

    // console.log(input);
    // const res = await <Função que envia a pergunta e retorna uma resposta>(input);
    const res = await sendMsg(text);
    // res = <resposta>
    // console.log(res);
    setMessages([
      ...messages,
      { text: text, isBot: false },
      { text: res, isBot: true },
    ]);
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
