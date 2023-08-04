import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 mx-3 mt-5 rounded-4 sidebar bg-primary text-white">
      <ul className="nav flex-column mx-4" style={{ fontSize: "1.3rem", marginTop: "70%" }}>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            Profiles
          </Link>
          <hr className="bg-white" />
        </li>
        <li className="nav-item">
          <Link to="/posts" className="nav-link text-white">
            Posts
          </Link>
          <hr className="bg-white" />
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-link text-white">
            Gallery
          </Link>
          <hr className="bg-white" />
        </li>
        <li className="nav-item">
          <Link to="/todo" className="nav-link text-white">
            ToDo
          </Link>
          <hr className="bg-white" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
