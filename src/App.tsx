import './App.css'
import { ReactNode } from 'react'

function App(props: { children: ReactNode }) {


  return (
    <>
      {props.children}
    </>
  )
}

export default App
