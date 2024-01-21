/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function MessageContainer({ messages }) {
  return (
    <div>
        {messages.map((msg, index) => {
          return (
            <div key={index}>
                {msg.username}: {msg.msg}
            </div>
          );
        })}
    </div>
  );
}
