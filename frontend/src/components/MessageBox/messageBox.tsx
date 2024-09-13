// src/components/MessageBox.tsx

import React, { FC } from "react";
import "./Styles.css"; // Optional: for styling

// Define types for the props
type MessageBoxProps = {
  message: string;
  type?: "success" | "error" | "info"; // Optional message types
  onClose?: () => void; // Optional callback for when the close button is clicked
};

const MessageBox: FC<MessageBoxProps> = ({
  message,
  type = "info",
  onClose,
}) => {
  return (
    <div className={`message-box ${type}`}>
      <span>{message}</span>
      {onClose && (
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default MessageBox;
