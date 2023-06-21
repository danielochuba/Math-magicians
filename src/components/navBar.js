import { Link } from 'react-router-dom';

function Navbar() {
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 3%',
    border: '3px solid black',
    margin: ' 1% 3% 2%',
    height: '80px',
  };
  return (
    <nav style={navStyles}>
      <h1 className="heading">Math Magicians</h1>
      <div className="navLinks" style={{ display: 'flex', columnGap: '5px' }}>
        <Link to="/">Home </Link>
        |
        <Link to="/calculator">Calculator </Link>
        |
        <Link to="/quote">Quote</Link>
      </div>
    </nav>
  );
}

export default Navbar;
