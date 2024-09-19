import React, { useState } from "react";
import MessageBox from "./components/MessageBox/messageBox";

const App: React.FC = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleClose = async () => {
    setShowMessage(false);
  };
  const fetchMessage = async () => {
    const response = await fetch("http://localhost:8888");
    const fetchedData = await response.json();
    setShowMessage(true);
    setMessage(fetchedData.message);
  };
  return (
    <div className="App">
      {showMessage && (
        <MessageBox message={message} type="info" onClose={handleClose} />
      )}
      <button onClick={() => fetchMessage()}>Show Message</button>
      <h1>****</h1>
    </div>
  );
};

export default App;
