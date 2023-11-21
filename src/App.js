import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState('username');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(()=>{

  }, []);

  const submit = () => {
    
  }
  return (
    <div className = "Container">
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
    <div className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
      <input className="fs-5 fw-semibold" value={username} onChange={e => setUsername(e.target.value)}/>
    </div>
    <div className="list-group list-group-flush border-bottom scrollarea">
      {messages.map(message => {
        return(     
           <div className="list-group-item list-group-item-action py-3 lh-sm">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">{message.username}</strong>
            </div>
            <div className="col-10 mb-1 small">{message.message}</div>
          </div>
          )
      })}
    </div>
  </div>
  <form onSubmit={submit}>
    <input className="form-control" placeholder="Write a msg" value={message}
    onChange={e => setMessage(e.target.value)}/>
  </form>
  </div>
  );
}

export default App;
