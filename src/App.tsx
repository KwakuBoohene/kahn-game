import { ReactNode } from 'react'

function App(props: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="mb-10">
         
        </div>
        {props.children}
      </div>
    </>
  )
}

export default App
