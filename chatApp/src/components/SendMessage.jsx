/* eslint-disable react/prop-types */
import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

export default function SendMessage({sendMessage}) {
    const [msg, setMessage] = React.useState('')
  return (
    <Form onSubmit={e => {
        e.preventDefault();
        sendMessage(msg)
        setMessage('');
    }}>
        <InputGroup className='mb-3' >
            <InputGroup.Text>Chat</InputGroup.Text>
            <Form.Control onChange={e => setMessage(e.target.value)} placeholder='type message'></Form.Control>
            <Button variant='primary' type='submit' disabled={!msg}>Send</Button>
        </InputGroup>
    </Form>
  )
}
