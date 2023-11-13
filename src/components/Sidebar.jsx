import Logo from '../assets/logo.png';
import AddBtn from '../assets/add-30.png';
import MsgIcon from '../assets/message.svg';

const Sidebar = ({ handleQuery }) => {
  return (
    <div className="sideBar">
      <div className="upperSide">
        <div className="upperSideTop">
          <img
            src={Logo}
            alt="logo"
            className="logo"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              objectFit: 'contain',
              backgroundColor: 'white',
            }}
          />
          <span className="brand">Chat-App</span>
        </div>
        <button
          className="midBtn"
          onClick={() => {
            window.location.reload();
          }}
        >
          <img src={AddBtn} alt="addBtn" className="addBtn" />
          New Chat
        </button>
        <div className="upperSideBottom">
          <button
            className="query"
            value={'Opções de perguntas'}
            onClick={handleQuery}
          >
            <img src={MsgIcon} alt="MsgIcon" />
            Opções de perguntas
          </button>
          <button
            className="query"
            value={'Opções de perguntas 2'}
            onClick={handleQuery}
          >
            <img src={MsgIcon} alt="MsgIcon" />
            Opções de perguntas 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
