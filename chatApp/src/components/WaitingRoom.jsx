/* eslint-disable react/prop-types */
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export default function WaitingRoom({joinChatRoom}) {
    const [username, setUsername] = React.useState()
    const [chatroom, setChatroo] = React.useState()

  return (
   <Form onSubmit={e=> {
    e.preventDefault();

    joinChatRoom(username, chatroom)
   }}>
        <Row className='px-5 py-5'>
            <Col sm={12}>
                <Form.Group>
                    <Form.Control placeholder='Username' onChange={e => setUsername(e.target.value)} />
                    <Form.Control placeholder='Chatroom' onChange={e => setChatroo(e.target.value)} />
                </Form.Group>
            </Col>
            <Col sm={12}>
                <hr />
                <Button variant='success' type='submit'>Join</Button>
            </Col>
        </Row>
   </Form>
  )
}
