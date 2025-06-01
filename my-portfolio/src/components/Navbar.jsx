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
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">MyPortfolio</h1>
        <ul className="flex gap-4 text-gray-700">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`${
                  location.pathname === path
                    ? 'text-primary font-semibold'
                    : 'hover:text-primary'
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
