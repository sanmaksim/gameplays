import { Joystick } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    const linkClass = ({ isActive }: { isActive: boolean }) => isActive ? 'nav-link active' : 'nav-link';

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand><Link to="/"><Joystick size={30} /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <Link className="dropdown-item" to="/user/profile">Profile</Link>
                            <Link className="dropdown-item" to="/user/settings">Settings</Link>
                            <Link className="dropdown-item" to="/help">Help</Link>
                            <Link className="dropdown-item" to="/user/logout">Logout</Link>
                        </NavDropdown>
                        <NavLink className={linkClass} to="/user/games">My Games</NavLink>
                        <NavDropdown title="Games" id="basic-nav-dropdown">
                            <Link className="dropdown-item" to="/games/all">All Games</Link>
                            <Link className="dropdown-item" to="/games/popular">Popular Games</Link>
                            <Link className="dropdown-item" to="/games/top">Top 100 Games</Link>
                            <NavDropdown.Divider />
                            <Link className="dropdown-item" to="/games/recommended">Recommended Games</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
