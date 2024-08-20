import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-cyan-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold mb-4">Gold's Gym</h1>
          <span className="text-white text-lg ml-4">Undo Your Limits</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/profilepage" className="text-white">Profile</Link>
          {/* <Link to="/saved" className="text-white">Saved</Link> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
