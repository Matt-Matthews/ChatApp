/* eslint-disable no-unused-vars */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import WaitingRoom from "./components/WaitingRoom";
import { useEffect, useState } from "react";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [conn, setConnection] = useState();
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (username, chatroom) => {
    try {
      const _conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5049/chat")
        .configureLogging(LogLevel.Information)
        .build();
      _conn.on("ReceiveMessage", (username, msg) => {
        console.log("msg:", msg);
        setMessages((mgs) => [...mgs, { username, msg }]);
        console.log(messages);
      });

      _conn.on("ReceiveSpecificMessage", (username, msg) => {
        console.log("msg:", msg);

        setMessages((messages) => [...messages, { username, msg }]);
      });

      await _conn.start();
      await _conn.invoke("JoinSpecificChatRoom", { username, chatroom });

      setConnection(_conn);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (message) => {
    try {
      await conn.invoke("SendMessage", message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to the F1 ChatApp</h1>
            </Col>
          </Row>
          {!conn ? (
            <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
          ) : (
            <ChatRoom messages={messages} sendMessage={sendMessage} />
          )}
        </Container>
      </main>
    </div>
  );
}

export default App;
