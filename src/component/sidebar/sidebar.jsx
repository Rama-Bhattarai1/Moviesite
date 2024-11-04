


import React from 'react';
import { Link } from 'react-router-dom';

const SideData = [
  {
    id: 1,
    name: "Home",
    path: "/indexhomepage"
  },
  {
    id: 2,
    name: "Featured",
    path: "/feature"
  },
  {
    id: 3,
    name: "Releases",
    path: "/"
  },
  {
    id: 4,
    name: "Popular",
    path: "/allpopular"
  },
  {
    id: 5,
    name: "TV Shows",
    path: "/"
  },
  {
    id: 6,
    name: "All Movies",
    path: "/allmovie",
  }
];

const Sidebar = ({ setSidebarVisible }) => {
  // const [isOpen, setIsOpen] = useState(false); // Corrected the state initialization

  return (
    <div className="bg-secondary text-white w-60 z-[999] h-85 rounded-lg absolute top-full left-full">
      {SideData.map((item, index) => (
        <Link to={item.path} onClick={() => {
          setSidebarVisible(false);
        }} key={index}>
          <div className="p-4">{item.name}</div>
        </Link>
      ))}
      <div>
        <h1>Genres</h1>
      </div>
    </div>
  );
};

export default Sidebar;
