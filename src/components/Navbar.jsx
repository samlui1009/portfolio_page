import { FaLaptopCode, FaRegFilePdf, FaUser, FaGithub, FaHome, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// Important for how single-page applications handle navigation
import resumePDF from "../assets/SL_BCS_Resume.pdf";
import './Navbar.css';

function Navbar() {
    return (
        <div className="bar-container">
        <nav className="navbar">
            <ul className="nav-options">
                <li><Link to="/"><FaHome/>Home</Link></li>
                <li><Link to="/aboutme"><FaUser/>About Me</Link></li>
                <li><a href={resumePDF} target="_blank"><FaRegFilePdf/>Resume</a></li>
                <li><a href="https://github.com/samlui1009" target="_blank"><FaGithub/>GitHub</a></li>
                <li><Link to="/projects"><FaLaptopCode/>Projects</Link></li>
                <li><Link to="/contactme"><FaEnvelope/>Contact Me</Link></li>
            </ul>
            {/* Link to is important here! */}
            {/* We want to avoid full page reloads with a href */}
            {/* Using that reloads the ENTIRE HTML page from scratch */}
            {/* All memory is lost, so the application has to restart = Slow */}
            {/* Link to keeps React running = Simply, a content switch! */}
        </nav>
        </div>
    )
}

export default Navbar