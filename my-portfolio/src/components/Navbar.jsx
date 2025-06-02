import { Link, useLocation } from 'react-router-dom';
const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">MyPortfolio</h1>
        <ul className="navbar-links">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`navbar-link${
                  location.pathname === path ? ' active' : ''
                }`}
                aria-current={location.pathname === path ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
