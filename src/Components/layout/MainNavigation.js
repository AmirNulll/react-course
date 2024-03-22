import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">all meat up</Link>
          </li>
          <li>
            <Link to="/favorites">favorites</Link>
          </li>
          <li>
            <Link to="/newmeetups">new meet ups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
