import { useState } from 'react'
import './App.css'
import Logo from './componat/Logo/Logo';
import Form from './componat/Form/Form';
import PackingList from './componat/PackingList/PackingList';
import Usercontext from './Context/Usercontext';

function App() {

  return (
    <>
      <Usercontext>
        <Logo />
        <Form />
        <PackingList />
      </Usercontext>

    </>
  )
}

export default App
