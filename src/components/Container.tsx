import { FC } from 'react'
import Dashboard from "./Dashboard"
import Login from "./Login"

const Container: FC = () => {
  return (
    <div className="container">
      {/* 'container' */}
      <Dashboard />
      <Login />
   </div>
 )
}

export default Container