import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <>
      <ul type='None'>
        <li><NavLink to={"/User"}>User</NavLink></li>
      </ul>
    </>
  )
}

export default Header
