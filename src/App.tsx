
import { ReactNode } from 'react'


function App(props: { children: ReactNode }) {


  return (
    <>
      <div className="mb-10">
        <span  className="cursor-pointer">
          <img src={"assets/icons/previous.png"} alt="" className="w-10 duration-300  hover:translate-x-1" />
        </span>
      </div>
      {props.children}
    </>
  )
}

export default App
