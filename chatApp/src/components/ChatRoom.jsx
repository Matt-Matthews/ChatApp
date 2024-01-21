/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessage from "./SendMessage";

export default function ChatRoom({messages, sendMessage}) {
  return (
    <div>
      <Row className="px-5 py-5">
        <Col sm={10}>
          <h2>Chatroom</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row className="px-5 py-5">
        <Col sm={12}>
            <MessageContainer messages={messages} />
        </Col>
        <Col sm={12}>
            <SendMessage sendMessage={sendMessage} />
        </Col>
      </Row>
    </div>
  );
}
