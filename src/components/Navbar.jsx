import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const location = useLocation()

    return (
        <nav className="navbar">
        <Link to="/" className="logo">Filip's Serve</Link>
        <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/locations" className={location.pathname === '/locations' ? 'active' : ''}>Locations</Link></li>
            <li><Link to="/customize" className={location.pathname === '/customize' ? 'active' : ''}>Customization</Link></li>
      </ul>
    </nav>
  )
}