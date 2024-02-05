import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/create" className="">
                Create
              </Link>
            </li>
            <li>
              <Link to="/note" className="">
                Note
              </Link>
            </li>
            <li>
              <Link to="/about" className="">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
