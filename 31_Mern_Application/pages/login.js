import React from 'react';
import { Message, Form, Segment, Button, Icon } from "semantic-ui-react";
import Link from "next/link";
import catchErrors from '../utils/catchErrors';
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import { handleLogin } from '../utils/auth';

const INITIAL_USER = {
  email: '',
  password: ''
}

function login() {

  const [user, setUser] = React.useState(INITIAL_USER)
  const [disabled, setDisabled] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el))
    isUser ? setDisabled(false) : setDisabled(true)
  }, [user])

  function handleChange(event) {
    const { name, value } = event.target
    setUser(prevState => (
      { ...prevState, [name]: value }
    ))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setLoading(true)
      setError('')
      const url = `${baseUrl}/api/login`
      const payload = { ...user }
      const response = await axios.post(url, payload)
      handleLogin(response.data)
    } catch (error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Message attached icon="privacy" header="Welcome back!" content="Log in with email and password" color="blue" />
      <Form onSubmit={handleSubmit} loading={loading} error={Boolean(error)} >
        <Message error header="Oops!" content={error} />
        <Segment>
          <Form.Input fluid icon="envelope" iconPosition='left' value={user.email} label='Email' type='email' placeholder='Email' name='email' onChange={handleChange} />
          <Form.Input fluid icon="lock" iconPosition='left' value={user.password} label='Name' type='password' placeholder='Password' name='password' onChange={handleChange} />
          <Button icon='sign in' type='submit' color='orange' content='Login' disabled={disabled || loading } />
        </Segment>
      </Form>
      <Message attached="bottom" warning>
        <Icon name='help' />
        New user? {" "}
        <Link href='/signup'>
          <a>Sign up here</a>
        </Link> {" "}instead.
      </Message>
    </>
  );
}

export default login;

