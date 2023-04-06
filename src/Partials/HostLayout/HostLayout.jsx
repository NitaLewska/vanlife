import './HostLayout.css'
import { Link, Outlet } from 'react-router-dom'

export default function Hostlayout() {
    return(
        <>
        <nav className='hostlayout_nav'>
            <ul>
                <li><Link to='/'>Dashboard</Link></li>
                <li><Link to='/'>Income</Link></li>
                <li><Link to='/'>Vans</Link></li>
                <li><Link to='/'>Reviews</Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}