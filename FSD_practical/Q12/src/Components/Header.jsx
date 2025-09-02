import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <>
      <ul type='None'>
        <li><NavLink to={"/Home"}>Home</NavLink></li>
        <li><NavLink to={"/About"}>About</NavLink></li>
        <li><NavLink to={"/Contact"}>Contact</NavLink></li>
      </ul>
    </>
  )
}

export default Header
