import './/Header.css';
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <header>     
            <div className="logo"><Link to="/"><p><span>Entry</span> Level</p></Link></div>
            <nav>
                <ul>
                    <li><Link to="/community">Comunidad</Link></li>
                    <li><Link to="/jobs">Empleos</Link></li>
                    <li><Link to="/sign-up" className="btn">Registro</Link></li>
                    <li><Link to="/login" className="btn">Iniciar sesión</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;