import './index.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
            <nav className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
               
            </nav> 
    )
}