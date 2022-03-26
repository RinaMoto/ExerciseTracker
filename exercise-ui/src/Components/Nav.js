import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <Link to="/" id="button">Home</Link>
            <Link to="/create-page" id="button">Add an exercise</Link>
        </nav>
    )
}