import React, { useState, useEffect } from 'react';

export const ServerMessage = ({ newMessage }) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    setMessage(newMessage);
  });

  return <div>{message}</div>;
};
